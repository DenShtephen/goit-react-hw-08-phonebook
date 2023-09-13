import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

const authenticateUser = async (url, credentials, thunkAPI) => {
  try {
    const res = await axios.post(url, credentials);
    setAuthToken(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const register = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    return authenticateUser('/users/signup', credentials, thunkAPI);
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    return authenticateUser('/users/login', credentials, thunkAPI);
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProfileThunk = createAsyncThunk(
  'auth/profile',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const stateThunk = thunkAPI.getState();
    const token = stateThunk.auth.token;

    if (!token) return;

    try {
      setAuthToken(token);
      const userProfile = await getProfileThunk();
      return userProfile;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
