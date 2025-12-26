"use client";

import { useGetProduct } from "@/services/product/hooks";
import { IProduct } from "@/services/product/types";

function Home() {
  const { data, isLoading } = useGetProduct();

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
