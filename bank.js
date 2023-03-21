class Bank {
  constructor() {
    this.balance = null;
    this.transactions = [
      {
        date: null,
        credit: 0,
        debit: 0,
        amount: 0,
        balance: 0,
      },
    ]; // stores date, action & amount;
  }

  showTransactions() {
    return this.transactions
      .filter((transaction) => transaction.amount !== 0)
      .map((transaction) => {
        if (transaction.debit) {
          this.balance += transaction.amount;
          return `date: ${transaction.date}, debit: ${transaction.amount}, balance: ${this.balance}`;
        } else if (transaction.credit) {
          this.balance -= transaction.amount;
          return `date: ${transaction.date}, credit: ${transaction.amount}, balance: ${this.balance}`;
        }
      });

    // return this.transactions
    //   .filter((transaction) => transaction.amount !== 0)
    //   .map((transaction) => {
    //     if (transaction.debit) {
    //       return `date: ${transaction.date}, debit: ${transaction.amount}, balance: ${transaction.balance}`;
    //     } else if (transaction.credit) {
    //       return `date: ${transaction.date}, credit: ${transaction.amount}, balance: ${transaction.balance}`;
    //     }
    //   });
  }

  debitToAccount(date, amount) {
    const balance = this.balance + amount;
    this.transactions.push({
      date: date,
      credit: false,
      debit: true,
      amount: amount,
      balance: balance,
    });
  }

  creditFromAccount(date, amount) {
    const balance = this.balance - amount;
    this.transactions.push({
      date: date,
      credit: true,
      debit: false,
      amount: amount,
      balance: balance,
    });
  }

  printStatement() {
    const transactions = this.showTransactions();

    const sentences = transactions.map((transaction) => `${transaction}`);

    return sentences.join("\n");
  }
}

module.exports = Bank;

// const bank = new Bank();
// bank.debitToAccount("14/01/2023", 3000);
// bank.creditFromAccount("15/01/2023", 500);
// bank.creditFromAccount("16/01/2023", 300);

// console.log(bank.showTransactions());
// console.log(bank.printStatement());
