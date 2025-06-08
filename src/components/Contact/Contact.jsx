import css from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import ContactEditForm from './ContactEditForm';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
  }

  function submitUpdatedContact(values) {
    if (values.name !== name || values.number !== number)
      dispatch(updateContact({ id, ...values })).then(() => setIsEditing(false));
    else setIsEditing(false);
  }

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return isEditing ? (
    <ContactEditForm id={id} name={name} number={number} handleUpdate={submitUpdatedContact} />
  ) : (
    <div className={css.wrapper}>
      <div className={css.fildsblock}>
        <p className={css.field}>
          <IoPerson className={css.icon} size={21} />
          {name}
        </p>
        <p className={css.field}>
          <FaPhoneAlt className={css.icon} size={21} />
          {number}
        </p>
      </div>
      <div className={css.buttonsblock}>
        <button className={css.button} onClick={handleEdit}>
          <RiEdit2Line className={css.icon} size={21} />
        </button>
        <button className={css.button} onClick={handleDelete}>
          <RiDeleteBinLine className={css.icon} size={21} />
        </button>
      </div>
    </div>
  );
}
