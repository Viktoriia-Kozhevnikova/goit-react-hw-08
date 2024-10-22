import { useDispatch, useSelector } from "react-redux"; 
import { useEffect } from "react"; 
import { deleteContact, fetchContacts } from "/src/redux/contacts/operations";
import { selectFilteredContacts } from "/src/redux/contacts/selectors";
import Contact from "/src/components/Contact/Contact.jsx";
import s from "/src/components/ContactList/ContactList.module.css";
import { toast } from "react-hot-toast"; 
const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchContacts()).unwrap(); 
      } catch {
        toast.error("Failed to fetch contacts."); 
      }
    };

    fetchData();
  }, [dispatch]);

  const handleDeleteContact = async (id) => {
    try {
      await dispatch(deleteContact(id)).unwrap(); 
      toast.success("Contact deleted successfully.");
    } catch  {
      toast.error("Failed to delete contact."); 
    }
  };

  return (
    <ul className={s.list}>
      {filteredContacts.length === 0 && <li>No results found!</li>}
      {filteredContacts.map((contact) => (
        <Contact
          className={s.item}
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => handleDeleteContact(contact.id)} 
        />
      ))}
    </ul>
  );
};

export default ContactList;


// import { useDispatch, useSelector } from 'react-redux'; 
// import { useEffect } from 'react'; 
// import { deleteContact, fetchContacts } from '/src/redux/contacts/operations';
// import { selectFilteredContacts } from '/src/redux/contacts/selectors';
// import Contact from '/src/components/Contact/Contact.jsx';
// import s from '/src/components/ContactList/ContactList.module.css';

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const filteredContacts = useSelector(selectFilteredContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <ul className={s.list}>
//       {filteredContacts.length === 0 && <li>No results found!</li>}
//       {filteredContacts.map((contact) => (
//         <Contact
//           className={s.item}
//           key={contact.id}
//           name={contact.name}
//           number={contact.number}
//           onDelete={() => dispatch(deleteContact(contact.id))}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;


