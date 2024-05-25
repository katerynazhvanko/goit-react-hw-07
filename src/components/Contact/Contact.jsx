import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";
import defaultImage from "../utils/image/defaultImage.jpg";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <div className={css.image}>
          <img src={defaultImage} alt={"Default image contact"} />
        </div>
        <div>
          <p className={css.name}>{contact.name}</p>
          <p className={css.number}>{contact.number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
