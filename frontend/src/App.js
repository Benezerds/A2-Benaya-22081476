import { useState, useEffect } from "react"; // import useEffect
import ContactList from "./components/ContactList";
import Stats from "./components/Stats";
import "./App.css";
import CustomerList from "./components/customer/CustomerList";
import ItemList from "./components/item/ItemList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [items, setItems] = useState([]);

  //  Fetch Contacts Data
  useEffect(() => {
    fetch("http://localhost/api/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //  Fetch Customers Data
  useEffect(() => {
    fetch("http://localhost/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //  Fetch Items Data
  useEffect(() => {
    fetch("http://localhost/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="page">
      <h1>Ben's Company Data</h1>
      <div className="list-flex-container-row">
        <ContactList contacts={contacts} setContacts={setContacts} />
        <CustomerList customers={customers} setCustomers={setCustomers} />
        <ItemList items={items} setItems={setItems} />
      </div>
      <p>Click a contact to view associated phone numbers</p>
      <Stats />
    </div>
  );
}

export default App;
