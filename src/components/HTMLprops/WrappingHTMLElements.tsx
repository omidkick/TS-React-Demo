import { useState } from "react";
import Button from "../../ui/Button";
import Input from "./Input";

const WrappingHTMLElements = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmittedValue(inputValue);
    setLoading(false);
  };

  return (
    <div className="my-20">
      <h1 className="text-4xl font-black text-blue-600 p-4">
        Wrapping HTML Elements section
      </h1>

      <div className="w-full border-2 border-green-600 rounded-xl p-4 ">
        <form
          className="flex items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            placeholder="Enter your text..."
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Button className="cursor-pointer font-bold" loading={loading}>
            Click Me!
          </Button>
        </form>
      </div>

      {/* text Box */}
      {submittedValue && (
        <div className="mt-6 bg-indigo-100 border border-indigo-400 text-indigo-700 p-4 rounded-xl shadow-md text-center text-lg font-semibold">
          {submittedValue}
        </div>
      )}
    </div>
  );
};

export default WrappingHTMLElements;
