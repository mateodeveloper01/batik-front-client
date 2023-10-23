import Link from "next/link";
import { type PropsItem } from "~/schemas/schemasProducts";

const Card = ({ item }: { item: PropsItem }) => {
  const { price, title, new: isNew, img, _id, isStock }: PropsItem = item;
  // console.log(item);
  return (
    <>
      {isStock ? (
        <Link
          href={`/product/${_id}`}
          className="h-full min-h-[500px] w-full min-w-[200px] max-w-[300px] max-md:min-h-[280px] max-md:min-w-[150px]"
        >
          <div className="card mb-5 flex h-full flex-col gap-3">
            <div className="relative  h-3/4 overflow-hidden ">
              {isNew && (
                <span className="z-3 absolute left-2 top-2 rounded-sm bg-white px-[5px] py-[1px] font-bold text-teal-600">
                  Nueva temporada
                </span>
              )}
              <img
                className="z-1 absolute  object-cover"
                src={img[0] ? img[0].url : ""}
              />
              <img
                className="img2 absolute  object-cover"
                src={img[1] ? img[1].url : ""}
              />
            </div>
            <div className="flex flex-col justify-between gap-2 text-xl max-md:text-lg">
              <h1 className="capitalize max-md:text-lg">{title}</h1>
              <h3 className="text-en font-semibold">${price - 1}</h3>
            </div>
          </div>
        </Link>
      ) : (
        <div className="h-full min-h-[500px] w-full min-w-[200px] max-w-[300px] cursor-pointer max-md:min-h-[280px] max-md:min-w-[150px]">
          <div className="card mb-5 flex h-full flex-col gap-3">
            <div className="relative  h-3/4 overflow-hidden ">
              <span className="z-3 absolute left-2 top-2 rounded-sm bg-white px-[5px] py-[1px] font-bold">
                Sin stock
              </span>
              <img
                className="z-1 absolute  object-cover"
                src={img[0] ? img[0].url : ""}
              />
              <img
                className="img2 absolute  object-cover"
                src={img[1] ? img[1].url : ""}
              />
            </div>
            <div className="flex flex-col justify-between gap-2 text-xl max-md:text-lg">
              <h1 className="capitalize max-md:text-lg">{title}</h1>
              <h3 className="text-en font-semibold">${price - 1}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
