import styles from './index.module.scss'
import { StageProps } from '../../index'

interface StageCompProps {
    itemData: StageProps
}

const StageComp: React.FC<StageCompProps> = props => {
    const { itemData } = props
    let img_style: undefined | string
    if (itemData.vivaia_logo) {
        img_style = 'vivaia'
    } else if (itemData.fanka_logo) {
        img_style = 'fanka'
    } else {
        img_style = 'starlinke'
    }
    return (
        <div className={styles.stage_container}>
            <div className={styles.stage_content}>
                <div className={styles.cp}>
                    <div className={styles.logo} style={{ backgroundColor: itemData.background_color }}>
                        <picture>
                            {
                                itemData.logo_img && <img className={styles[img_style]} src={itemData.logo_img} alt="STARLINK" />
                            }
                            {
                                itemData.company_logo && <div className={styles.companylogo_container}>
                                    <p className={styles.investigation}>
                                        <span>{ itemData.event_title }</span>
                                    </p>
                                    <img className={styles.companyLogo} src={itemData.company_logo} alt="STARLINK" />
                                </div>
                            }
                        </picture>
                    </div>
                    <div className={styles.text_container}>
                        <div className={styles.date}>{ itemData.year }</div>
                        <div className={styles.content}>{ itemData.event }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StageComp