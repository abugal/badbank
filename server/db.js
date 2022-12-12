const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'Abu59',
    database: 'bankdb',
    post: 5432
})

client.connect(err => {
    if (err) {
        console.log(`\n Error In Connectivity`)
        return
    }
    console.log(`\n Connected Successfuly`)

})

const createNewAccount = ({ acId, acNm, balance }, onCreate = undefined) => {
    client.query(`insert into account values ( $1, $2, $3)`, [acId, acNm, balance], (err, res) => {
        if (err) console.log(`\n Problem In Creating the Customer`)
        else {
            console.log('\n New Customer Created Successfully')
            if(onCreate) onCreate('New Customer Created Successfully')
        }
    })
}



const withdraw = ({ acId, amount }, onWithdraw = undefined) => {
    client.query(`select balance from account where ac_id = $1`, [acId], (err, res) => {
        if (err) {
            if (err) console.log(`\n Withdrawal Failed`)
        } else {
            const balance = parseFloat(res.rows[0].balance)
            

            const newBalance = balance - parseFloat(amount)

            client.query(`update account set balance = $1 where ac_id = $2`, [newBalance, acId], (err, res) => {
                if (err) console.log(`\n Transaction Failed`)
                else {
                    console.log(`\n Amount ${amount} has been withdrawn Successfully`)
                    if(onWithdraw) onWithdraw(`Amount ${amount} has been withdrawn Successfully`)
                }
                
            })
        }
    })
}




const deposit = ({ acId, amount }, onDeposit = undefined) => {
    client.query(`select balance from account where ac_id = $1`, [acId], (err, res) => {
        if (err) {
            console.log(`\n Deposit Failed`)
        }
        else {


            const balance = parseFloat(res.rows[0].balance)
            console.log(`\n Your current Balance is ${balance}`)

            const newBalance = balance + parseFloat(amount)

            client.query(`update account set balance = $1 where ac_id = $2`, [newBalance, acId], (err, res) => {
                if (err) console.log(`\n Transaction Failed`)
                else{
                     console.log(`\n Amount ${amount} has been deposited Successfully`)
                     if(onDeposit) onDeposit(`\n Amount ${amount} has been deposited Successfully`)
                }
            })
        }
    })

}

const transfer = ({ srcId, destId, amount }, onTransfer = undefined) => {
    withdraw({ acId: srcId, amount }, msgWd => {
        deposit({ acId: destId, amount }, msgDp => {
            if(onTransfer) onTransfer(`Amount ${amount} has been transfered successfully`)

        })

    })

    

}

const balance = (acId, onBalance = undefined) => {
    console.log(acId)
    client.query(`select balance from account where ac_id = $1`, [acId], (err, res) => {
        if (err) {
            if (err) console.log(`\n Balance could not be shown`)
        } else {
            const balance = parseFloat(res.rows[0].balance)
            console.log(`\n Your current Balance is : ${balance}`)
            if(onBalance) onBalance(balance)
        }
    })
}

module.exports = {
    createNewAccount, deposit, withdraw, transfer, balance
}

//createNewAccount({ acId: 4, acNm:'Abu', balance: 0 })

//const connect = async() => await client.connect()
//connect()
