import { Variants, motion } from "framer-motion";
import { FaSpotify, FaYoutube } from "react-icons/fa6";
import { RiSoundcloudFill } from "react-icons/ri";

export default function SongsPage() {
  const mainDivVariant: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const anchorVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  return (
    <>
      <section className="pt-40 px-14 h-screen bg-songs-page-bg bg-no-repeat bg-cover bg-zinc-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={mainDivVariant}
          className="md:w-[470px] min-[500px]:w-[300px] w-full min-[500px]:text-left text-center"
        >
          <h1 className="md:text-7xl min-[500px]:text-6xl text-4xl font-bold text-white leading-tight">
            LISTEN NOW ON YOUR{" "}
            <span className="text-primary-red">FAVORITE</span> PLATFORM
          </h1>
          <motion.div
            variants={anchorVariant}
            className="flex w-full justify-between min-[500px]:mt-4 mt-10"
          >
            <motion.a
              variants={anchorVariant}
              title="Youtube"
              target="_blank"
              href="https://youtube.com/@edelmuzik?si=r5NYuiQVl5F5t_u5"
            >
              <FaYoutube className="md:size-20 min-[500px]:size-16 size-14 text-white hover:scale-125 transition-all" />
            </motion.a>
            <motion.a
              variants={anchorVariant}
              title="Soundcloud"
              target="_blank"
              href="https://soundcloud.com/edelmuzik#"
            >
              <RiSoundcloudFill className="md:size-20 min-[500px]:size-16 size-14 text-white hover:scale-125 transition-all" />
            </motion.a>
            <motion.a
              variants={anchorVariant}
              title="Spotify"
              target="_blank"
              href="https://open.spotify.com/artist/71FZZiU3aazM8r1Bm1NkCu"
            >
              <FaSpotify className="md:size-20 min-[500px]:size-16 size-14 text-white hover:scale-125 transition-all" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
