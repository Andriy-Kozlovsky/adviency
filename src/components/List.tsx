import Button from "./Button";

const List = () => {
  return (
    <ul className="flex flex-col gap-4">
      <li className="flex justify-between">
        <img alt="" className="h-10 w-10 my-auto" src="" />
        <div>
          <p className="flex flex-col">
            Medias (3) - $ 300,00 <span>Goncy</span>
          </p>
        </div>
        <div className="flex gap-2 py-3">
          <Button primary={false}>E</Button>
          <Button primary={false}>X</Button>
        </div>
      </li>
    </ul>
  );
};

export default List;
