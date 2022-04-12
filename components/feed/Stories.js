import Image from "next/image";
const stories = [
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
];

export default function Stories() {
  return (
    <div className="flex gap-x-3 ">
      {stories.map((story, idx) => (
        <StoryCard key={idx} {...story} />
      ))}
    </div>
  );
}

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative flex-1 h-10 w-10 sm:h-12 sm:w-12 lg:h-36 lg:w-20 group overflow-hidden cursor-pointer">
      <Image
        className="opacity-0 lg:opacity-100 rounded-full absolute z-10 top-3 right-3"
        src={profile}
        width={36}
        height={36}
        layout="fixed"
        objectFit="cover"
      />

      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-xl group-hover:scale-105 transition-transform overflow-hidden"
        src={src}
        layout="fill"
      />
    </div>
  );
}
