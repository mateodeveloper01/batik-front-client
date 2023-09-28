import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "~/redux/cartReducer";
import {
  MdOutlineAddShoppingCart,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
// import {} from "react-icons/";
import { Button } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getItem } from "~/api/api";
import { PropsItem } from "~/schemas/schemasProducts";

const Product = () => {
  const { query } = useRouter();
  if (!query.id) {
    return <div>cargandoo..</div>;
  }
  const [selectImg, setSelectImg] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading } = useQuery<PropsItem>({
    queryKey: ["productsId"],
    queryFn: () => getItem(`/products/id/${query.id}`),
  });

  // console.log(data);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-12 px-12 py-5  max-md:flex-col max-md:gap-2">
      {data ? (
        Object.keys(data).length === 0 ? (
          "loading"
        ) : (
          <>
            <div className="flex flex-1 gap-10 max-md:flex-col-reverse">
              <div className="flex-1  max-md:grid  max-md:grid-cols-3  max-md:gap-2">
                {data.img.map((item: any, index: number) => (
                  <img
                    key={item._id}
                    className="mb-3 h-[150px] w-full cursor-pointer  object-cover"
                    src={item.url}
                    onClick={(e) => setSelectImg(index)}
                  />
                ))}
              </div>
              <div className="flex-5">
                <img
                  className="max-h-[800px] w-full object-cover"
                  src={data?.img[selectImg]?.url}
                />
              </div>
            </div>
            <div className="flex-1 ">
              <div className="flex flex-col gap-4">
                <h1>{data?.title}</h1>
                <p className="text-justify text-xl font-light ">
                  {data?.description}
                </p>
                <span className="color-celeste text-3xl font-medium ">
                  ${data?.price}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    className="flex h-10 w-10 cursor-pointer items-center justify-center bg-gray-200"
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    -
                  </button>
                  {quantity}
                  <button
                    className="flex h-10 w-10 cursor-pointer items-center justify-center bg-gray-200"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <Button
                  colorScheme="pink"
                  variant="solid"
                  size="md"
                  className="w-[250px]"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data._id,
                        title: data.title,
                        description: data.description,
                        price: data.price,
                        img: data?.img[0]?.url,
                        quantity,
                      })
                    )
                  }
                >
                  <MdOutlineAddShoppingCart className="text-2xl" />
                  Agregar al carrito
                </Button>
              </div>
            </div>
          </>
        )
      ) : (
        "cargandoo"
      )}
    </div>
  );
};

export default Product;
{
  /* <div className="color-celeste flex items-center gap-3">
                  <MdOutlineFavoriteBorder className="text-2xl" /> Agregar a
                  favoritos
                </div> */
}
{
  /* <div className="my-8 flex flex-col gap-3 text-gray-400">
                <span> Vendedor: Polo</span>
                <span> Tipo de producto : Remera</span>
                <span>Tag: Remera,Hombre,Top</span>
              </div>
              <hr /> */
}
{
  /* <div className="mt-8 flex flex-col gap-3 text-gray-400">
                <span>DESCRIPCION</span>
                <hr className="w-[200px]" />
                <span>INFORMACION ADICIONAL</span>
                <hr className="w-[200px]" />
                <span>FAQ</span>
              </div>*/
}
