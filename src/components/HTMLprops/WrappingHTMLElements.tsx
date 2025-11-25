import Button from "./Button";
import Input from "./Input";

const WrappingHTMLElements = () => {
  return (
    <div className="my-20 ">
      <h1 className="text-4xl font-black text-blue-600 p-4">
        Wrapping HTML Elements section
      </h1>
      <div className="w-full border-2 border-green-600 rounded-xl p-2 flex items-center justify-center gap-4">
        <Input
          type="text"
          placeholder="Enter your text..."
          onChange={(e) => console.log(e.target.value)}
        />
        <Button className="cursor-pointer font-bold my-5">Click Me!</Button>
      </div>
    </div>
  );
};

export default WrappingHTMLElements;
