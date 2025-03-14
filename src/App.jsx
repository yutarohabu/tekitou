import React from 'react';
import styles from './App.module.css'
import {Test} from './test.jsx'

export const App = ()=>{
  return(
    <>
      <Top />
      <Test />
      <div>aaa</div>
    </>
  )
}

const Top = ()=>{
  console.log(`トップコンポーネント`)
  return(
    <h2 className={styles.title}>Top</h2>
  )
}