// classe emprestimo
import { format, formatDate } from 'date-fns';

class Loan {
    static #interestRate = 0

    constructor(valueLoanloan, numberInstallments){
        this.valueLoan = valueLoanloan
        this.numberInstallments = numberInstallments
        this.loanInstallments = this.installmentCalculation()
        this.createDate = new Date()
    }



    installmentCalculation(){
        const installments = []
        const installmentsAmount = this.valueLoan / this.numberInstallments
        let dueDate = new Date()

        for(let i = 0; i < this.numberInstallments; i++){
            dueDate.setMonth(dueDate.getMonth() + 1) // ajust the date for the next month
            const formatedDueDate = format(dueDate, 'dd/MM/yyyy')
            installments.push(` Installment Value: ${installmentsAmount}, dueDate: ${formatedDueDate}`)
        }
        return installments
    }

    get interestRate(){
        return Loan.#interestRate
    }


    set setNewRate(rate){
        Loan.#interestRate += rate
    }
}


const loan1 = new Loan(200, 2)

loan1.installmentCalculation()

console.log(loan1)