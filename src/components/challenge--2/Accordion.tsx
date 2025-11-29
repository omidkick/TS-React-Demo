import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import type { AccordionProps } from "../../types/Accordion.types";

const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState("expanded" in props ? true : false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col gap-8 mt-20 max-w-lg mx-auto ">
      <h2 className=" text-4xl font-bold text-secondary">Accordion</h2>
      <div
        className="border border-primary rounded-lg p-4 cursor-pointer"
        onClick={toggle}
      >
        <div className="flex items-center justify-between mb-3 text-lg font-semibold">
          <span>{isOpen ? "Collapse" : "Expand"}</span>
          <FiChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            size={20}
          />
        </div>

        {isOpen && (
          <div className="pt-2">This is the content of the accordion.</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
