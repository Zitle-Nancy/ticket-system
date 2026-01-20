import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ReportType } from "../types/report.types";

const STORAGE_KEY = "report";

const getReportsFromStorage = (): ReportType[] =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

const saveReportsToStorage = (reports: ReportType[]) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));

export const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Reports"],
  endpoints: (builder) => ({
    getReports: builder.query<ReportType[], void>({
      queryFn: () => ({ data: getReportsFromStorage() }),
      providesTags: ["Reports"],
    }),

    addReport: builder.mutation<void, ReportType>({
      queryFn: (newReport) => {
        const reports = getReportsFromStorage();
        saveReportsToStorage([...reports, newReport]);
        return { data: undefined };
      },
      invalidatesTags: ["Reports"],
    }),

    deleteReport: builder.mutation<void, string>({
      queryFn: (id) => {
        const reports = getReportsFromStorage().filter(
          (report) => report.id !== id,
        );
        saveReportsToStorage(reports);
        return { data: undefined };
      },
      invalidatesTags: ["Reports"],
    }),
  }),
});

export const {
  useGetReportsQuery,
  useAddReportMutation,
  useDeleteReportMutation,
} = reportApi;
