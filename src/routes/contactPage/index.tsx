export default function ContactPage() {
  return (
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
        <form className="flex flex-col gap-6 justify-end pb-24 text-white w-1/3">
          <div className="flex flex-col">
            <label htmlFor="name">NAME:</label>
            <input
              required
              placeholder="John Jones"
              className="bg-transparent border-solid border-white border-2 rounded-xl h-12 text-bold p-3 font-medium placeholder-zinc-300"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">EMAIL:</label>
            <input
              required
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
              placeholder="Type your message here..."
              className="bg-transparent border-solid border-white border-2 rounded-xl h-44 text-bold p-3 font-medium placeholder-zinc-300"
              id="message"
            />
          </div>
          <button
            className="bg-primary-red rounded-xl py-3 font-bold"
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}
