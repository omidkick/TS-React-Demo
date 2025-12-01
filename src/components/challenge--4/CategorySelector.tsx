import { useState } from "react";
import Select from "../../ui/Select";

type Category = {
  id: string;
  title: string;
  icon?: string;
};

const categories: Category[] = [
  { id: "cat-1", title: "Development" },
  { id: "cat-2", title: "Design" },
  { id: "cat-3", title: "Marketing" },
];

export default function CategorySelector() {
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <div className="mt-10 w-full max-w-md mx-auto p-6 bg-secondary shadow-sm rounded-xl space-y-4 border border-secondary-200">
      <div>
        <h2 className="text-lg font-semibold text-secondary-800">Choose a Category</h2>
        <p className="text-sm text-secondary-500 mt-1">
          Select a category to filter your projects list.
        </p>
      </div>

      <Select<Category>
        options={categories}
        onChange={(value) => setSelected(value)}
        getOptionLabel={(option) => option.title}
        getOptionValue={(option) => option.id}
      />

      {selected && (
        <div className="mt-4 p-3 bg-secondary-50 rounded-lg border border-secondary-200">
          <p className="text-sm text-secondary-700">
            <span className="font-medium">Selected:</span> {selected.title}
          </p>
        </div>
      )}
    </div>
  );
}
