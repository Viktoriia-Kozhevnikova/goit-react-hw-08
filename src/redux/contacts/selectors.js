import { selectNameFilter } from "/src/redux/filters/slice"; 
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.contacts.loading;
export const selectError = (state) => state.contacts.contacts.error;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) => {
//     if (!Array.isArray(contacts)) {
//       console.error("Expected contacts to be an array, but got:", contacts);
//       return [];
//     }
    
  
//     if (typeof filter !== "string") {
//       console.error("Expected filter to be a string, but got:", filter);
//       return contacts;
//     }

//     return contacts.filter((contact) =>
//       contact.name && contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
//     );
//   }
// );

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) {
      return []; 
    }

    if (typeof filter !== "string") {
      return contacts; 
    }

    const trimmedFilter = filter.toLowerCase().trim(); 

    return contacts.filter((contact) => {
      const contactName = contact.name?.toLowerCase().trim() || ""; 
      const contactPhone = contact.phone?.toLowerCase().trim() || ""; 

      return contactName.includes(trimmedFilter) || contactPhone.includes(trimmedFilter); 
    });
 }
);
