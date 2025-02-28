import { FooterDesignLeft, FooterDesignRight } from "./footer-designs";
import FooterQuotes from "./footer-quotes";

const AppFooter = () => {
  return (
    <footer className="relative">
      <div className="relative flex flex-col justify-center p-4 text-center">
        <FooterQuotes />
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
};

export default AppFooter;
