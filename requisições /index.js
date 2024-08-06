function renderTransactions(transactionData) {
    const transaction = document.createElement('div')
    transaction.classList.add('div')
    transaction.id = `transaction-${transactionData.id}`

    const description = document.createElement('h4')
    description.classList.add('transaction-description')
    description.textContent = `description-${transactionData.description}`

    const amount = document.createElement('p')
    amount.classList.add('transaction-amount')
    amount.textContent = `amount-${transactionData.amount}`

    const date = document.createElement('p')
    date.classList.add('transaction-date')
    date.textContent = `date-${transactionData.date}`

    transaction.append(description, amount, date)
    document.querySelector('#body_transactions').appendChild(transaction)

}


const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const transactionData = {
        description: document.querySelector('#transaction-description').value,
        amount: document.querySelector('#transaction-amount').value,
        date: document.querySelector('#transaction-date').value

    }

    const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    })

    

    const savedData = await response.json()
    form.reset()
    renderTransactions(savedData)
   

    console.log(savedData)
})