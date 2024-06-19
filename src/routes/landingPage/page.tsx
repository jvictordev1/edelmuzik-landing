import { AiOutlineSpotify } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { RiSoundcloudLine } from "react-icons/ri";

export default function LandingPage() {
  return (
    <section className="h-screen bg-first-page-bg bg-no-repeat bg-cover bg-zinc-900">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-1/3">
          <img src="/images/del-logo.png" alt="EDELMUZIK logo" />
          <div className="flex justify-center w-full mt-5 gap-8">
            <a href="#">
              <FaInstagram className="size-12" />
            </a>
            <a href="#">
              <RiSoundcloudLine className="size-12" />
            </a>
            <a href="#">
              <AiOutlineSpotify className="size-12" />
            </a>
            <a href="#">
              <FiYoutube className="size-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
