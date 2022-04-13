import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

const contacts = [
  {
    src: "https://links.papareact.com/f0p",
    name: "Jeff Bezoz",
  },
  {
    src: "https://links.papareact.com/kxk",
    name: "Elon Musk",
  },
  {
    src: "https://links.papareact.com/zvy",
    name: "Bill Gates",
  },
  {
    src: "https://links.papareact.com/snf",
    name: "Mark Zukerberg",
  },
  {
    src: "https://links.papareact.com/6gg",
    name: "The Queen",
  },
  {
    src: "https://links.papareact.com/r57",
    name: "James Bond",
  },
];

export default function Widgets() {
  return (
    <div className="hidden md:block md:w-60 mt-5">
      <div className="flex justify-between px-3 py-2  text-gray-500">
        <h2 className="text-xl">Contact</h2>
        <div className="flex items-center space-x-2">
          <VideoCameraIcon className="w-6 h-6 mx-2" />
          <SearchIcon className="w-6 h-6 mx-2" />
          <DotsHorizontalIcon className="w-6 h-6 mx-2" />
        </div>
      </div>
    </div>
  );
}
