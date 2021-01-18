import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      // сортировка для получения актуальных данных, как и в редаксе
      const { data } = await axios.get('/contacts?_sort=id&_order=desc');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (user, { rejectWithValue }) => {
    const contact = {
      name: user.name,
      number: user.number,
    };
    try {
      await axios.post('/contacts', contact);
      // Так как именно бек генерирует уникальный id,
      //что бы его правильно отрисовать элементу для будущего взаимодействия нужно дселать запрос
      const { data } = await axios.get('/contacts?_sort=id&_order=desc');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
