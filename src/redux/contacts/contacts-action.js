// import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactError = createAction('contacts/fetchContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const addFilter = createAction('contacts/addFilter');

export default {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addFilter,
};

// const addContact = createAction(types.ADD_CONTACT, (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// const deleteContact = createAction(types.DELETE_CONTACT);
// const addFilter = createAction(types.ADD_FILTER);

// export default { addContact, deleteContact, addFilter };
// export const addContact = (id, name, phone) => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     id,
//     name,
//     phone,
//   },
// });

// export const deleteContact = (id) => ({
//   type: types.DELETE_CONTACT,
//   payload: {
//     id,
//   },
// });

// export const addFilter = (text) => ({
//   type: types.ADD_FILTER,
//   payload: {
//     text,
//   },
// });
