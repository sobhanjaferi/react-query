"use client";

import { useEffect, useState } from "react";
import { getProduct } from "./endPoints";
import { IProduct } from "./types";

export const useGetProduct = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    getProduct().then((result) => {
      setData(result);

      setIsLoading(false);
    });
  }, []);

  return { data, isLoading };
};
