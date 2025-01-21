import { useState, useRef } from "react";
import classNames from "classnames";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import "./accordion.css";

interface AccordionProps {
  data: {
    title: string;
    content: string;
  }[];
}

interface AccordionItemProps {
  title: string;
  content: string;
}

export default function Accordion({ data }: AccordionProps) {
  const AccordionItem = ({ title, content }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
      <div className="accordion-item">
        <div
          className={classNames("accordion-title", { active: isOpen })}
          role="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="title">{title}</div>
          <div className="icon">
            {isOpen ? <BsChevronUp /> : <BsChevronDown />}
          </div>
        </div>
        <div
          ref={contentRef}
          className={classNames("accordion-content", { active: isOpen })}
          style={{
            height: isOpen ? contentRef.current?.scrollHeight : 0,
          }}
        >
          {content}
        </div>
      </div>
    );
  };

  return (
    <div>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
    </div>
  );
}
