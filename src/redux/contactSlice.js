// import { createSlice} from "@reduxjs/toolkit";



// const contactSlice = createSlice({
//     name: 'contacts',
//     initialState: {
//         contacts: [],
//         filter: '',
//     },
//     reducers: {

//         addItems (state, action){
//             state.contacts.push(action.payload);
//         },

//         deleteContact(state, action) {
//           state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
//         },

//         addFilter(state, action) {
//             state.filter = action.payload;
//           },
//     }
// });

// export const {addItems, addFilter, deleteContact} = contactSlice.actions;
// export default contactSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
          items: [],
          isLoading: false,
          error: null,
        },
        filter: '',
      },
      reducers: {
        addFilter: (state, action) => {
          state.filter = action.payload;
        },
      },
      extraReducers: {
        [fetchContacts.pending]: state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        },
        [fetchContacts.fulfilled]: (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.items = action.payload;
        },
        [fetchContacts.rejected]: state => {
          state.contacts.error = 'Something went wrong, try again later...';
        },
    
        [addContact.pending]: state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        },
        [addContact.fulfilled]: (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.items = [...state.contacts.items, action.payload];
        },
        [addContact.rejected]: state => {
          state.contacts.error = 'Adding went wrong...';
        },
    
        [deleteContact.pending]: state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        },
        [deleteContact.fulfilled]: (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.items = state.contacts.items.filter(
            contact => contact.id !== action.payload.id
          );
        },
        [deleteContact.rejected]: state => {
          state.contacts.error = 'Deleting went wrong...';
        },
      },
    });
    
    export const { addFilter } = contactsSlice.actions;
    
    export default contactsSlice.reducer;