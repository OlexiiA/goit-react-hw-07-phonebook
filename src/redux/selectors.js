
export const selectItems = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectStatus = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
