import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post('/users/signup', credentials);
      setAuthToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post('/users/login', credentials);
      setAuthToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
    clearAuthToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk(
  'auth/refresh',

  async (_, thunkAPI) => {
    const stateThunk = thunkAPI.getState();
    const token = stateThunk.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue();
    }

    try {
      setAuthToken(token);
      const userProfile = await instance.get('/users/current');
      return userProfile.data;
    } catch (error) {
      clearAuthToken();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
