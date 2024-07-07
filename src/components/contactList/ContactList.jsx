import Contact from "../contact/Contact"
import { useSelector } from "react-redux";
import css from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
   const contacts = useSelector(selectFilteredContacts);

    return <ul className={css.list} >
      {contacts.map(({id, name, number}) => (
        <li className={css.item} key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
}