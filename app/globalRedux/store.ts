import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import mailsReducer from "@/app/globalRedux/slices/mailsSlice";

const store = configureStore({
  reducer: {
    mailsStore: mailsReducer,
  },
});

export const getMails = (state: RootState) => state.mailsStore.mails.data;
export const getMailsLoading = (state: RootState) => state.mailsStore.mails.isLoading;
export const getMailsError = (state: RootState) => state.mailsStore.mails.isError;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDisptach = useDispatch.withTypes<AppDispatch>();
export default store;
