import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import firebase from "firebase/app";

import {
  VideoCameraIcon,
  EmojiHappyIcon,
  CameraIcon,
} from "@heroicons/react/solid";

export default function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef();

  const submitPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    console.log(inputRef.current.value);

    addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: Date.now(),
    }).then((doc) => {
      console.log(doc.id);
      inputRef.current.value = "";
    });
  };

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
      </div>

      <hr className="my-5" />

      <div className="flex">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-600" />
          <p className="text-gray-500 text-sm  md:text-base whitespace-nowrap font-bold">
            Live Video
          </p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-gray-500 text-sm  md:text-base whitespace-nowrap font-bold">
            Photos/Video
          </p>
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
