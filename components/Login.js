import Image from "next/image";
import { useSession, signIn } from "next-auth/react";

export default function Login() {
  const handleSignIn = () => signIn(); 
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        width={400}
        height={400}
        objectFit="contain"
      />

      <h1
        onClick={handleSignIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}
