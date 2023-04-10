import styles from './index.module.scss'
import { ItemDataProps } from '@/pages/joinus'
interface BlockItemProps {
    data: ItemDataProps
    number: number
}

const BlockItem: React.FC<BlockItemProps> = props => {
    const { data, number } = props
    return (
        <div className={`${styles.container} ${number % 2 === 1 ? styles.ml20 : ''}`}>
            <div className={styles.title}>
                <h2 className={styles.text}>{ data.title }</h2>
                <span className={styles.icon}>
                    <picture>
                        <img src={data.icon} alt="STARLINKE" />
                    </picture>
                </span>
            </div>
            <div className={styles.job}>
                <div className={styles.text}>
                    { data.job_desc[0] }
                </div>
                <div className={styles.split}></div>
                <div className={styles.text}>
                    { data.job_desc[1] }
                </div>
                <div className={styles.split}></div>
                <div className={styles.text}>
                { data.job_desc[2] }
                </div>
            </div>
            <div className={styles.desc}  title={data.desc}
                dangerouslySetInnerHTML={{
                    __html: data.desc
                }}
            >
            </div>
            <a className={styles.btn} href={data.skip_url}>
                { data.btn_text }
            </a>
        </div>
    )
}

export default BlockItem