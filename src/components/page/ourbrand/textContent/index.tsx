import styles from './index.module.scss'

interface TextContentProps {

}

const TextContent: React.FC<TextContentProps> = props => {
    return (
        <div className={styles.container}>
            <div className={styles.logoImage_container}>
                <picture>
                    <img className={styles.logoImage} src="https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/Vlogo.png" alt="VIVAIA" />
                </picture>
            </div>
            <div className={styles.text_container}>
                <h2 className={styles.title}>Step Into Conscious Comfort</h2>
                <p className={styles.desc}>At VIVAIA, we are focused on creating shoes that are comfortable to wear and incredibly stylish, fusing modern technology with sustainable practices for the ultimate in eco-friendly footwear and apparel.</p>
                <hr className={styles.hr}/>
                <div className={styles.scores}>
                    <div className={styles.scroeItem}>
                        <h3 className={styles.title}>61+</h3>
                        <p className={styles.desc}>VIVAIA has left its footprint in 61 countries and regions.</p>
                    </div>
                    <div className={styles.scroeItem}>
                        <h3 className={styles.title}>61+</h3>
                        <p className={styles.desc}>VIVAIA has left its footprint in 61 countries and regions.</p>
                    </div>
                    <div className={styles.scroeItem}>
                        <h3 className={styles.title}>61+</h3>
                        <p className={styles.desc}>VIVAIA has left its footprint in 61 countries and regions.</p>
                    </div>
                </div>
                <a className={styles.buttondiv} href="https://www.vivaia.com">
                    Go to VIVAIA
                    <svg className={styles.arrowRight} t="1681018524646" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2752" width="18" height="18"><path d="M557.397333 167.204571l293.059048 293.059048L902.192762 512l-51.712 51.712-293.059048 293.083429-51.736381-51.712L762.148571 548.571429H121.904762v-73.142858h640.243809L505.660952 218.940952l51.736381-51.736381z" p-id="2753" fill="#9F5123"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default TextContent