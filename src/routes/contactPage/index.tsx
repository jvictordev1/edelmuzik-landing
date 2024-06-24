import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
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
      alert("sent");
    } catch (err) {
      console.error(err);
    } finally {
      setIsButtonEnabled(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <>
      <section className="pt-40 px-24 h-screen bg-contact-page-bg bg-no-repeat bg-cover bg-zinc-900">
        <div className="flex w-full h-full justify-between">
          <div className="flex flex-col gap-20 h-full">
            <div className="max-w-[470px]">
              <h1 className="text-7xl font-bold text-white leading-tight">
                CONTACT FOR <span className="text-primary-red">INQUIRIES</span>{" "}
              </h1>
            </div>
            <div className="text-white">
              <h4 className="text-4xl font-bold">EMAIL:</h4>
              <p className="text-2xl font-light">contact.edelmusic@gmail.com</p>
            </div>
          </div>
          <form
            onSubmit={onFormSubmit}
            className="flex flex-col gap-6 justify-end pb-24 text-white w-1/3"
          >
            <div className="flex flex-col">
              <label htmlFor="from-name">NAME:</label>
              <input
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="John Jones"
                className="bg-transparent border-solid border-white border-2 rounded-xl h-12 text-bold p-3 font-medium placeholder-zinc-300"
                type="text"
                id="from-name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">EMAIL:</label>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="john@jones.com"
                className="bg-transparent border-solid border-white border-2 rounded-xl h-12 text-bold p-3 font-medium placeholder-zinc-300"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">MESSAGE:</label>
              <textarea
                required
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Type your message here..."
                className="bg-transparent border-solid resize-none border-white border-2 rounded-xl h-44 text-bold p-3 font-medium placeholder-zinc-300"
                id="message"
              />
            </div>
            <button
              className="bg-primary-red rounded-xl py-3 font-bold transition-all disabled:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-80 disabled:text-zinc-500 hover:bg-red-600 duration-200"
              type="submit"
              disabled={isButtonEnabled}
            >
              SEND
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
