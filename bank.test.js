const Bank = require("./bank");

// Account statement (date, amount, balance) printing.
// Data can be kept in memory (it doesn't need to be stored to a database or anything).
// Acceptance criteria
// Given a client makes a deposit of 1000 on 10-01-2023
// And a deposit of 2000 on 13-01-2023
// And a withdrawal of 500 on 14-01-2023
// When she prints her bank statement
// Then she would see

// date       || credit  || debit  || balance
// 14/01/2023 ||         || 500.00 || 2500.00
// 13/01/2023 || 2000.00 ||        || 3000.00
// 10/01/2023 || 1000.00 ||        || 1000.00

describe("Bank class", () => {
  beforeEach(() => {
    const bank = new Bank();
    bank.debitToAccount("00/00/0000", 0);
    bank.creditFromAccount("00/00/0000", 0);
  });

  it("returns account balance", () => {
    const bank = new Bank();
    expect(bank.showBalance()).toEqual(0);
  });

  it("debits money to the account", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    expect(bank.showBalance()).toEqual(3000);
  });

  it("debits multiple transactions to the account", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    bank.debitToAccount("14/01/2023", 1000);
    bank.debitToAccount("14/01/2023", 500);
    expect(bank.showBalance()).toEqual(4500);
  });

  it("credits money from the account", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    bank.creditFromAccount("15/01/2023", 500);
    expect(bank.showBalance()).toEqual(2500);
  });

  it("credits multiple transactions from the account", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    bank.creditFromAccount("15/01/2023", 500);
    bank.creditFromAccount("16/01/2023", 300);
    bank.creditFromAccount("17/01/2023", 200);
    expect(bank.showBalance()).toEqual(2000);
  });

  it("returns a single transaction", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    expect(bank.showTransactions()).toEqual([
      "date: 14/01/2023, debit: 3000, balance: 3000",
    ]);
  });

  it("returns multiple transactions", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    bank.creditFromAccount("17/01/2023", 200);
    expect(bank.showTransactions()).toEqual([
      "date: 14/01/2023, debit: 3000, balance: 3000",
      "date: 17/01/2023, credit: 200, balance: 2800",
    ]);
  });

  it("returns the transaction and balance in one line", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    expect(bank.printStatement()).toEqual(
      "date: 14/01/2023, debit: 3000, balance: 3000"
    );
  });

  it("returns multiple transactions and accumulates balance in individaul lines", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    bank.creditFromAccount("15/01/2023", 500);
    bank.creditFromAccount("16/01/2023", 300);
    expect(bank.printStatement()).toEqual(
      "date: 14/01/2023, debit: 3000, balance: 3000\ndate: 15/01/2023, credit: 500, balance: 2500\ndate: 16/01/2023, credit: 300, balance: 2200"
    );
  });
});

// catch erros - wrong date given
// balance is less than money being withdrawn
