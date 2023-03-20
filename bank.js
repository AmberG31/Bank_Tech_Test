class Bank {
  constructor() {
    this.balance = 0;
    this.transactions = []; // stores date, action & amount;
  }

  showBalance() {
    const total = this.transactions.reduce((acc, transaction) => {
      if (transaction.debit === true) {
        return acc + transaction.amount;
      } else {
        return acc - transaction.amount;
      }
    }, 0);
    return total;
  }

  showTransactions() {
    return this.transactions.map((transaction) => {
      if (transaction.debit) {
        return `date: ${transaction.date}, debit: ${transaction.amount}`;
      } else if (transaction.credit) {
        return `date: ${transaction.date}, credit: ${transaction.amount}`;
      }
    });
  }

  debitToAccount(date, amount) {
    // let action = "debit";
    this.transactions.push({
      date: date,
      credit: false,
      debit: true,
      // action: action,
      amount: amount,
    });
  }

  creditFromAccount(date, amount) {
    // let action = "credit";
    const credit = this.transactions.push({
      date: date,
      credit: true,
      debit: false,
      // action: action,
      amount: amount,
    });
  }

  // printStatement() {
  // returns date, credit / debit, balance
  // }
}

module.exports = Bank;

const bank = new Bank();
bank.debitToAccount("14/01/2023", "500");
bank.creditFromAccount("15/01/2023", "100");

console.log(bank.showTransactions());

// showTransactions() {
// const transactionDetails = [];
// for (let i = 0; i < this.transactions.length; i++) {
//   const transaction = this.transactions[i];
//   transactionDetails.push(
//     `Date: ${transaction.date}, Action: ${transaction.action}, Amount: ${transaction.amount}`
//   );
// }
// return transactionDetails;
//        `date: ${transaction.date}, action: ${transaction.action}, amount: ${transaction.amount}`
