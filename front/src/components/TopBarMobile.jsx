import React from "react";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../icons/icon.png";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TopBarMobile({
  setSearchFilter,
  auth,
  userId,
  authorPic,
}) {
  let logButtons = "";
  let authShow = "hidden";
  let authHide = "";

  if (auth === true && logButtons.length !== "") {
    logButtons = "";
    authHide = "hidden";
    authShow = "";
  }

  const disconnect = () => {
    if (JSON.parse(localStorage.getItem("token"))) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  const location = useLocation();
  let handleSearch = (e) => {
    if (location.pathname === "/") {
      setSearchFilter(e.target.value);
    }
  };

  return (
    <header className="h-12 fixed z-50 inset-x-0 flex justify-between items-center self-center w-full bg-white py-1 px-2 border-b">
      <Link to="/" className="self-center">
        <img
          src={logo}
          alt="Groupomania"
          className="object-cover h-11 max-w-1/4"
        />
      </Link>
      <div className="p-1 flex items-center w-3/4 m-1.5 border rounded-md focus-within:border-primary focus-within:border-opacity-60 bg-gray-100">
        <SearchIcon className="h-5 px-1" />
        <input
          type="search"
          placeholder="Rechercher"
          className="w-full p-0.5 focus:outline-none bg-gray-100"
          onChange={handleSearch}
        />
      </div>
      <nav className="flex gap-2 items-center self-center">
        {logButtons}
        <Menu as="div" className="relative inline-block">
          <div className="border rounded-3xl px-0.5 py-0.5">
            <Menu.Button className="flex items-center h-full justify-center w-full focus:outline-none">
              <img
                src={authorPic}
                alt="Avatar"
                className="h-8 w-8 object-cover rounded-full"
                aria-hidden="true"
              />
              <ChevronDownIcon className="w-6" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/login`}
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : `${authHide} text-gray-700`,
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <b>Connexion</b>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/signup`}
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : `${authHide} text-gray-700`,
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <b>Inscription</b>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/profile/${userId}`}
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : `${authShow} text-gray-700`,
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Profil
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={disconnect}
                        type="button"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : `${authShow} text-gray-700`,
                          "block w-full text-left px-4 py-2 text-sm"
                        )}
                      >
                        Se déconnecter
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </header>
  );
}
