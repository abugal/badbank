const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome The Bank Pro')

console.log('\n 1. Create New Account')
console.log('\n 2. Deposit Money')
console.log('\n 3. Withdraw Money')
console.log('\n 4. Check Banlance')
console.log('\n 5. Transfer Money')
console.log('\n 6. Exit')



const ip = () => {
  return new Promise((resolve, reject) => {
    rl.question('\n Select from the Menu:', (ch) => {
      resolve(ch)
    })
  })
}

const start = async () => {
  while (true) {
    const choice = await ip()

    if (choice == 1) {
      console.log(`\n Create Account`)
    }
    else if (choice == 2) {
      console.log(`\n Deposit Money`)
    }
    else if (choice == 3) {
      console.log(`\n Make Withdrawal`)
    }
    else if (choice == 4) {
      console.log(`\n Check Your Balance`)
    }
    else if (choice == 5) {
      console.log(`\n Make Transfer`)
    }
    else {
      console.log(`Bye Bye`)
      process.exit()
    }
  }
}

start ();