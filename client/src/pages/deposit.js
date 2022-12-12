import NavbarComp from '../components/NavbarComp'
import styles from './deposit.module.css'
import Balance from './balance'
import { Alert } from "react-bootstrap";
import Footer from "./Footer";

export function Deposit() {

    const onDeposit = (e) => {
        e.preventDefault()

        console.log(e.target)
        const acId = e.target.acId.value
        const amount = e.target.amount.value

        console.log(`Id ${acId} Amount ${amount}`)

        fetch('http://localhost:4000/deposit', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ acId, amount })
        }).then(res => res.json())
            .then(json => console.log(json))



    }

    return (
        <div>
            <NavbarComp />
            <div className={styles.depCont}>
                

                
                <form onSubmit={onDeposit}>
                    <input type='number' placeholder='Account Id' name='acId' />
                    <input type='number' placeholder='Amount' name='amount' />
                    <input type='submit' value='Deposit' />
                </form>
            </div>
            <div className="container">
                <div className="bgsucc">
                <Alert variant="success">
                    <Alert.Heading>Welcome to Bank Pro</Alert.Heading>
                    <p>
                        Your transaction was successful. Thank you for banking with us.
                        
                    </p>
                    <hr />
                    <p className="mb-0">
                        For further details and queries, contact us at www.BankPro@gmail.com
                    </p>
                </Alert>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Deposit;