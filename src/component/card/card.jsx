import React from 'react'
import styles from './card.module.css'

export const Card = ()=>{
    console.log(`カードコンポーネント`)
    return(
        <>
            <div className={styles.card}>
                <img src='/img/spring.jpeg' alt='春'/>
                <p>てきとうてきとうてきとうてきとうてきとうてきとうてきとうてきとうてきとうてきとうてきとうてきとう</p>
            </div>
        </>
    )
}