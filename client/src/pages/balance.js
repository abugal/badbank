import styles from './balance.module.css'
import {useState } from "react";
import NavbarComp from '../components/NavbarComp';
import Footer from "./Footer"

export function Balance() {

    const [bal, setBal] = useState(0)

    const onBalance = (e) => {
        e.preventDefault()

        const acId = e.target.acId.value

        console.log(`Id ${acId}`)

        fetch(`http://localhost:4000/balance/${acId}`,)
        .then( res => res.json() )
        .then(json => setBal(json.bal))
    }
    return (
        <div>
            <NavbarComp />
            <div className={styles.balCont}>
                <h1>Current Balance : {bal}</h1>
                <form onSubmit={onBalance}>
                    <input type='number' placeholder='Account Id' name='acId' />
                    <input type='submit' value='Balance' />
                </form>
            </div>

            


        </div>
    )
}

export default Balance;