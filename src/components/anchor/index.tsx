import styles from './index.module.scss'

interface AnchorProps {
    brand: string
    setBrand: Function
}

const Anchor: React.FC<AnchorProps> = props => {
    const { brand, setBrand } = props
    const handleClickAnchor = (): void => {
        const tar = brand === 'vivaia' ? 'fanka' : 'vivaia'
        setBrand(tar)
    }

    return (
        <div className={styles.anchordiv} onClick={handleClickAnchor} style={ brand === 'vivaia' ? { right: 20 } : { left: 20, flexDirection: 'row-reverse' }}>
            {
                brand === 'fanka' ? <div className={styles.logofanka}>
                    <picture>
                        <img src="https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/vivaia-fill.png" alt="STARLINK" />
                    </picture>
                </div> : 
                <div className={styles.logoVivaia}>
                    <picture>
                        <img src="https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/fanka-fill.png" alt="STARLINK" />
                    </picture>
                </div>
            }
            <p className={`${styles.brand} ${brand === 'vivaia' ? styles.brand1 : styles.brand2}`}>
                {
                    brand === 'vivaia' ? 'Fanka' : 'VIVAIA'
                }
            </p>
            {
                brand === 'vivaia' ? <svg className={styles.svg1} width="10" height="16" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.06066 1.06066C2.47487 0.474874 1.52513 0.474874 0.93934 1.06066C0.353553 1.64645 0.353553 2.59619 0.93934 3.18198L12.9602 15.2028C13.5459 15.7886 14.4957 15.7886 15.0815 15.2028C15.6673 14.617 15.6673 13.6673 15.0815 13.0815L3.06066 1.06066Z" fill="#182F39"/>
                    <path d="M0.93934 25.1023C0.353554 25.6881 0.353554 26.6378 0.93934 27.2236C1.52513 27.8094 2.47487 27.8094 3.06066 27.2236L15.0815 15.2028C15.6673 14.617 15.6673 13.6673 15.0815 13.0815C14.4957 12.4957 13.5459 12.4957 12.9602 13.0815L0.93934 25.1023Z" fill="#182F39"/>
                </svg> : 
                <svg className={styles.svg2} width="10" height="16" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9393 1.06066C13.5251 0.474874 14.4749 0.474874 15.0607 1.06066C15.6464 1.64645 15.6464 2.59619 15.0607 3.18198L3.03985 15.2028C2.45406 15.7886 1.50431 15.7886 0.918525 15.2028C0.332738 14.617 0.332739 13.6673 0.918525 13.0815L12.9393 1.06066Z" fill="#182F39"/>
                    <path d="M15.0607 25.1023C15.6464 25.6881 15.6464 26.6378 15.0607 27.2236C14.4749 27.8094 13.5251 27.8094 12.9393 27.2236L0.918525 15.2028C0.332738 14.617 0.332739 13.6673 0.918525 13.0815C1.50431 12.4957 2.45406 12.4957 3.03985 13.0815L15.0607 25.1023Z" fill="#182F39"/>
                </svg>
                
            }
        </div>
    )
}

export default Anchor