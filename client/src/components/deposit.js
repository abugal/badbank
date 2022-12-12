import styles from './deposit.module.css'

export function Deposit() {

    const onDeposit = (e) => {
        e.preventDefault()

    console.log(e.target)
    const acId = e.target.acId.value
    const amount = e.target.amount.value

    console.log(`Id ${acId} Amount ${amount}`)



    }

    return (
    <div className={styles.depCont}>  
        <h1>Deposit</h1>
        <form onSubmit={onDeposit}>
            <input type='number' placeholder='Account Id' name='acId' />
            <input type='number' placeholder='Amount' name='amount' />
            <input type='submit' value='Deposit' />
        </form>
    </div>
    )
}