import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const MailMe = () => {
  return (
    <div className="my-10 mt-20 flex flex-col items-center gap-5">
      <p className="gradient sky-2 text-2xl">Get in Touch</p>

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
        <AuroraText>Let’s Work Together</AuroraText>
      </h1>

      <p className="text-center text-2xl">
        I’m open for new opportunities – especially ambitious or large projects.
        However, my inbox is always open. Whether you have a question or just
        want to say hi, I’ll try my best to get back to you!.
      </p>

      <a href="mailto:praveen1220raj@gmail.com">
        <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
          <span
            className={cn(
              "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          🎉
          <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
          <AnimatedGradientText className="text-sm font-medium">
            Say Hi!
          </AnimatedGradientText>
          <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
      </a>
    </div>
  );
};

export default MailMe;
