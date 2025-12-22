import { useQuery } from "@tanstack/react-query";
import {  TUseQueryOption } from "../types";
import portfolio from "./portfolio";

const usePortfolio = () => {

  const useGetAllPortfolio = (options?: TUseQueryOption) =>
    useQuery({
      queryKey: ["getAllPortfolio"],
      queryFn: () => portfolio.getAllPortfolio(),
      ...options,
    });

  return {
    useGetAllPortfolio,
  };
};

export default usePortfolio;
