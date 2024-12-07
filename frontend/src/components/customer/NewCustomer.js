import { useState } from "react";

function NewCustomer(props) {
  const { customers, setCustomers } = props;
  const [customer_name, setCustomerName] = useState("");
  const [customer_email, setCustomerEmail] = useState("");

  async function createCustomer(e) {
    e.preventDefault();

    const response = await fetch("http://localhost/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_name,
        customer_email,
      }),
    });

    const data = await response.json();

    if (data.customer_id) {
        setCustomers([...customers, data]);
    }

    setCustomerName("");
    setCustomerEmail("");
  }

  return (
    <form className="new-contact" onSubmit={createCustomer}>
      <input
        type="text"
        placeholder="Customer Name"
        onChange={(e) => setCustomerName(e.target.value)}
        value={customer_name}
      />
      <input
        type="text"
        placeholder="Customer Email Address"
        onChange={(f) => setCustomerEmail(f.target.value)}
        value={customer_email}
      />
      <button className="button green" type="submit">
        Create New Customer
      </button>
    </form>
  );
}

export default NewCustomer;
