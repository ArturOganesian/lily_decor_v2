import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSubscribersThunk = createAsyncThunk("get_mails", async () => {
  try {
    const response = await axios.get(
      "/api/mails"
    );
    return response?.data;
  } catch (error) {
    console.log(error, "error");
  }
});

const initialState = {
  mails: {
    data: [],
    isLoading: false,
    isError: null,
  },
};

export const mailsSlice = createSlice({
  name: "mails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubscribersThunk.pending, (state: any) => {
        state.mails.isLoading = true;
      })
      .addCase(getSubscribersThunk.fulfilled, (state: any, action) => {
        state.mails.isLoading = false;
        state.mails.data = action.payload;
      })
      .addCase(getSubscribersThunk.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});


export default mailsSlice.reducer;
