import { ThumbUpIcon, ThumbDownIcon, AnnotationIcon } from '@heroicons/react/outline';
import profilePic from '../icons/profile_pic.png';

export default function FirstPost() {
  return(
    <main className="flex flex-col justify-center items-center pt-8 p-3 pb-0">
      <section className="w-full m-5 flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-start rounded-md bg-white w-45rem border">
          <div className="flex gap-1.5 items-center pl-2.5 pt-1.5 text-sm">
            <a href="#" className="rounded-full"><img src={profilePic} alt="Avatar" className="h-8 w-8 object-cover rounded-full"/></a>
            <span>
              <a href="#" className="font-bold">John Doe</a>, il y a 3 heures
            </span>
          </div>
          <div className="relative flex flex-col-reverse flex-wrap p-2.5 pt-0 overflow-hidden">
            <div className="max-h-full overflow-hidden">
              <h3 className="font-bold text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <p>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </p>
            </div>
          </div>
          <div className="flex m-2.5 mt-1 gap-2">
            <button className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer">
              <ThumbUpIcon className="h-6"/>
              <span className="">23</span>
            </button>
            <button className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer">
              <ThumbDownIcon className="h-6"/>
              <span className="">5</span>
            </button>
            <div className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700">
              <AnnotationIcon className="h-6"/>
              <span className="">8</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
