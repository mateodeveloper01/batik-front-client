import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { type PropsItem } from "~/schemas/schemasProducts";
import { getItem } from "~/api/api";
import { Grid } from "@chakra-ui/react";

interface Props {
  type: string;
}

const TrendProducts = ({ type }: Props) => {
  // const { data, loading, error } = useFetch(
  //   `/api/products/type/${type}`
  // );

  const { data, isLoading } = useQuery<[]>({
    queryKey: [`products${type}`],
    queryFn: () => getItem(`/products/type/${type}`),
  });
  // ?populate=*&[filters][type][$eq]=${type}
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="m-5 mb-12 flex items-center justify-between md:m-40">
        <h1 className="flex-2 capitalize">{type} products</h1>
        <p className="flex-3 text-gray-500 max-md:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae
          vero reprehenderit quo at amet, inventore consequuntur voluptatibus
          possimus deserunt nostrum corrupti! Temporibus nostrum odit possimus
          laudantium omnis perspiciatis. Odio?
        </p>
      </div>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        columnGap={{ base: 4, md: 10 }}
        w={"80vw"}
        h={'full'}
      >
        {!isLoading && data
          ? data
              .slice(0, 8)
              .map((item: any) => <Card item={item} key={item._id} />)
          : "loading"}
      </Grid>
    </div>
  );
};

export default TrendProducts;
