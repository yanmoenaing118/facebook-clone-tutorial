import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { useSession, signOut } from "next-auth/react";

import HeaderIcon from "../components/HeaderIcon";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header className="flex bg-white items-center sticky top-0 z-40 p-2 lg:px-5 shadow-md">
      {/** left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
          />
        </div>
      </div>

      {/** center */}
      <div className="flex justify-center flex-grow">
        <div className="flex items-center space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/** right */}

      <div className="flex items-center sm:space-x-2">
        <div onClick={signOut} className="cursor-pointer flex items-center space-x-2">
          <Image
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
            className="rounded-full"
          />
          <p className="font-semibold pr-3 whitespace-nowrap hidden sm:block">
            {session.user.name}
          </p>
        </div>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
}
