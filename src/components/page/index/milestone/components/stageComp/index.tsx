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
                        {
                            itemData.skip_desc && itemData.skip_url ? <a className={styles.skip_btn} href={itemData.skip_url}>
                                前往VIVAIA
                                <svg className="icon" style={{ marginLeft: 10 }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2611" width="16" height="16"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z" p-id="2612" fill="#182F39"></path></svg>
                            </a> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StageComp