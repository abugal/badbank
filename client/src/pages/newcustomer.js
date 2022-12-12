import styles from './new-customer.module.css'
import NavbarComp from '../components/NavbarComp'
import { json } from 'react-router-dom'

export function NewCustomer() {

const onNewCustomer = e => {
    e.preventDefault()
    

    console.log(e.target)
    const acId = e.target.acId.value
    const acNm = e.target.acNm.value
    const balance = e.target.balance.value

    console.log(`Id ${acId} Name ${acNm} Bal ${balance}`)

    fetch('http://localhost:4000/create',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({acId, acNm, balance})
    }).then( res => res.json() )
    .then(json => console.log(json))
}

    return (
        <div>
            <NavbarComp />
        <div className={styles.cusCont}>  
            <h1>Creat New Customer</h1>
            <form onSubmit={onNewCustomer}>
                <input type='number' placeholder='Account Id' name='acId' />
                <input type='text' placeholder='Account Name' name='acNm' />
                <input type='number' placeholder='Balance' name='balance'/>
                <input type='submit' value='Create' />
            </form>
        </div>
        </div>
    )
};

export default NewCustomer;