import { Variants, motion } from "framer-motion";
import Footer from "../../components/Footer";

export default function AboutPage() {
  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.6 },
    },
  };
  const textVariant: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };
  const imagesVariant: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.6 },
    },
  };
  const imagesVariant2: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.6 },
    },
  };
  return (
    <>
      <motion.section className="pt-28 scroll-smooth font-bold flex flex-col gap-32 bg-about-background-color">
        <motion.section viewport={{ once: true }} className="flex flex-col">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            className="flex justify-center flex-col items-center gap-5"
          >
            <motion.p
              variants={textVariant}
              className="w-1/3 text-center text-2xl text-zinc-800"
            >
              <span className="text-primary-red font-eckmann text-3xl">
                EDEL
              </span>{" "}
              is a DJ/producer born in{" "}
              <span className="text-primary-red">Bahia, Brazil.</span> His
              musical journey began at home, where his mother introduced him to{" "}
              <span className="text-primary-red">
                various Brazilian music styles,
              </span>{" "}
              and at the age of 10, his father gifted him his{" "}
              <span className="text-primary-red">first guitar.</span>
            </motion.p>
            <motion.div
              variants={imagesVariant}
              className="flex justify-center w-full bg-about-page-bg bg-no-repeat bg-center bg-contain"
            >
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="max-w-sm"
                src="/images/img1-about.png"
                alt="EDEL playing a track with a view from of ocean in the background."
              />
            </motion.div>
          </motion.div>
        </motion.section>
        <motion.section viewport={{ once: true }} className="flex flex-col">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="flex justify-center flex-col items-center gap-5"
          >
            <motion.p
              variants={textVariant}
              className="w-1/3 text-center text-2xl font-bold text-zinc-800"
            >
              Started{" "}
              <span className="text-primary-red">producing music at 16</span>{" "}
              and over time has had several opportunities to perform at
              prominent{" "}
              <span className="text-primary-red">
                clubs and open-air events,
              </span>{" "}
              as well as release his{" "}
              <span className="text-primary-red">
                first independent single.
              </span>
            </motion.p>
            <motion.div variants={imagesVariant2} className="flex gap-20">
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                variants={imagesVariant2}
                className="max-w-sm"
                src="/images/img2-about.png"
                alt="Close image from EDEL's DJ equipment."
              />
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                variants={imagesVariant2}
                className="max-w-sm"
                src="/images/img3-about.png"
                alt="EDEL smiling while uses his DJ equipment with a view of the ocean in the background. ."
              />
            </motion.div>
          </motion.div>
        </motion.section>
        <motion.section
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center flex-col items-center"
          >
            <motion.p
              variants={textVariant}
              className="w-1/3 text-center text-2xl font-bold text-zinc-800"
            >
              Today, continues to refine his skills as a DJ and producer,
              bringing innovative contributions to the{" "}
              <span className="text-primary-red">
                melodic house/afro scene,
              </span>{" "}
              heavily influenced by his hometown.
            </motion.p>
          </motion.div>
          <section className="h-dvh bg-edel-playing-about-bg bg-no-repeat bg-cover"></section>
        </motion.section>
        <Footer />
      </motion.section>
    </>
  );
}
