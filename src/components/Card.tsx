import Link from "next/link";
import { type PropsItem } from "~/schemas/schemasProducts";

interface Props {
  item: {
    _id: string | never;
    attributes: PropsItem;
  };
}

const Card = ({ item }: Props) => {
  const { price, title, isNew, img, _id }: any = item;
  return (
    <Link
      href={`/product/${_id}`}
      className="h-full min-h-[500px] w-full max-w-[300px] min-w-[200px] max-md:min-w-[150px] max-md:min-h-[280px]"
    >
      <div className="card mb-5 flex h-full flex-col gap-3">
        <div className="relative  h-3/4 overflow-hidden ">
          {isNew && (
            <span className="z-3 absolute left-2 top-2 bg-white px-[5px] py-[1px] text-teal-600">
              Nueva temporada
            </span>
          )}
          <img
            className="z-1 absolute h-full w-full object-cover"
            src={img[0] ? img[0].url : ""}
          />
          <img
            className="img2 absolute h-full w-full object-cover"
            src={img[1] ? img[1].url : ""}
          />
        </div>
        <div className="flex h-1/4 justify-between text-xl">
          <h1 className="capitalize">{title}</h1>
          <h3 className="font-semibold">${price - 1}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
