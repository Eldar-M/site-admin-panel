import createCustomer from "./createCustomer";
import addElementsToTable from "./addElementsToTable";
import { customersURL } from './apiURLs.js'

export default function onCustomersLoaded() {

    fetch(customersURL)
        .then(response => response.json())
        .then(data => {
            const restoredListCustomers = data.slice();
            
            const customerElements = restoredListCustomers.map((customer) => createCustomer(customer))
            addElementsToTable(customerElements, '.tbodyCustomers')

        }).catch(err => console.log(err))
};