import { IMeta, IOrder, IProduct } from "@/types/common";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const ORDER_URL = "/orders";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all orders
    orders: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ORDER_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IOrder[], meta: IMeta) => {
        return {
          orders: response,
          meta,
        };
      },
      providesTags: [tagTypes.orders],
    }),
    // get single order
    order: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ORDER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.orders],
    }),
    // create a new order
    addOrder: build.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.orders],
    }),
    // update existing order
    updateOrder: build.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.orders],
    }),
    // delete existing order
    deleteOrder: build.mutation({
      query: (id) => ({
        url: `${ORDER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.orders],
    }),
  }),
});

export const {
  useOrdersQuery,
  useOrderQuery,
  useAddOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
