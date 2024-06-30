import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

interface TabsInterface {
  text: string;
  path: string;
}

const tabs: TabsInterface[] = [
  {
    text: "ABOUT",
    path: "/about",
  },
  {
    text: "SONGS",
    path: "/songs",
  },
  {
    text: "CONTACT",
    path: "/contact",
  },
];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  path: string;
}

const Tab = ({ text, selected, setSelected, path }: TabProps) => {
  return (
    <Link
      to={path}
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-600 hover:text-gray-900 dark:hover:text-red-500"
      } relative cursor-pointer rounded-md px-2 py-1 text-lg font-bold transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          initial={{ transform: "scaleX(0)" }}
          animate={{ transform: "scaleX(1)" }}
          transition={{ type: "spring", duration: 0.6 }}
          className="absolute inset-0 z-0 rounded-md bg-red-500"
        ></motion.span>
      )}
    </Link>
  );
};

const ButtonShapeTabs = () => {
  const [selected, setSelected] = useState<string | null>(
    window.location.pathname.slice(1).toUpperCase() !== ""
      ? window.location.pathname.slice(1).toUpperCase()
      : "/"
  );
  return (
    <div className="flex items-center justify-between w-full">
      <Link to="/" title="home" onClick={() => setSelected("/")}>
        <img
          className="md:size-16 size-12 hover:rotate-90 transition-all duration-500"
          src="/images/edelmuzik-logo.png"
          alt="EDELMUZIK logo"
          title="Home"
        />
      </Link>
      <div className="md:hidden">
        <Menu>
          <MenuButton>
            <IoMdMenu className="size-8" />
          </MenuButton>
          <MenuItems
            className="flex flex-col items-center bg-zinc-950 px-1 py-4 rounded-md"
            anchor="bottom"
          >
            {tabs.map((tab) => {
              return (
                <MenuItem>
                  <Link
                    to={tab.path}
                    onClick={() => setSelected(tab.text)}
                    className={`${
                      selected === tab.text
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-900 dark:hover:text-red-500"
                    } relative cursor-pointer rounded-md px-2 py-1 text-md font-bold transition-colors`}
                  >
                    <span className="relative z-10">{tab.text}</span>
                    {selected === tab.text && (
                      <span className="absolute inset-0 z-0 rounded-md bg-red-500"></span>
                    )}
                  </Link>
                </MenuItem>
              );
            })}
          </MenuItems>
        </Menu>
      </div>
      <div className="md:flex hidden">
        {tabs.map((tab) => (
          <Tab
            text={tab.text}
            selected={selected === tab.text}
            setSelected={setSelected}
            path={tab.path}
            key={tab.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonShapeTabs;
