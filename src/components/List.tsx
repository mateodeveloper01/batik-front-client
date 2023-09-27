import React from "react";
import Card from "./Card";
import { type PropsItem } from "~/schemas/schemasProducts";
import { useQuery } from "@tanstack/react-query";
import { getItem } from "~/api/api";
import { Grid } from "@chakra-ui/react";

interface Props {
  catId?: string | string[];
  maxPrice: number | string;
  sort: string | null;
  subCats: string[];
}

interface PropCard {
  attributes: PropsItem;
  _id: string | never;
}
const List = ({ catId, maxPrice, sort, subCats }: Props) => {
  const { data, isLoading, isError } = useQuery<[]>({
    queryKey: ["productsId", catId, maxPrice, sort, subCats],
    queryFn: () => getItem(`/products?populate=*&[filter][category]=${catId}`),
  });
  const {
    data: products,
    isLoading: productsIsLoading,
    isError: productsIsError,
  } = useQuery<[]>({
    queryKey: ["products", catId, maxPrice, sort, subCats],
    queryFn: () => getItem(`/products`),
  });
  // `/products?populate=*&[filter][categories][title]=${catId}${subCats.map(
  //   (item) =>
  //     `&[filter][sub_categories][id][$eq]=${item}&[filter][price][$lte]=${maxPrice}&[filter][sortprice]=${sort}`
  // )}`
  console.log(products);
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={10}>
      {catId
        ? isError
          ? "Algo salió mal"
          : isLoading
          ? "loading"
          : data?.map((item: PropCard) => <Card item={item} key={item._id} />)
        : productsIsError
        ? "Algo salió mal"
        : productsIsLoading
        ? "loading"
        : products?.map((item: PropCard) => (
            <Card item={item} key={item._id} />
          ))}
    </Grid>
  );
};

export default List;
