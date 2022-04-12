import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

export default function Feed() {
  return (
    <div className="flex-grow pb-44 pt-6  overflow-y-auto">
      <div className="max-w-md mx-auto md:max-w-lg">
        {/** stories */}
        <Stories />

        {/** input box */}
        <InputBox />

        {/** posts */}
        <Posts />
      </div>
    </div>
  );
}
