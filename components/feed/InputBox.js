import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { db, storage } from "../../firebase";
import {
  collection,
  addDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

import {
  VideoCameraIcon,
  EmojiHappyIcon,
  CameraIcon,
} from "@heroicons/react/solid";

export default function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const fileRef = useRef(null);
  const [imagePost, setImagePost] = useState(null);

  const submitPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    }).then((doc) => {
      console.log(doc.id);
      if (imagePost) {
        const storageRef = ref(storage, `posts/${doc.id}`);

        uploadString(storageRef, imagePost, "data_url").then((snapshot) => {
          getDownloadURL(storageRef).then((url) => {
            setDoc(doc, { postImage: url }, { merge: true }).then(
              (docRef) => {
                removeImage();
                inputRef.current.value = ""
              }
            );
          });
        });
      }
    });
  };

  const handleFileSelected = () => {
    let file = fileRef.current.files[0];
    let freader = new FileReader();
    freader.readAsDataURL(file);

    freader.onload = (event) => {
      setImagePost(event.target.result);
    };
  };

  const removeImage = () => setImagePost(null);

  return (
    <div className="flex flex-col mt-5 bg-white p-5 rounded-md">
      <div className="flex space-x-2 items-center">
        <Image
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          objectFit="cover"
          className="rounded-full"
        />

        <form onSubmit={submitPost} className="flex flex-1">
          <input
            ref={inputRef}
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
            className="w-full px-5 py-3 rounded-full outline-none bg-gray-100 text-gray-700 placeholder-gray-600"
          />
          <input type="submit" hidden />
        </form>

        {imagePost && (
          <Image
            src={imagePost}
            width={80}
            height={80}
            objectFit="contain"
            layout="fixed"
          />
        )}
      </div>

      <hr className="my-5" />

      <div className="flex">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-600" />
          <p className="text-gray-500 text-sm  md:text-base whitespace-nowrap font-bold">
            Live Video
          </p>
        </div>
        <div className="inputIcon" onClick={() => fileRef.current.click()}>
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-gray-500 text-sm  md:text-base whitespace-nowrap font-bold">
            Photos/Video
          </p>
          <input
            ref={fileRef}
            type="file"
            hidden
            onChange={handleFileSelected}
          />
        </div>
        <div className="inputIcon  ">
          <EmojiHappyIcon className="h-7 text-yellow-400" />
          <p className="text-gray-500 text-sm  md:text-base whitespace-nowrap font-bold">
            Feeling / activities
          </p>
        </div>
      </div>
    </div>
  );
}
