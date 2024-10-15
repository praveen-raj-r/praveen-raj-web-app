import { FooterDesignLeft, FooterDesignRight } from "../ui/FooterDesigns";
// import FooterLink from "../ui/FooterLink";

// const links = [
//   { text: "links", url: "", id: 1 },
//   { text: "supporters", url: "", id: 2 },
//   { text: "bookshelf", url: "", id: 3 },
//   { text: "tech stack", url: "", id: 4 },
//   { text: "version", url: "", id: 5 },
//   { text: "this uikit", url: "", id: 5 },
// ];

function Footer() {
  return (
    // <footer className="mt-[10px] relative">
    <footer className="relative">
      <div className="relative flex flex-col justify-center p-4 text-center">
        {/* <div className="px-0 py-1">
          <h4 className=" opacity-80 text-[#72788899] leading-8 text-base tracking-[-0.25px] font-medium m-0">
            ©praveenraj{" "}
            <span className="text-[10px] leading-8 my-0 mx-[2px] opacity-50 align-bottom ">
              ✦
            </span>{" "}
            praveen raj
          </h4>
        </div>

        <div className="px-0 py-1 mb-5">
          <ul className="flex flex-wrap items-center justify-center px-6 m-0 md:flex-nowrap md:p-0">
            {links.map((link) => (
              <FooterLink key={link.id} link={link} />
            ))}
          </ul>
        </div> */}
        <p className="my-10 text-xl text-gray-100 gradient sky-2">
          Build using{" "}
          <a
            className="gradient retro-2"
            href="https://vite.dev/"
            target="_blank"
          >
            Vite
          </a>
          , Coded in{" "}
          <a
            className="gradient retro-2"
            href="https://vite.dev/guide/"
            target="_blank"
          >
            Reactjs
          </a>{" "}
          and deployed on{" "}
          <a
            className="gradient retro-2"
            href="https://vercel.com/"
            target="_blank"
          >
            Vercel
          </a>
        </p>
        <div className="w-full text-center bottom-[100px] flex items-center justify-center opacity-20 mb-[60px] mt-[10px]">
          <FooterDesignLeft className="transform opacity-40 -scale-x-100" />
          <p className="text-[14px] font-medium leading-4 py-0 px-3">
            stay hungry, keep hustling
          </p>
          <FooterDesignRight className="opacity-40" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
