# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time. This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
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
Careers team quote: "[One of] the big 3 things we hear from employers [is] write a good README."

Employer quote: "The ReadMes are quite poor...so I had to go through their code to see what they made."

Describe how you approached designing your solution to the problem.

Describe how you structured your code. Why did you do it this way?

Describe how to install and run your code and tests.

Describe the dependencies your code has. What trade-offs did you make when deciding what dependencies to use?

If you've deployed the app, include a link to it.

Include screenshots of your running app.

Try very hard to complete all the tasks in the tech test. If you run out of time, outline how you would have approached the sections you didn't get to.

<!-- -------------------- -->

ESLint:

Install ESLint globally using the following command in your terminal:

Copy code
npm install -g eslint
Navigate to your JavaScript project directory in the terminal.

Run the following command to create a configuration file for ESLint:

csharp
Copy code
eslint --init
This command will prompt you with a series of questions to customize the configuration file for your project.

Once the configuration file is created, you can run ESLint on your JavaScript files by running the following command:

Copy code
eslint your-javascript-file.js
ESLint will analyze your code and report any issues it finds according to the rules specified in the configuration file.

You can also integrate ESLint into your development environment, such as Visual Studio Code, by installing an ESLint extension.

That's it! You now have a linter installed for your JavaScript project and can use it to ensure your code follows best practices and is error-free.

<!-- -------------------- -->

TO RUN AND TEST THE PROJECT:

cd bank-tech (git init)
Initialise the project directory. This assumes you have NVM already installed:
nvm use node
npm install jest esbuild

npm init -y
To test run 'jest' in the command line

<!-- -------------------- -->
