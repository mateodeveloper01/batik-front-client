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

const List = ({ catId, maxPrice, sort, subCats }: Props) => {
  const { data, isLoading, isError } = useQuery<PropsItem[]>({
    queryKey: ["productsId", catId],
    queryFn: () =>
      getItem(
        catId ? `/products?populate=*&[filter][category]=${catId}` : `/products`
      ),
  });

  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      rowGap={{ base: 4, md: 10 }}
      columnGap={{ base: 2, md: 10 }}
    >
      {isError
        ? "Algo salió mal"
        : isLoading
        ? "loading"
        : data
            ?.slice() // Crear una copia para no modificar el array original
            .sort((a, b) => {
              if (a.new && !b.new) {
                return -1; // Producto "a" es nuevo y "b" no, por lo que "a" viene primero.
              } else if (!a.isStock && b.isStock) {
                return 1; // Producto "a" no tiene stock y "b" sí, por lo que "b" viene primero.
              } else if (a.isStock && !b.isStock) {
                return -1; // Producto "a" tiene stock y "b" no, por lo que "a" viene primero.
              } else {
                return 0; // Ambos productos son iguales en términos de isNew e isStock.
              }
            })
            .map((item: PropsItem) => <Card item={item} key={item._id} />)}
    </Grid>
  );
};

export default List;
