import { IMeta, IProduct, IProductCategory } from "@/types/common";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const CATEGORY_URL = "/categories";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all categories
    categories: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: CATEGORY_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IProductCategory[], meta: IMeta) => {
        return {
          categories: response,
          meta,
        };
      },
      providesTags: [tagTypes.categories],
    }),
    // get single category
    category: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.categories],
    }),
    // create a new category
    addCategory: build.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.categories],
    }),
    // update existing category
    updateProduct: build.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.categories],
    }),
    // delete existing category
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.categories],
    }),
  }),
});

export const {
  useCategoriesQuery,
  useCategoryQuery,
  useAddCategoryMutation,
  useUpdateProductMutation,
  useDeleteCategoryMutation,
} = categoryApi;
