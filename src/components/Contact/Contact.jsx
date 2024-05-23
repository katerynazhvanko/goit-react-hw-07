// import { BsFillPersonFill } from "react-icons/bs";
// import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";
import defaultImage from "../utils/image/defaultImage.jpg";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={css.contact}>
      <div className={css.information}>
        <div className={css.image}>
          <img src={defaultImage} alt={"Default image contact"} />
        </div>
        <div>
          <p className={css.name}>{name}</p>
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}
