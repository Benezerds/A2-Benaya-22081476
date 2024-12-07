import { useState } from "react"; // import useEffect

function Customer(props) {
  const { customer, customers, setCustomers } = props;
  const [expanded, setExpanded] = useState(false);


  const expandStyle = {
    display: expanded ? "block" : "none",
  };

  async function doDelete(e) {
    e.stopPropagation();

    const response = await fetch(
      "http://localhost/api/customers/" + customer.customer_id,
      {
        method: "DELETE",
      }
    );

    let newContacts = customers.filter((c) => {
      return c.customer_id !== customers.customer_id;
    });

    setCustomers(newContacts);
  }

  return (
    <div
      key={customer.customer_id}
      className="contact"
      onClick={(e) => setExpanded(!expanded)}
    >
      <div className="title">
        <h3>Customer Summary</h3>
        <div className="contact-info">
          <p>
            <strong>Customer:</strong> {customer.customer_name}
          </p>
          <p>
            <strong>Customer Email:</strong> {customer.customer_email}
          </p>
        </div>

        <button className="button red" onClick={doDelete}>
          Delete Customer
        </button>
      </div>

      <div style={expandStyle}>
        <hr />
        
      </div>
    </div>
  );
}

export default Customer;
