class Bank {
  constructor() {
    this.balance = 0;
    this.transactions = [
      // {
      //   date: [],
      //   action: [],
      //   amount: [],
      // },
    ];
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
    return this.transactions;
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
    // this.balance.push(-amount);
    // this.balance = this.balance - amount;
  }

  // printStatement() {
  // returns date, credit / debit, balance
  // }
}

module.exports = Bank;

// const bank = new Bank();
// bank.debitToAccount("14/01/2023", "500");
// bank.debitToAccount("14/01/2023", "300");

// console.log(bank.showTransactions());
