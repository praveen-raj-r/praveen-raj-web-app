import AllPageDescription from "@/components/app/all-page-description";
import TechStackContainer from "@/components/app/text-stack/tech-stack-container";
import ToggleButton from "@/components/app/text-stack/toggle-button";
import { useState } from "react";
import stacks from "@/data/tech-stack";
const Stack = () => {
  const [gridStatus, setGridStatus] = useState(true);
  return (
    <div>
      <AllPageDescription header="Tech Stack">
        Explore the technologies and tools I work with, from frameworks to
        libraries that power my projects. This tech stack reflects my skills,
        experience, and the tools I use to build efficient and scalable
        solutions.
      </AllPageDescription>
      <ToggleButton gridStatus={gridStatus} setGridStatus={setGridStatus} />

      <TechStackContainer stacks={stacks} gridStatus={gridStatus} />
    </div>
  );
};

export default Stack;
