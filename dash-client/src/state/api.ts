// Boiler plate for Redux Tool kit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse } from "./types";

export const api = createApi({
    // Where the data is being fetched from
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    // Where the data is being stored
    reducerPath: "main",
    // What's being used to keep information in the store
    tagTypes: ["Kpis", "Products"],
    endpoints: (build) => ({
        // Where we create our API endpoints
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"],
        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "product/products/",
            providesTags: ["Products"],
        }),
    })
})

export const { useGetKpisQuery, useGetProductsQuery } = api;