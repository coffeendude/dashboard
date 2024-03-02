// Boiler plate for Redux Tool kit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    // Where the data is being fetched from
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    // Where the data is being stored
    reducerPath: "main",
    // What's being used to keep information in the store
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        // Where we create our API endpoints
        getKpis: build.query<void, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"],
        }),
    })
})

export const { useGetKpisQuery } = api;