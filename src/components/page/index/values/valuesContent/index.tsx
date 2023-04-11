import styles from './index.module.scss'

interface ContentProps {
    img_src: string
    title: string
    desc: string
}

const ValueContent: React.FC<ContentProps> = props => {
    return (
        <div className={styles.value_container}>
            <div className={styles.value_img}>
                <picture>
                    <img className={styles.img} src={props.img_src} alt="STARLINKE" />
                </picture>
                <div className={styles.textShadow}>
                    <div className={styles.textContent} dangerouslySetInnerHTML={{
                    __html: props.desc
                }}></div>
                </div>
            </div>
            <div className={styles.value_text}>
                <h3 className={styles.title}>{props.title}</h3>
                <h3 className={styles.desc} dangerouslySetInnerHTML={{
                    __html: props.desc
                }}></h3>
            </div>
        </div>
    )
}

export default ValueContent