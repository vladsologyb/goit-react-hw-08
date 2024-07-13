import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/pageTitle/PageTitle";
import ContactList from "../../components/contactList/ContactList";
import ContactForm from "../../components/contactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/loader/Loader";
import SearchBox from "../../components/searchBox/SearchBox";
import css from "./ContactsPage.module.css"

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.formwrapper}>
        <PageTitle>Your contacts</PageTitle>
        <ContactForm />
        <SearchBox />
      </div>
      <div className={css.wrapper}>
        <ContactList />
        {isLoading && <Loader />}
      </div>
    </div>
  );
}