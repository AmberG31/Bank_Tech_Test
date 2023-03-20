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
  it("returns account balance", () => {
    const bank = new Bank();
    expect(bank.showBalance()).toEqual(0);
  });
});
