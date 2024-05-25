import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://664f4386fafad45dfae30aed.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      //fulfilled
      return response.data;
    } catch (error) {
      //rejected
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async (newContact, thunkAPI) => {
    try {
      //fulfilled
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      //rejected
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (contactId, thunkAPI) => {
    try {
      //fulfilled
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      //rejected
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
