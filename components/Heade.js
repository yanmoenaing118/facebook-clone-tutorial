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

export default function Header() {
  return (
    <header>
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
          <input type="text" placeholder="Search Facebook" className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"/>
        </div>
      </div>

      {/** center */}

      {/** right */}
    </header>
  );
}
