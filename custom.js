// Define the BankAccount class
class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    // Method to deposit money into the account
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into account ${this.accountNumber}`);
        } else {
            console.log('Invalid deposit amount. Please enter a positive number.');
        }
    }

    // Method to withdraw money from the account
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
            } else {
                console.log('Insufficient funds. Cannot withdraw.');
            }
        } else {
            console.log('Invalid withdrawal amount. Please enter a positive number.');
        }
    }

    // Method to get the current balance of the account
    getBalance() {
        return this.balance;
    }

    // Method to display account information
    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ${this.balance}`);
    }
}

// Create two instances of BankAccount and demonstrate functionality
const account1 = new BankAccount('1001', 'John Doe', 700);
const account2 = new BankAccount('002', 'Bob', 500);

// Display initial account information
console.log('Account 1 Information:');
account1.displayAccountInfo();
console.log('Account 2 Information:');
account2.displayAccountInfo();

// Deposit and withdraw from account 1
account1.deposit(500);
account1.withdraw(200);

// Deposit and withdraw from account 2
account2.deposit(100);
account2.withdraw(700);

// Display updated account information
console.log('Updated Account 1 Information:');
account1.displayAccountInfo();
console.log('Updated Account 2 Information:');
account2.displayAccountInfo();
