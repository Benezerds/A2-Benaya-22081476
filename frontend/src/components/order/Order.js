import { useState } from "react";

function Order(props) {
  const { order, orders, setOrders, items } = props;
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [editedItem, setEditItem] = useState(order.item_id); // Track edited item_id

  // Handle delete order
  async function deleteOrder() {
    const response = await fetch(
      `http://localhost/api/orders/${order.order_id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const newOrders = orders.filter((p) => p.order_id !== order.order_id);
      setOrders(newOrders);
    }
  }

  // Handle save order after editing
  async function editOrder() {
    console.log(editedItem);

    const response = await fetch(
      `http://localhost/api/orders/${order.order_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_id: editedItem,
        }),
      }
    );

    if (response.ok) {
      const updatedOrder = await response.json();

      // Update orders state with the modified order
      const updatedOrders = orders.map((o) =>
        o.order_id === updatedOrder.order_id ? updatedOrder : o
      );
      setOrders(updatedOrders);
      setIsEditing(false);
    } else {
      console.error("Failed to update order");
    }
  }

  return (
    <tr>
      {isEditing ? (
        <>
          <td>
            <select
              value={editedItem}
              onChange={(e) => setEditItem(e.target.value)} // Set item_id for editing
            >
              {items.map((item) => (
                <option key={item.item_id} value={item.item_id}>
                  {item.item_name}
                </option>
              ))}
            </select>
          </td>
          <td>
            <button className="button green" onClick={editOrder}>
              Save
            </button>
            <button className="button red" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{order.order_id}</td>
          <td>{order.item_name}</td>
          <td>
            <button className="button red" onClick={deleteOrder}>
              Delete
            </button>
            <button className="button blue" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </td>
        </>
      )}
    </tr>
  );
}

export default Order;
