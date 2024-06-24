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
            <a
              title="Instagram"
              target="_blank"
              href="https://www.instagram.com/edelmuzik/"
            >
              <FaInstagram className="size-12" />
            </a>
            <a
              title="Soundcloud"
              target="_blank"
              href="https://soundcloud.com/edelmuzik"
            >
              <RiSoundcloudLine className="size-12" />
            </a>
            <a
              title="Spotify"
              target="_blank"
              href="https://open.spotify.com/artist/71FZZiU3aazM8r1Bm1NkCu"
            >
              <AiOutlineSpotify className="size-12" />
            </a>
            <a title="Youtube" target="_blank" href="#">
              <FiYoutube className="size-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
