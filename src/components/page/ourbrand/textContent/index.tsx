import styles from './index.module.scss'
import { StringData } from '@/pages/ourbrand'

interface TextContentProps {
    logoImage: string
    textData: StringData
    skip_name: string
    skip_url: string
}

const TextContent: React.FC<TextContentProps> = props => {
    const { logoImage, textData, skip_url, skip_name } = props
    return (
        <div className={styles.container}>
            <div className={styles.logoImage_container}>
                <picture>
                    <img className={styles.logoImage} src={ logoImage } alt="VIVAIA" />
                </picture>
            </div>
            <div className={styles.text_container}>
                <h2 className={styles.title}>{ textData.title }</h2>
                <p className={styles.desc}>{ textData.desc }</p>
                <hr className={styles.hr}/>
                <div className={styles.scores}>
                    <div className={styles.scroeItem}>
                        <h3 className={styles.title}>{ textData.subtitle1 }</h3>
                        <p className={styles.desc}>{ textData.subdesc1 }</p>
                    </div>
                    <div className={styles.scroeItem}>
                        <h3 className={styles.title}>{ textData.subtitle2 }</h3>
                        <p className={styles.desc}>{ textData.subdesc2 }</p>
                    </div>
                    <div className={styles.scroeItem }>
                        <h3 className={styles.title}>{ textData.subtitle3 }</h3>
                        <p className={styles.desc}>{ textData.subdesc3 }</p>
                    </div>
                </div>
                <a className={styles.buttondiv_vivaia} href={ skip_url }>
                    { skip_name }
                    <svg className={`icon ${styles.arrowRight}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2752" width="18" height="18"><path d="M557.397333 167.204571l293.059048 293.059048L902.192762 512l-51.712 51.712-293.059048 293.083429-51.736381-51.712L762.148571 548.571429H121.904762v-73.142858h640.243809L505.660952 218.940952l51.736381-51.736381z" p-id="2753" fill="#9F5123"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default TextContent