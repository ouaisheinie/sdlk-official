import styles from './index.module.scss'

interface PropsTypes {

}

export default function Navigation(props: PropsTypes) {
     return (
        <div className={styles.swiperNavigation}>
            <div className={styles.prevbtn}>
                1
            </div>
            <div className={styles.nextBtn}>
                2
            </div>
        </div>
     )
} 