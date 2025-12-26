"use client";

import { getProduct } from "./endPoints";
import { IProduct } from "./types";
import { useQuery } from "@tanstack/react-query";

export const useGetProduct = () => {
  return useQuery<IProduct[]>({
    queryKey: ["getProduct"],
    queryFn: getProduct,
  });
};
