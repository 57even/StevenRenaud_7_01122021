import {
  ThumbUpIcon,
  ThumbDownIcon,
  AnnotationIcon,
} from "@heroicons/react/outline";
import profilePic from "../icons/profile_pic.png";
import TimeAgo from "react-timeago";

export default function FirstPost({ post, formatter }) {
  return (
    <main className="flex flex-col justify-center items-center pt-8 p-3 pb-0">
      <section className="w-full m-5 flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-start rounded-md bg-white w-45rem border">
          <div className="flex gap-1.5 items-center pl-2.5 pt-1.5 text-sm">
            <a href="#" className="rounded-full">
              <img
                src={profilePic}
                alt="Avatar"
                className="h-8 w-8 object-cover rounded-full"
              />
            </a>
            <span>
              <a href="#" className="font-bold">
                {post.author}
              </a>
              , <TimeAgo date={post.date} formatter={formatter} />
            </span>
          </div>
          <div className="relative flex flex-col-reverse flex-wrap p-2.5 pt-0 overflow-hidden">
            <div className="max-h-full overflow-hidden">
              <h1 className="font-bold text-lg">{post.title}</h1>
              <p>{post.text}</p>
            </div>
          </div>
          <div className="flex m-2.5 mt-1 gap-2">
            <button className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer">
              <ThumbUpIcon className="h-6" />
              <span className="">23</span>
            </button>
            <button className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer">
              <ThumbDownIcon className="h-6" />
              <span className="">5</span>
            </button>
            <div className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700">
              <AnnotationIcon className="h-6" />
              <span className="">8</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
