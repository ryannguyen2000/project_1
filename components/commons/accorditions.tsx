"use client";

import { useState } from "react";

const Accordions = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <Accordion title="Section 1">
        <p>This is the content for section 1.</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>This is the content for section 2.</p>
      </Accordion>
      <Accordion title="Section 3">
        <p>This is the content for section 3.</p>
      </Accordion>
    </div>
  );
};

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleAccordion}
        className="w-full text-left py-3 px-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 focus:outline-none"
      >
        {title}
      </button>
      {isOpen && <div className="py-3 px-4 bg-gray-50">{children}</div>}
    </div>
  );
};

export default Accordions;
