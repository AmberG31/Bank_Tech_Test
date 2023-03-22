const Bank = require("./bank");
const { describe, beforeEach, it, expect } = require("@jest/globals");

describe("Bank class", () => {
  beforeEach(() => {
    const bank = new Bank();
    bank.debitToAccount("00/00/0000", 0);
    bank.creditFromAccount("00/00/0000", 0);
  });

  it("returns account balance", () => {
    const bank = new Bank();
    expect(bank.printStatement()).toEqual("date || credit || debit || balance");
  });

  it("debits money to the account", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    expect(bank.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||         || 3000.00 || 3000.00"
    );
  });

  it("debits multiple transactions to the account", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    bank.debitToAccount("14/01/2023", 1000);
    expect(bank.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||         || 3000.00 || 3000.00\n14/01/2023 ||         || 1000.00 || 4000.00"
    );
  });

  it("credits money from the account", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    bank.creditFromAccount("15/01/2023", 500);
    expect(bank.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||         || 3000.00 || 3000.00\n15/01/2023 || 500.00  ||         || 2500.00"
    );
  });

  it("credits multiple transactions from the account", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    bank.creditFromAccount("15/01/2023", 500);
    bank.creditFromAccount("16/01/2023", 300);
    expect(bank.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||         || 3000.00 || 3000.00\n15/01/2023 || 500.00  ||         || 2500.00\n16/01/2023 || 300.00  ||         || 2200.00"
    );
  });

  it("returns a single transaction", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    expect(bank.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||         || 3000.00 || 3000.00"
    );
  });

  it("returns multiple transactions", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    bank.creditFromAccount("17/01/2023", 200);
    expect(bank.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||         || 3000.00 || 3000.00\n17/01/2023 || 200.00  ||         || 2800.00"
    );
  });

  it("returns the transaction and balance in one line", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    expect(bank.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||         || 3000.00 || 3000.00"
    );
  });

  it("returns multiple transactions and accumulates balance in individaul lines", () => {
    const bank = new Bank();
    bank.debitToAccount("14/01/2023", 3000);
    bank.creditFromAccount("15/01/2023", 500);
    bank.creditFromAccount("16/01/2023", 300);
    expect(bank.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||         || 3000.00 || 3000.00\n15/01/2023 || 500.00  ||         || 2500.00\n16/01/2023 || 300.00  ||         || 2200.00"
    );
  });
});
