import { useState } from "react"; // import useEffect

function Item(props) {
  const { item, items, setItems } = props;
  const [expanded, setExpanded] = useState(false);


  const expandStyle = {
    display: expanded ? "block" : "none",
  };

  async function doDelete(e) {
    e.stopPropagation();

    const response = await fetch(
      "http://localhost/api/items/" + item.item,
      {
        method: "DELETE",
      }
    );

    let newContacts = items.filter((c) => {
      return c.item_id !== items.item_id;
    });

    setItems(newContacts);
  }

  return (
    <div
      key={item.item_id}
      className="contact"
      onClick={(e) => setExpanded(!expanded)}
    >
      <div className="title">
        <h3>Item Data</h3>
        <div className="contact-info">
          <p>
            <strong>Item:</strong> {item.item_name}
          </p>
          <p>
            <strong>Price:</strong> {item.item_price}
          </p>
        </div>

        <button className="button red" onClick={doDelete}>
          Delete Item
        </button>
      </div>

      <div style={expandStyle}>
        <hr />
        
      </div>
    </div>
  );
}

export default Item;
