import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGoIt } from '/src/redux/contacts/operations';


const setAuthHeader = (token) => {
  apiGoIt.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
  delete apiGoIt.defaults.headers.common.Authorization;
};


export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await apiGoIt.post('/users/signup', credentials);
      setAuthHeader(data.token); 
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await apiGoIt.post('/users/login', credentials);
      setAuthHeader(data.token); 
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await apiGoIt.post('/users/logout');
    clearAuthHeader(); 
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});


export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.token; 
    if (!savedToken) {
      return thunkApi.rejectWithValue('Token not found');
    }
    setAuthHeader(savedToken);
    const { data } = await apiGoIt.get('/users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

