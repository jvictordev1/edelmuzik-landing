import { FaSpotify, FaYoutube } from "react-icons/fa6";
import { RiSoundcloudFill } from "react-icons/ri";

export default function SongsPage() {
  return (
    <section className="pt-40 px-14 h-screen bg-songs-page-bg bg-no-repeat bg-cover bg-zinc-900">
      <div className="w-[470px]">
        <h1 className="text-7xl font-bold text-white leading-tight">
          LISTEN NOW ON YOUR <span className="text-primary-red">FAVORITE</span>{" "}
          PLATFORM
        </h1>
        <div className="flex w-full justify-between mt-4">
          <a href="#">
            <FaYoutube className="size-20 text-white" />
          </a>
          <a href="#">
            <RiSoundcloudFill className="size-20 text-white" />
          </a>
          <a href="#">
            <FaSpotify className="size-20 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
