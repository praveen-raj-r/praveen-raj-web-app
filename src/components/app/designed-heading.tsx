import UnderlineDesign from "@/components/app/underline-design";

const DesignedHeading = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => {
  return (
    <div className="text-center max-w-[500px] m-auto p-6 flex flex-col items-center ">
      <h2 className="gradient leading-[1.2] rainbow-2 inline-block text-4xl font-medium mb-3 tracking-[-1.2px] font-Fraunces max-md:mb-1 max-md:text-[30px] max-md:tracking-[-1px]">
        {heading}
      </h2>
      <p className="text-lg leading-[140%] tracking-[-0.28px] max-md:mt-4 max-md:text-base max-md:tracking-[-0.25px]">
        {description}
      </p>
      <UnderlineDesign />
    </div>
  );
};

export default DesignedHeading;
