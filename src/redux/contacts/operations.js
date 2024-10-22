import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const apiGoIt = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkApi) => {
  try {
    const { data } = await apiGoIt.get('/contacts');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkApi) => {
  try {
    const { data } = await apiGoIt.post('/contacts', newContact);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
  try {
    const { data } = await apiGoIt.delete(`/contacts/${id}`);
    return data.id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});


export const updateContact = createAsyncThunk('contacts/updateContact', async (updatedContact, thunkApi) => {
  try {
    const { data } = await apiGoIt.patch(`/contacts/${updatedContact.id}`, updatedContact);
    return data; 
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});




// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const apiGoIt = axios.create({
//   baseURL: 'https://connections-api.goit.global/',
// });

// export const fetchContacts = createAsyncThunk('contacts/fetchAll',
//     async (_, thunkApi) => {
//     try {
//         const { data } = await axios.get('/contacts');
//         return data;
//     } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//     }
//     })

// export const addContact = createAsyncThunk('contacts/addContact',
//     async (newContact, thunkApi) => {
//     try {
//         const { data } = await axios.post('/contacts', newContact);
//         return data;
//     } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//     }
//         })    

// export const deleteContact = createAsyncThunk('contacts/deleteContact',
//     async (id, thunkApi) => {
//     try {
//         const { data } = await axios.delete(`/contacts/${id}`);
//         return data.id;
//     } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//     }
// })        