import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
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
  useEffect(() => {
    console.log("oi" + selected);
  }, [selected]);
  return (
    <div className="flex items-center justify-between w-full">
      <Link to="/" title="home" onClick={() => setSelected("/")}>
        <img
          className="size-16 hover:rotate-90 transition-all duration-500"
          src="/images/edelmuzik-logo.png"
          alt="EDELMUZIK logo"
          title="Home"
        />
      </Link>
      <div>
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
