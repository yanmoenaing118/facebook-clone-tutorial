import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

export default function Feed({list}) {
  return (
    <div className="flex-grow pb-44 pt-6  overflow-y-auto">
      <div className="max-w-md mx-auto md:max-w-lg">
        {/** stories */}
        <Stories />

        {/** input box */}
        <InputBox />

        {/** posts */}
        <Posts list={list} />
      </div>
    </div>
  );
}
