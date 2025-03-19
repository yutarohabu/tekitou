import React from 'react';
import styles from './App.module.css'
import {Test} from './component/test/test.jsx'
import {Header} from './component/header/Header.jsx'
import {Slide} from './component/slide/Slide.jsx'
import {Cards} from './component/cards/cards.jsx'

export const App = ()=>{
  return(
    <>
      <Header />
      <Top />
      <Test />
      <div className={styles.AppDiv}>aaa</div>
      <Slide />
      <Cards />
    </>
  )
}

const Top = ()=>{
  console.log(`トップコンポーネント`)
  return(
    <section className={styles.aaa}>
      <h1 className={styles.title}>テキトウサイト</h1>
      <p className={styles.description}>コードを触るための適当なサイト</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>言語 : JS(java script)</li>
        <li className={styles.listItem}>ワークフレーム : React</li>
      </ul>
    </ section>
  )
}