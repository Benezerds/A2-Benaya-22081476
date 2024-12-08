import { useEffect, useState } from "react"; // import useEffect
import OrderList from "../order/OrderList";

function Customer(props) {
  const { customer, customers, setCustomers } = props;
  const [orders, setOrders] = useState([]);
  const [expanded, setExpanded] = useState(false);

  // Fetch customer orders data
  useEffect(() => {
    fetch("http://localhost/api/orders/" + customer.customer_id)
      .then((response) => response.json())
      .then((data) => setOrders(data))
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
      "http://localhost/api/customers/" + customer.customer_id,
      {
        method: "DELETE",
      }
    );

    let newCustomer = customers.filter((c) => {
      return c.customer_id !== customer.customer_id;
    });

    setCustomers(newCustomer);
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
        <OrderList orders={orders} setOrders={setOrders} customer={customer} />
        <hr />
      </div>
    </div>
  );
}

export default Customer;
