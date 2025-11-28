import React from "react";

type TableProps = {
  children: React.ReactNode;
  className?: string;
};

type TableSubComponentProps = {
  children: React.ReactNode;
  className?: string;
} & React.TableHTMLAttributes<HTMLTableRowElement>;

const Table: React.FC<TableProps> & {
  Header: React.FC<TableSubComponentProps>;
  Body: React.FC<TableSubComponentProps>;
  Row: React.FC<TableSubComponentProps>;
} = ({ children, className = "" }) => {
  return (
    <div className={`bg-secondary-0 overflow-x-auto ${className}`}>
      <table>{children}</table>
    </div>
  );
};

const TableHeader: React.FC<TableSubComponentProps> = ({ children }) => (
  <thead>
    <tr className="title-row">{children}</tr>
  </thead>
);

const TableBody: React.FC<TableSubComponentProps> = ({ children }) => (
  <tbody>{children}</tbody>
);

const TableRow: React.FC<TableSubComponentProps> = ({
  children,
  className = "",
  ...rest
}) => (
  <tr className={className} {...rest}>
    {children}
  </tr>
);

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;

export default Table;
