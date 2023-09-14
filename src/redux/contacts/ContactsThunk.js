import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/AuthThunk';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch-contacts',
  async (_, thinkAPI) => {
    try {
      const response = await instance.get('/contacts');
      return response.data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error._message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contact/add-contact',
  async (contact, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contact/delete-contact',
  async (contactId, thinkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error._message);
    }
  }
);
