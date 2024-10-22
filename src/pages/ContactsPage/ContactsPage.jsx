import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors'; 
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-hot-toast';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchContacts()).unwrap(); 
      } catch {
        toast.error('Failed to fetch contacts.');
      }
    };
    fetchData();
  }, [dispatch]);
  
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div className={s.contactsContainer}>
      <div className={s.formContainer}>
        <h1 className={s.pageTitle}>Phone Book</h1>
        <ContactForm />
      </div>

      {isLoading && (
        <div className={s.loaderContainer}>
          <Loader />
        </div>
      )}
      {isError && (
        <div className={s.errorContainer}>
          <h2>Error...</h2>
        </div>
      )}

      {visibleContacts.length > 0 ? (
        <ContactList contacts={visibleContacts} /> 
      ) : (
        <h3 className={s.noContactsMessage}>Contacts not found!</h3>
      )}
    </div>
  );
};

export default ContactsPage;



