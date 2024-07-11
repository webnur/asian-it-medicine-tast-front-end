import { IMeta, IProduct } from "@/types/common";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const PRODUCT_URL = "/products";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all products
    products: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: PRODUCT_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IProduct[], meta: IMeta) => {
        return {
          products: response,
          meta,
        };
      },
      providesTags: [tagTypes.products],
    }),
    // get single product
    product: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.products],
    }),
    // create a new product
    addProduct: build.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.products],
    }),
    // update existing product
    updateProduct: build.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.products],
    }),
    // delete existing product
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.products],
    }),
  }),
});

export const {
  useProductsQuery,
  useProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
