"use client";

import { getProduct } from "@/services/product/endPoints";
import { useGetProduct } from "@/services/product/hooks";
import { IProduct } from "@/services/product/types";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data, isLoading } = useGetProduct();
  const {} = useQuery({
    queryKey : [],
    queryFn : getProduct
  })

  return (
    <>
      <h1>heallo world</h1>

      <br />
      <br />

      <div>
        {isLoading
          ? "Loading ...."
          : data.map((item: IProduct) => <div key={item.id}>{item.title}</div>)}
      </div>
    </>
  );
}

export default Home;
