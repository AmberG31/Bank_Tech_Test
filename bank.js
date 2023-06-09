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
    ];
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
    const header = "date || credit || debit || balance";

    const statement = this.transactions
      .filter((transaction) => transaction.amount !== 0)
      .map((transaction) => {
        let credit = "";
        let debit = "";
        if (transaction.credit) {
          this.balance -= transaction.amount;
          credit = transaction.amount.toFixed(2);
        } else if (transaction.debit) {
          this.balance += transaction.amount;
          debit = transaction.amount.toFixed(2);
        }
        const date = transaction.date;
        const balance = this.balance.toFixed(2);
        return `${date} || ${credit} || ${debit} || ${balance}`;
      });

    return [header, ...statement].join("\n");
  }
}

module.exports = Bank;

const bank = new Bank();
bank.debitToAccount("14/01/2023", 3000);
bank.creditFromAccount("15/01/2023", 500);
bank.creditFromAccount("16/01/2023", 300);

console.log(bank.printStatement());
