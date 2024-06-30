import emailjs from "@emailjs/browser";
import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    emailjs.init("U6hhuaX9wFbEWYKAC");
  }, []);

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateId = "template_qcfwwfa";
    const serviceId = "service_w44iove";
    try {
      setIsButtonEnabled(true);
      await emailjs.send(serviceId, templateId, {
        from_name: name,
        message: message,
        reply_to: email,
      });
    } catch (err) {
      console.error(err);
      toast.error("We couldn't send your email, try again later.", {
        duration: 3000,
        style: {
          background: "#e4e4e7",
          color: "#18181b",
          border: "none",
        },
      });
    } finally {
      toast.success("Email sent with success!", {
        duration: 3000,
        style: {
          background: "#e4e4e7",
          color: "#18181b",
          border: "none",
        },
      });
      setIsButtonEnabled(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
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
  const formVariant: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const formItemsVariant: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <Toaster richColors />
      <section className="pt-28 min-[850px]:px-24 px-16 h-screen bg-contact-page-bg bg-no-repeat bg-cover bg-zinc-900">
        <div className="flex min-[850px]:flex-row flex-col w-full h-full justify-between">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={mainDivVariant}
            className="flex flex-col min-[850px]:gap-20 gap-8"
          >
            <div className="max-w-[470px]">
              <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold text-white leading-tight">
                CONTACT FOR <span className="text-primary-red">INQUIRIES</span>{" "}
              </h1>
            </div>
            <div className="text-white">
              <h4 className="xl:text-4xl min-[850px]:text-3xl text-xl font-bold">
                EMAIL:
              </h4>
              <p className="xl:text-2xl min-[850px]:text-xl text-md font-light">
                contact.edelmusic@gmail.com
              </p>
            </div>
          </motion.div>
          <motion.form
            initial="hidden"
            animate="visible"
            variants={formVariant}
            onSubmit={onFormSubmit}
            className="flex flex-col min-[850px]:gap-6 gap-4 justify-end pb-24 mt-4 text-white min-[850px]:w-1/3 w-full"
          >
            <motion.div variants={formItemsVariant} className="flex flex-col">
              <label
                htmlFor="from-name"
                className="min-[850px]:text-lg text-md"
              >
                NAME:
              </label>
              <input
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="John Jones"
                className="bg-transparent border-solid border-white border-2 rounded-xl min-[850px]:h-12 h-8 min-[850px]:text-md text-sm text-bold p-3 font-medium placeholder-zinc-300"
                type="text"
                id="from-name"
              />
            </motion.div>
            <motion.div variants={formItemsVariant} className="flex flex-col">
              <label htmlFor="email" className="min-[850px]:text-lg text-md">
                EMAIL:
              </label>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="john@jones.com"
                className="bg-transparent border-solid border-white border-2 rounded-xl min-[850px]:h-12 h-8 min-[850px]:text-md text-sm text-bold p-3 font-medium placeholder-zinc-300"
                type="email"
                id="email"
              />
            </motion.div>
            <motion.div variants={formItemsVariant} className="flex flex-col">
              <label htmlFor="message" className="min-[850px]:text-lg text-md">
                MESSAGE:
              </label>
              <textarea
                required
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Type your message here..."
                className="bg-transparent border-solid resize-none border-white border-2 rounded-xl min-[850px]:h-44 h-28 min-[850px]:text-md text-sm text-bold p-3 font-medium placeholder-zinc-300"
                id="message"
              />
            </motion.div>
            <button
              className="bg-primary-red rounded-xl min-[850px]:py-3 py-2 font-bold transition-all disabled:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-80 disabled:text-zinc-500 hover:bg-red-600 duration-200"
              type="submit"
              disabled={isButtonEnabled}
            >
              SEND
            </button>
          </motion.form>
        </div>
      </section>
      <Footer />
    </>
  );
}
