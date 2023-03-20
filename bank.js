class Bank {
  constructor() {
    this.balance = 0.0;
  }

  showBalance() {
    return this.balance;
  }

  debitToAccount(amount) {
    this.balance = this.balance + amount;
  }

  creditFromAccount(amount) {
    this.balance = this.balance - amount;
  }
}

module.exports = Bank;
