class Bank {
  constructor() {
    this.balance = 0;
    this.transactions = [
      // {
      //   date: "",
      //   action: "",
      //   amount: 0,
      // },
    ]; // stores date, action & amount;
  }

  showBalance() {
    const total = this.transactions.reduce((acc, transaction) => {
      if (transaction.action === "debit") {
        return acc + transaction.amount;
      } else {
        return acc - transaction.amount;
      }
    }, 0);
    return total;
  }

  showTransactions() {
    return this.transactions.map(
      (transaction) =>
        `date: ${transaction.date}, action: ${transaction.action}, amount: ${transaction.amount}`
    );

    // const transactionDetails = [];
    // for (let i = 0; i < this.transactions.length; i++) {
    //   const transaction = this.transactions[i];
    //   transactionDetails.push(
    //     `Date: ${transaction.date}, Action: ${transaction.action}, Amount: ${transaction.amount}`
    //   );
    // }
    // return transactionDetails;

    // return this.transactions;
  }

  debitToAccount(date, amount) {
    let action = "debit";
    this.transactions.push({
      date: date,
      action: action,
      amount: amount,
    });
  }

  creditFromAccount(date, amount) {
    let action = "credit";
    this.transactions.push({
      date: date,
      action: action,
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
