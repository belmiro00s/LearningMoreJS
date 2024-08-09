
document.querySelector('#add-transaction').addEventListener('submit', async (ev) => {
    ev.preventDefault();

    //storing the data to sending POST or PUT request
    const transactionData = {
        date: document.querySelector('#transaction-date').value,
        description: document.querySelector('#transaction-description').value,
        amount: document.querySelector('#transaction-amount').value
    }
    //storing all transactionID
    const transactionId = document.querySelector('#transaction-id').value

    //if transactionId is presente in form, pass the id on URL : if is not present do not pass  
    const url = transactionId ? `http://localhost:3000/transactions/${transactionId}` : `http://localhost:3000/transactions`
    //if transactionId is present in form use method POST if not use method 'POST'
    const method = transactionId ? 'PUT' : 'POST'

    //Executing the POST request with fetch
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    });



    const savedData = await response.json()


    if (transactionId) {
        // Update existing transaction in the UI
        document.querySelector(`#transaction-${transactionId}`).remove();
    }

    renderTransactions(savedData);
    console.log('Saved or updated transaction:', savedData);

    // Reset the form
    document.querySelector('#add-transaction').reset(); //reset form
    document.querySelector('#submit_button').textContent = 'Add Transaction'; // Reset button text 

});



//Function to wait load all transactions, afterward render each transaction 
async function fetchTransactions() {

    const response = await fetch("http://localhost:3000/transactions");
    const transactions = await response.json();
    transactions.forEach(renderTransactions);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchTransactions();
});



function renderTransactions(transactionData) {
    const transaction = document.createElement('tr')
    transaction.id = `transaction-${transactionData.id}`

    const date = document.createElement('td')
    date.classList.add('transaction-date')
    date.textContent = transactionData.date || 'N/A' // Handle empty date

    const description = document.createElement('td')
    description.classList.add('transaction-description');
    description.textContent = transactionData.description

    const amount = document.createElement('td')
    amount.classList.add('transaction-amount')
    amount.textContent = transactionData.amount

    //creating space where button update goes
    const actions = document.createElement('td')
    actions.classList.add('transactions-actions')

    //creating element button
    const button = document.createElement('button')
    button.classList.add('transaction-update')
    button.textContent = 'Update'

    //the form is filled with the info passed in the parameter
    button.addEventListener('click', () => pasteInfoForm(transactionData))

    //apendind button update at "actions" element 
    actions.append(button)





    transaction.append(date, description, amount, actions);
    document.querySelector('#body_transactions').appendChild(transaction);
    console.log('Transaction rendered:', transactionData);
}

//when this method is called, the form is filled with the info passed in the parameter
function pasteInfoForm(transactionData) {
    document.querySelector('#transaction-id').value = transactionData.id
    document.querySelector('#transaction-date').value = transactionData.date
    document.querySelector('#transaction-description').value = transactionData.description
    document.querySelector('#transaction-amount').value = transactionData.amount
    document.querySelector('#submit_button').textContent = 'Update Transaction'
}