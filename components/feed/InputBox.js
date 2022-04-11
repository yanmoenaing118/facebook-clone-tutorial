import Image from "next/image";
import { useSession } from "next-auth/react";

export default function InputBox() {
  const { data: session } = useSession();

  const submitPost = (e) => {
    e.preventDefault();
    console.log('sub')
  }

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
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
            className="w-full px-5 py-3 rounded-full outline-none bg-gray-100 text-gray-700 placeholder-gray-600"
          />
          <input type="submit" hidden />
        </form>
      </div>

      <hr className="mt-5" />

      <div>love</div>
    </div>
  );
}
