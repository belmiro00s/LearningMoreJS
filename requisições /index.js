
document.querySelector('#add-transaction').addEventListener('submit', async (ev) => {
    ev.preventDefault();

    //storing the data to sending POST or PUT request
    const amountNumber = document.querySelector('#transaction-amount').value
    const transactionData = {
        date: document.querySelector('#transaction-date').value,
        description: document.querySelector('#transaction-description').value,
        amount: parseFloat(amountNumber)
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
        document.querySelector(`#transaction-${transactionId}`).remove()
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

let transactionsValue = []


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
    amount.id = `amount-${transactionData.id}`
    amount.textContent = transactionData.amount
    transactionsValue.push(transactionData.amount)




    //creating space where button update goes
    const actions = document.createElement('td')
    actions.classList.add('transactions-actions')

    //creating element button
    const buttonUpdate = document.createElement('button')
    buttonUpdate.classList.add('transaction-update')
    buttonUpdate.textContent = 'Update'

    const buttonDelete = document.createElement('button')
    buttonDelete.classList.add('transaction-delete')
    buttonDelete.textContent = 'Delete'

    const paragraph = document.createElement('br')


    //the form is filled with the info passed in the parameter
    buttonUpdate.addEventListener('click', () => pasteInfoForm(transactionData))
    buttonDelete.addEventListener('click', () => deletetransactionById(transactionData.id))


    //apendind button update at "actions" element 
    actions.append(buttonUpdate, paragraph, buttonDelete)

    transaction.append(date, description, amount, actions);
    document.querySelector('#body_transactions').appendChild(transaction);
    document.querySelector('#total_transactions').textContent = `Total transactions: ${sumAllTransactions(transactionsValue)}`
    console.log('Transaction rendered:', transactionData)
    console.log(transactionsValue)

}




//when this method is called, the form is filled with the info passed in the parameter
function pasteInfoForm(transactionData) {
    document.querySelector('#transaction-id').value = transactionData.id
    document.querySelector('#transaction-date').value = transactionData.date
    document.querySelector('#transaction-description').value = transactionData.description
    document.querySelector('#transaction-amount').value = transactionData.amount
    document.querySelector('#submit_button').textContent = 'Update Transaction'
}


async function deletetransactionById(transactionId) {
    const url = `http://localhost:3000/transactions/${transactionId}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log(`Transaction with ID ${transactionId} deleted successfully.`);
        } else {
            console.error('Failed to delete transaction:', response.statusText);
        }
    } catch (error) {
        console.error('Error deleting transaction:', error);
    }
}

function sumAllTransactions(transactionsValue) {
    return transactionsValue.reduce((total, num) => total + num)
}