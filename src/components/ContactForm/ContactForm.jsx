import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
// import "yup-phone-lite";

import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("This is required"),
  number: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("This is required"),

  // .phone("UA", "Please enter a valid phone number")
  // .required("A phone number is required"),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmitForm = (values, actions) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return toast.error("There is already a similar contact");
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h2>Add new contact</h2>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={onSubmitForm}
        validationSchema={ContactShema}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor={nameId} className={css.label}>
              Name
            </label>
            <Field type="text" name="name" id={nameId} className={css.field} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div>
            <label htmlFor={numberId} className={css.label}>
              Number
            </label>
            <Field
              type="tel"
              name="number"
              id={numberId}
              className={css.field}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
