import { IMeta, IOrderProduct } from "@/types/common";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const ORDER_PRODUCT_URL = "/order-products";

export const orderProductApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all  orders product
    orderProducts: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ORDER_PRODUCT_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IOrderProduct[], meta: IMeta) => {
        return {
          orderProducts: response,
          meta,
        };
      },
      providesTags: [tagTypes.orderProducts],
    }),
    // get single order product
    orderProduct: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ORDER_PRODUCT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.orderProducts],
    }),
    // create a new order product
    addOrderProduct: build.mutation({
      query: (data) => ({
        url: `${ORDER_PRODUCT_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.orderProducts],
    }),
    // update existing order product
    updateOrderProduct: build.mutation({
      query: (data) => ({
        url: `${ORDER_PRODUCT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.orderProducts],
    }),
    // delete existing order product
    deleteOrderProduct: build.mutation({
      query: (id) => ({
        url: `${ORDER_PRODUCT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.orderProducts],
    }),
  }),
});

export const {
  useOrderProductsQuery,
  useOrderProductQuery,
  useAddOrderProductMutation,
  useUpdateOrderProductMutation,
  useDeleteOrderProductMutation,
} = orderProductApi;
