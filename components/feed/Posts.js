import { ChatIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid";
import { collection, query, orderBy } from "firebase/firestore";
import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

export default function Posts({ list }) {
  console.log(list);
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("timestamp", "desc"));

  const [snapshots, loading, error] = useCollection(q, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  if (error) {
    return <div>Something went wrong{":("}</div>;
  }

  return (
    <div>
      {loading ? (
        <div>
          {list.map((doc) => {
            return <Post key={doc.id} post={doc} />;
          })}
        </div>
      ) : (
        <div>
          {snapshots.docs.map((doc) => {
            return <Post key={doc.id} post={doc.data()} />;
          })}
        </div>
      )}
    </div>
  );
}

function Post({ post }) {
  return (
    <div className="bg-white my-6 rounded-sm shadow-sm">
      <div className="flex space-x-2 px-4 py-2 items-center">
        <div>
          <img
            src={post.image}
            alt={post.name}
            widt={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-sm">{post.name}</p>
          <p className="text-xs font-bold text-gray-600">
            {post?.timestamp
              ? new Date(post?.timestamp.toDate()).toDateString()
              : null}
          </p>
        </div>
      </div>
      <p className="py-2 px-4">{post.message}</p>
      {post.postImage && (
        <div className="relative h-40 md:h-64">
          <Image src={post.postImage} layout="fill" objectFit="cover" />
        </div>
      )}

      <footer className="flex items-center justify-around py-2  border-t">
        <Action Icon={ThumbUpIcon} title="Likes" />
        <Action Icon={ChatIcon} title="Comments" />
        <Action Icon={ShareIcon} title="Share" />
      </footer>
    </div>
  );
}

function Action({ Icon, title }) {
  return (
    <div className="flex items-center space-x-2 hover:bg-gray-100 py-2 px-4 rounded-full cursor-pointer">
      <Icon className="text-gray-400 w-6" />
      <p className="sm:text-base">{title}</p>
    </div>
  );
}
