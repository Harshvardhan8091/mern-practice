function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${balance}`);
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: ${amount}. New balance: ${balance}`);
            } else {
                console.log(`Insufficient funds. Current balance: ${balance}`);
            }
        },

        getBalance() {
            console.log(`Current balance: ${balance}`);
            return balance;
        }
    };
}

// Example Usage
const account = createBankAccount(1000);

account.deposit(500);      // Deposited: 500. New balance: 1500
account.withdraw(300);     // Withdrew: 300. New balance: 1200
account.withdraw(1500);    // Insufficient funds. Current balance: 1200
account.getBalance();      // Current balance: 1200