import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ReportType } from "@/types";

const STORAGE_KEY = "tickets";

const getTicketsFromStorage = (): ReportType[] =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

const saveTicketsToStorage = (tickets: ReportType[]) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));

export const ticketsApi = createApi({
  reducerPath: "ticketsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Tickets"],
  endpoints: (builder) => ({
    getTickets: builder.query<ReportType[], void>({
      queryFn: () => ({ data: getTicketsFromStorage() }),
      providesTags: ["Tickets"],
    }),

    addTicket: builder.mutation<void, ReportType>({
      queryFn: (newTicket) => {
        const tickets = getTicketsFromStorage();
        saveTicketsToStorage([...tickets, newTicket]);
        return { data: undefined };
      },
      invalidatesTags: ["Tickets"],
    }),

    deleteTicket: builder.mutation<void, string>({
      queryFn: (id) => {
        const tickets = getTicketsFromStorage().filter(
          (ticket) => ticket.id !== id,
        );
        saveTicketsToStorage(tickets);
        return { data: undefined };
      },
      invalidatesTags: ["Tickets"],
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useAddTicketMutation,
  useDeleteTicketMutation,
} = ticketsApi;
