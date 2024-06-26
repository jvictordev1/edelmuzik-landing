import { AiOutlineSpotify } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { RiSoundcloudLine } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <footer className="w-full bottom-0 fixed bottom bg-zinc-950">
        <div className="flex justify-center w-full py-4 md:gap-24 gap-14">
          <a
            title="Instagram"
            target="_blank"
            href="https://www.instagram.com/edelmuzik/"
          >
            <FaInstagram className="size-8 hover:scale-125 transition-all" />
          </a>
          <a
            title="Soundcloud"
            target="_blank"
            href="https://soundcloud.com/edelmuzik"
          >
            <RiSoundcloudLine className="size-8 hover:scale-125 transition-all" />
          </a>
          <a
            title="Spotify"
            target="_blank"
            href="https://open.spotify.com/artist/71FZZiU3aazM8r1Bm1NkCu"
          >
            <AiOutlineSpotify className="size-8 hover:scale-125 transition-all" />
          </a>
          <a
            title="Youtube"
            target="_blank"
            href="https://youtube.com/@edelmuzik?si=r5NYuiQVl5F5t_u5"
          >
            <FiYoutube className="size-8 hover:scale-125 transition-all" />
          </a>
        </div>
      </footer>
    </>
  );
}
