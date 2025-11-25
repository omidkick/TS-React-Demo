export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
      <h1 className="font-black text-5xl p-4 my-12 ">
        THIS IS " Component Props " in TS
      </h1>
      <div className="w-full p-8 border-2 border-blue-700 m-2">
        <p className="">This Profile Component and your name id : </p>
        <h2 className="font-black text-purple-700 text-4xl">{name}</h2>
      </div>
    </div>
  );
};
