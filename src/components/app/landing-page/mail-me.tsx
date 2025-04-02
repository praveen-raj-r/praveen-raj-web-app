import { AuroraText } from "@/components/magicui/aurora-text";
import SayHi from "./say-hi";

const MailMe = () => {
  return (
    <div className="my-10 mt-20 flex flex-col items-center gap-5">
      <p className="gradient sky-2 text-3xl">Get in Touch</p>

      <h1 className="text-3xl sm:text-4xl font-bold md:tracking-tighter md:text-5xl lg:text-7xl text-center">
        <AuroraText className="leading-[140%]">Let’s Work Together</AuroraText>
      </h1>

      <p className="text-center text-lg sm:text-2xl">
        I’m open for new opportunities – especially ambitious or large projects.
        However, my inbox is always open. Whether you have a question or just
        want to say hi, I’ll try my best to get back to you!.
      </p>

      <SayHi />
    </div>
  );
};

export default MailMe;
