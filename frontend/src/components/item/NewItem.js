import { useState } from "react";

function NewItem(props) {
  const { items, setItems } = props;
  const [item_name, setItemName] = useState("");
  const [item_price, setItemPrice] = useState("");

  async function createItem(e) {
    e.preventDefault();

    const response = await fetch("http://localhost/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_name,
        item_price: parseInt(item_price),
      }),
    });

    const data = await response.json();

    if (data.item_id) {
        setItems([...items, data]);
    }

    setItemName("");
    setItemPrice("");
  }

  return (
    <form className="new-contact" onSubmit={createItem}>
      <input
        type="text"
        placeholder="Item Name"
        onChange={(e) => setItemName(e.target.value)}
        value={item_name}
      />
      <input
        type="text"
        placeholder="Item Price"
        onChange={(f) => setItemPrice(f.target.value)}
        value={item_price}
      />
      <button className="button green" type="submit">
        Create New item
      </button>
    </form>
  );
}

export default NewItem;
