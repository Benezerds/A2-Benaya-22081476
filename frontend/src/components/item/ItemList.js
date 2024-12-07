import Item from './Item.js';
import NewItem from './NewItem.js';

function ItemList(props) {
    const {items, setItems} = props;

	return (
		<div className='contact-list'>
            <h2>Item</h2>

            <NewItem items={items} setItems={setItems} />

            <hr />

            {
                items.map((item) => {
                    return (
                        <Item key={item.item_id} item={item} items={items} setItems={setItems} />
                    );
                })
            }
        </div>
	);
}

export default ItemList;
