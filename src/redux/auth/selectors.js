export const selectContacts = state => state.contacts.items;

export const selectFilters = state => state.filter;

export const getStateToken = state => state.auth.token;

export const getStateAuth = state => state.auth;
