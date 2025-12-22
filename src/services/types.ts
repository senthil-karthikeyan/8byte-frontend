import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type TUseMutationOption = Omit<
  UseMutationOptions<AxiosResponse<any, any>, unknown, any, unknown>,
  "mutationFn"
>;

export type TUseQueryOption = Omit<
  UseQueryOptions<AxiosResponse<any, any>, unknown, any>,
  "queryFn"
>;
