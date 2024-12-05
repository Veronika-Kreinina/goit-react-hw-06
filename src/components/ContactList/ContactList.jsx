import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const getVisibleContacts = (contacts, nameFilter) => {
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  return filteredContacts;
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const nameFilter = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, nameFilter);

  return (
    <div>
      <ul className={s.list}>
        {visibleContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact key={contact.id} contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
