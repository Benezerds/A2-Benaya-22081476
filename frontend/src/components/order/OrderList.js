import React, { useEffect, useState } from "react";
import NewOrder from "./NewOrder";
import Order from "./Order";

function OrderList(props) {
  const { customer, orders, setOrders } = props;
  const [items, setItems] = useState([]);

  // Fetch Items Data
  useEffect(() => {
    fetch("http://localhost/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="phone-list">
      <NewOrder customer={customer} items={items} />

      <table onClick={(e) => e.stopPropagation()}>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Item Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Only map through orders if orders is not empty */}
          {orders && orders.length > 0 ? (
            orders.map((order) => {
              return (
                <Order
                  key={order.order_id}
                  order={order}
                  orders={orders}
                  setOrders={setOrders}
                  items={items}
                />
              );
            })
          ) : (
            <tr>
              <td colSpan="3">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
