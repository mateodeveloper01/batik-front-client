import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { getItem } from "~/api/api";
import List from "~/components/List";
import { PropsCategories, PropsSubCategories } from "~/schemas/schemasProducts";

const Products = () => {
  const { query } = useRouter();
  if (!query.id) {
    return <div>cargandoo..</div>;
  }
  const [maxPrice, setMaxPrice] = useState<number | string>(100000);
  const [sort, setSort] = useState<null | "asc" | "desc">(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data: SubCategories, isLoading: loadingSubCategories } = useQuery<[]>(
    {
      queryKey: ["subCategories",query.id],
      queryFn: () => getItem(`/sub-categories?[filter][title]=${query.id}`),
    }
  );

  const { data: categories, isLoading: loadingCategories } = useQuery<[]>({
    queryKey: ["categories",query.id],
    queryFn: () => getItem(`/categories/${query.id}`),
  });

  const handleChange = (e: any) => {
    const value: number = e.target.value;
    const isChecked: boolean = e.target.checked;
    const checked: any = isChecked
      ? [...selectedSubCats, value]
      : selectedSubCats.filter((item) => item !== value);

    setSelectedSubCats(checked);
    console.log(checked);
  };

  if (loadingSubCategories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex px-12 py-7">
      <div className="flex-1">
        <div>
          <h1>Categorias de productos</h1>
          {SubCategories?.map((item: PropsSubCategories) => (
            <div key={item._id} className="flex gap-3">
              <input
                type="checkbox"
                id={item._id}
                value={item._id}
                onChange={handleChange}
              />
              <label className="capitalize" htmlFor={item._id}>
                {item.title}
              </label>
            </div>
          ))}
        </div>
        <div>
          <h1>Filtrar por precio</h1>
          <div>
            <span>30000</span>
            <input
              type="range"
              min={30000}
              max={100000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div>
          <h1>Mostrar por</h1>
          <div>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Precio (menor a mayor)</label>
          </div>
          <div>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Precio (mayor a menor)</label>
          </div>
        </div>
      </div>
      <div className="flex-3">
        <img
          className="mb-10 h-[300px] w-full object-cover "
          src={categories ? categories[0]?.img[0]?.url : ""}
          // src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List
          catId={query.id}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
