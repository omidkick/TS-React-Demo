//* ===============  Generic Props:

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

function List<T extends { id: number; name: string }>({
  items,
  onClick,
}: ListProps<T>) {
  return (
    <div className="">
      <h2>List Of Items</h2>
      <div>
        {items.map((item) => {
          return (
            <div className="w-full" key={item.id} onClick={() => onClick(item)}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
