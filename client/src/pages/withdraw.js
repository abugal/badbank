import styles from './withdraw.module.css'
import NavbarComp from '../components/NavbarComp'

export function Withdraw() {

    const onWithdraw = (e) => {
        e.preventDefault()

    console.log(e.target)
    const acId = e.target.acId.value
    const amount = e.target.amount.value

    console.log(`Id ${acId} Amount ${amount}`)

    fetch('http://localhost:4000/withdraw',{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({acId, amount})
    }).then( res => res.json() )
    .then(json => console.log(json))



    }

    
    return (
        <div>
            <NavbarComp />
        <div className={styles.wthCont}>  
        <h1>withdraw Amount</h1>
        <form onSubmit={onWithdraw}>
            <input type='number' placeholder='Account Id' name='acId' />
            <input type='number' placeholder='Amount' name='amount' />
            <input type='submit' value='Withdraw' />
        </form>
    </div>
    </div>
    )
};

export default Withdraw

