import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import {deleteContact} from '../../redux/contactsOps.js'
export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
    return <div className={css.container}>
    <div className={css.containerForP}>
        <p className={css.text}>{name}</p>
       
        <p className={css.text}>{number}</p>
          </div>
      <button className={css.btn} onClick={()=>dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
}