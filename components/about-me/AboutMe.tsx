import React from "react";
import Letter from "./Letter";
import SectionHeading from "../SectionHeading";

export default function AboutMe() {
  return (
    <div className="mx-auto max-w-[1000px] px-4">
      <SectionHeading
        heading="Who is DUGGAL?"
        subheading="10+ Years of Experience: Full-Stack Software engineer with a passion for complex and sophisticated software and deep learning models🩷"
      />
      <Letter />
    </div>
  );
}
