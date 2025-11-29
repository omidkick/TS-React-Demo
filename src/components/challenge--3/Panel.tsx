import { useState } from "react";

type PanelNone = Record<string, never>;

type PanelCollapsable = {
  collapsable: true;
  defaultCollapsed?: true;
};

type PanelProps = PanelNone | PanelCollapsable;

const Panel = (props: PanelProps) => {
  // Type guard to check if props is of type PanelCollapsable
  const isCollapsable = "collapsable" in props;
  const [collapsed, setCollapsed] = useState(
    isCollapsable && props.defaultCollapsed ? true : false
  );

  const toggle = () => setCollapsed((prev) => !prev);

  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-md mx-auto">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        condimentum...
      </p>

      {isCollapsable && (
        <button onClick={toggle} className="mt-2 text-blue-600 hover:underline">
          {collapsed ? "See more" : "See less"}
        </button>
      )}

      {!collapsed && isCollapsable && (
        <p className="mt-2">
          This is additional content visible when expanded.
        </p>
      )}
    </div>
  );
};

export default Panel;
