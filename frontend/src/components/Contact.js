import { useState, useEffect } from "react"; // import useEffect
import PhoneList from "./PhoneList.js";
import CompanyList from "./company/CompanyList.js";

function Contact(props) {
  const { contact, contacts, setContacts } = props;
  const [expanded, setExpanded] = useState(false);
  const [phones, setPhones] = useState([]);
  const [companies, setCompanies] = useState([]);
 
  //  Fetch Phones
  useEffect(() => {
    fetch("http://localhost/api/contacts/" + contact.id + "/phones")
      .then((response) => response.json())
      .then((data) => setPhones(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Fetch Companies
  useEffect(() => {
    fetch("http://localhost/api/companies/" + contact.id + "/")
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const expandStyle = {
    display: expanded ? "block" : "none",
  };

  async function doDelete(e) {
    e.stopPropagation();

    const response = await fetch(
      "http://localhost/api/contacts/" + contact.id,
      {
        method: "DELETE",
      }
    );

    let newContacts = contacts.filter((c) => {
      return c.id !== contact.id;
    });

    setContacts(newContacts);
  }

  return (
    <div
      key={contact.id}
      className="contact"
      onClick={(e) => setExpanded(!expanded)}
    >
      <div className="title">
        <h3>Contact Summary</h3>
        <div className="contact-info">
          <p>
            <strong>Name:</strong> {contact.name}
          </p>
          <p>
            <strong>Address:</strong> {contact.address}
          </p>
        </div>

        <button className="button red" onClick={doDelete}>
          Delete Contact
        </button>
      </div>

      <div style={expandStyle}>
        <CompanyList contact={contact} setCompanies={setCompanies} companies={companies} />
        <hr />
        <PhoneList phones={phones} setPhones={setPhones} contact={contact} />
      </div>
    </div>
  );
}

export default Contact;
