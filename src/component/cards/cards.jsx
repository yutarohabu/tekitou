import React from 'react'
import {Card} from '../card/card.jsx'
import styles from './cards.module.css'

export const Cards = ()=>{
    console.log(`カーズコンポーネント`)
    return(
        <section className={styles.cards}>
            <div className={styles.content}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}