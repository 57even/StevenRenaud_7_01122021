import React from 'react';
import profilePic from '../icons/profile_pic.png';

export default function Comment() {
  return (
    <div className='w-full flex flex-col mb-2'>
      <div className="flex gap-1.5 pl-1.5 pt-1.5 text-sm">
        <a href="#" className="rounded-full"><img src={profilePic} alt="Avatar" className="h-7 w-7 object-cover rounded-full"/></a>
        <span>
          <a href="#" className="font-bold">John Doe</a>, il y a 3 heures
        </span>
      </div>
      <h1 className="ml-10 -mt-1.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
    </div>
  );
}
