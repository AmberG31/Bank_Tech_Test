# Bank tech test

## Specification

### Requirements

```
- You should be able to interact with your code via a REPL like IRB or Node.
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).
```

### Acceptance criteria

```
**Given** a client makes a deposit of 1000 on 10-01-2023
**And** a deposit of 2000 on 13-01-2023
**And** a withdrawal of 500 on 14-01-2023
**When** she prints her bank statement
**Then** she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## My approach to the solution

I have started with drawing a diagram and understanding what is the expected outcome and what potential functions I should have. I started TDD with very basic tests and functions such as just crediting or debiting and returning single amount as a balance. I then refactored the functions to calculate the balance and display everything in one line. Initially I’ve created a function for displaying the balance but came to a challenge to display it with individual transactions so I've refactored by removing the balance function and keeping the responsibility of balance change within the debitToAccount and creditFromAccount functions. Another function I had, was showTransactions - it was displaying transactions in one line. but once I've created the printStatment function which printed the formatted statement, the showTransactions function became unnecessarily and I deleted it. Once the code was completed, I have refactored it multiple times to simplify and reduce the number of functions.

## Code structure

I was considering to split the code in two classes but decided against it as it only has three functions.

Here is the diagram:
https://excalidraw.com/#json=mzaFlaI-OLqETni2sNhmj,GGFVFXu_TobuZVfFSj2ebQ

Bank is the main class that represents a bank account. It has the following properties:

- balance: A number representing the current balance in the account. Initially set to null.
- transactions: An array of objects representing each transaction. The initial array contains one transaction object with all properties set to null or 0.

And the following methods:

- debitToAccount(date, amount): Adds a new debit transaction to the account with the specified date and amount. The balance property is updated to reflect the new balance after the transaction.
- creditFromAccount(date, amount): Adds a new credit transaction to the account with the specified date and amount. The balance property is updated to reflect the new balance after the transaction.
- printStatement(): Returns a string representing a statement of all transactions made on the account. The statement includes the date, credit amount, debit amount, and the updated balance after each transaction.

## How to install, run and test the code

### Set up:

Clone the repo:

```
$ git clone https://github.com/AmberG31/Bank_Tech_Test.git

$ cd bank-tech

$ nvm install node
$ nvm use node
$ npm install
```

### Test:

To test the code, first install jest

```
$ npm install jest
```

To run the tests

```
$ jest or $ npm run test
```

### Run:

You can run this code two ways. By running the file or using node in the terminal.

#### Running the file

In the `bank.js` file, first create an instance of `Bank`, then pass arguments of `date` and `amount` to either `debitToAccount()` or `creditFromAccount()` functions. After, `consol.log(printStatement())` function on `bank` object. You can then run `node bank.js` in the terminal and the results will be printed to the console.

```javaScript
const myBank = new Bank();
bank.debitToAccount("14/01/2023", 3000);
bank.creditFromAccount("15/01/2023", 500);
bank.creditFromAccount("16/01/2023", 300);

console.log(myBank.printStatement());
```

```
$ node bank.js
```

#### Using terminal

```
$ node
$ const Bank = require('./bank')
$ const myBank = new Bank()
$ myBank.debitToAccount('22/3/2023', 123.45)
$ myBank.creditFromAccount('22/3/2023', 67.89)
$ newBank.printStatement()
```

## Future implementations

Given more time, I would like to write a few additional tests and improvements:
Test: Return an error if the date given is in wrong format;
Test: Return an error if balance is less than money being withdrawn;
Improvement: I would like to implement new Date() function instead of the manual input;
Improvement: Refactor printStatement() function. Split it in two methods to reduce the functionality of a single function.
