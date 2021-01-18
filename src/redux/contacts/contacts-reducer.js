import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-action';
import operation from './contacts-operations';

const { fetchContacts, addContact, deleteContact } = operation;

const { addFilter } = actions;

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  //  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [addContact.fulfilled]: (_, action) => action.payload,
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
