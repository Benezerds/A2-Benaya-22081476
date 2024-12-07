import Customer from './Customer.js';
import NewCustomer from './NewCustomer.js';

function CustomerList(props) {
    const {customers, setCustomers} = props;

	return (
		<div className='contact-list'>
            <h2>Customer</h2>

            <NewCustomer customers={customers} setCustomers={setCustomers} />

            <hr />

            {
                customers.map((customer) => {
                    return (
                        <Customer key={customer.customer_id} customer={customer} customers={customers} setContacts={setCustomers} />
                    );
                })
            }
        </div>
	);
}

export default CustomerList;
