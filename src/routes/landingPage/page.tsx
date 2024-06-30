import { Variants, motion } from "framer-motion";
import { AiOutlineSpotify } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { RiSoundcloudLine } from "react-icons/ri";

export default function LandingPage() {
  const iconsListVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };
  const iconsVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    hidden: { opacity: 0, y: 100, transition: { duration: 0.2 } },
  };
  return (
    <section className="h-screen w-full bg-first-page-bg bg-no-repeat bg-cover bg-zinc-900">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="lg:w-[500px] md:w-[400px] w-[300px]">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.02],
            }}
            src="/images/del-logo.png"
            alt="EDELMUZIK logo"
          />
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={iconsListVariants}
            className="flex justify-center w-full mt-5 gap-8"
          >
            <motion.li variants={iconsVariants}>
              <a
                title="Instagram"
                target="_blank"
                href="https://www.instagram.com/edelmuzik/"
              >
                <FaInstagram className="lg:size-12 md:size-10 size-8 hover:scale-125 transition-all" />
              </a>
            </motion.li>
            <motion.li variants={iconsVariants}>
              <a
                title="Soundcloud"
                target="_blank"
                href="https://soundcloud.com/edelmuzik"
              >
                <RiSoundcloudLine className="lg:size-12 md:size-10 size-8 hover:scale-125 transition-all" />
              </a>
            </motion.li>
            <motion.li variants={iconsVariants}>
              <a
                title="Spotify"
                target="_blank"
                href="https://open.spotify.com/artist/71FZZiU3aazM8r1Bm1NkCu"
              >
                <AiOutlineSpotify className="lg:size-12 md:size-10 size-8 hover:scale-125 transition-all" />
              </a>
            </motion.li>
            <motion.li variants={iconsVariants}>
              <a
                title="Youtube"
                target="_blank"
                href="https://youtube.com/@edelmuzik?si=r5NYuiQVl5F5t_u5"
              >
                <FiYoutube className="lg:size-12 md:size-10 size-8 hover:scale-125 transition-all" />
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
