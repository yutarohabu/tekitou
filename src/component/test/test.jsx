import React from 'react';
import styles from './test.module.css'

export const Test = ()=>{
    console.log(`テストコンポーネント`)
    return(
        <div className={styles.testDiv}>test</div>
    )
}