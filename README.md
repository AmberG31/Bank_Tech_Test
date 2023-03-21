# Bank tech test

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node.
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit

<!-- -------------------- -->

README checklist

## My approach to the solution

<!-- Describe how you approached designing your solution to the problem. -->

I have started with drawing a diagram and understanding what is the expected outcome and what potential functions I should have. I started TDD with very basic tests and once the code was compelted, I have refactored it multiple times to simplify it and reduce the number of functions.

## Code structure

<!-- Describe how you structured your code. Why did you do it this way? -->

I was considering of splitting the code it in two classes but decided against it as it only has three functions.
Bank is the main class that represents a bank account. It has the following properties:

** balance: A number representing the current balance in the account. Initially set to null.
** transactions: An array of objects representing each transaction. The initial array contains one transaction object with all properties set to null or 0.

And the following methods:

** debitToAccount(date, amount): Adds a new debit transaction to the account with the specified date and amount. The balance property is updated to reflect the new balance after the transaction.
** creditFromAccount(date, amount): Adds a new credit transaction to the account with the specified date and amount. The balance property is updated to reflect the new balance after the transaction.
\*\* printStatement(): Returns a string representing a statement of all transactions made on the account. The statement includes the date, credit amount, debit amount, and the updated balance after each transaction.

## How to install, run and test the code

<!-- Describe how to install and run your code and tests. -->

### Set up:

cd bank-tech (git init)
Initialise the project directory. This assumes you have NVM already installed:
nvm use node
npm install jest esbuild
npm init -y

### Test:

Run 'jest' in the command line

### Run:

run the file: node bank.js
or
interact live: node

## Future implimentations

Given more time, I would liek to write a few additional tests and improvements:
Test: Return an error if the date given is in wrong format;
Test: Return an error if balance is less than money being withdrawn;
Improvement: I would like to implement new Date() function instead of the manual input;
Improvement: Refactor printStatement() function. Split it in two methods to reduce the funcionality of a single funcion.
