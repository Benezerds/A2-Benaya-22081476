import { useState } from "react";

function NewOrder(props) {
  const { items, customer, orders, setOrders } = props;
  const [item, setItem] = useState("");

  if (!customer || !customer.customer_id) {
    return <p>No contact selected to associate a company with.</p>;
  }

  // Create Order Function
  async function createOrder(e) {
    e.preventDefault();

    const response = await fetch("http://localhost/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_date: Date.now(),
        customer_id: customer.customer_id,
        item_id: item,
      }),
    });

    const data = await response.json();

    if (data.order_id) {
      setOrders([...orders, data]);

      setItem("");
    } else {
      console.error("Error creating order");
    }
  }

  return (
    <form onSubmit={createOrder} onClick={(e) => e.stopPropagation()} className="new-order">
      <label htmlFor="item-select">Select Item:</label>
      <select
        id="item-select"
        value={item}
        onChange={(e) => setItem(e.target.value)} // Set item_id when an item is selected
      >
        <option value="">--Choose an Item--</option>
        {items.map((item) => (
          <option key={item.item_id} value={item.item_id}>
            {item.item_name}
          </option>
        ))}
      </select>

      <button className="button green" type="submit">
        Add New Order
      </button>
    </form>
  );
}

export default NewOrder;
