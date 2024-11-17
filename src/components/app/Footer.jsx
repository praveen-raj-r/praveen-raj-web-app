import { FooterDesignLeft, FooterDesignRight } from "./FooterDesigns";

function Footer() {
  return (
    <footer className="relative">
      <div className="relative flex flex-col justify-center p-4 text-center">
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
            href="https://react.dev/"
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
