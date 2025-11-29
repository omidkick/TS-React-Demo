// Using Record as Utility Type to Define an Empty Object Type
export type AccordionNone = Record<string, never>;

export type AccordionExpanded = { expanded: true; collapse?: never };

export type AccordionCollapsed = { collapse: true; expanded?: never };

// Union Type for Accordion Props
export type AccordionProps =
  | AccordionNone
  | AccordionExpanded
  | AccordionCollapsed;
