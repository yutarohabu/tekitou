import React from `react`
import styles from './Header.module.css'

export const Header = ()=>{
    console.log(`ヘッダーコンポーネント`)
    return(
        <>
            <header className={styles.header}>
                <div className={styles.bar}>
                    <div className={styles.logo}>ロゴ</div>
                </div>
            </header>
        </>
    )
}