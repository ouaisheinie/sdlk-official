import styles from './index.module.scss'
import ContentLayout from "@/components/layoutcomp"
import { useLangs } from '@/common/utils/langs'
import Link from 'next/link'
import { useContext } from "react"
import { C_Content } from "@/pages/_app"
import { getCookie, setCookie } from '@/common/utils/index'
interface FooterProps {

}

const Footer: React.FC<FooterProps> = props => {
    const { langdata, lang, setLang } = useContext(C_Content)

    const handleChangeLanguage = (e: any): void => {
        setLang(e.target.value)
        setCookie('cookie_lang', e.target.value, 7)
        window.location.href = "/"
    }

    return (
        <div className={styles.footer}>
            <ContentLayout>
                <div className={styles.footer_container}>
                    <div className={styles.columns}>
                        <div className={`${styles.column} ${styles.column_one}`}>
                            <div className={styles.columnItem}>
                                <picture>
                                    <img className={styles.starlinke_logo} src="https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starlinke-whitebg.png" alt="STARLINKE" />
                                </picture>
                            </div>
                        </div>
                        <div className={`${styles.column} ${styles.column_other}`}>
                            <h2>{ useLangs('common', 'contace_us') }</h2>
                            <div className={styles.columnItem}>
                                <a href="mailto:contact@starlinke.com">contact@starlinke.com</a>
                            </div>
                        </div>
                        <div className={`${styles.column} ${styles.column_other}`}>
                            <h2>{ useLangs('common', 'joinus') }</h2>
                            <div className={styles.columnItem}>
                            <Link href="/joinus">{ useLangs('common', 'recruitment') }</Link>
                            </div>
                        </div>
                        <div className={`${styles.column} ${styles.column_other}`}>
                            <h2>{ useLangs('common', 'abond') }</h2>
                            <div className={styles.columnItem}>
                                <a href="https://www.vivaia.com">VIVAIA</a>
                            </div>
                            <div className={styles.columnItem}>
                                <a href="https://www.fanka.com">Fanka</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.langs}>
                            <select name="language" id="language" onChange={handleChangeLanguage} value={lang}>
                                <option value="en">English</option>
                                <option value="cn">Chinese</option>
                            </select>
                        </div>
                        <div>Copyright © Starlink</div>
                        <div>粤ICP备18131415号</div>
                    </div>
                </div>
            </ContentLayout>
        </div>
    )
}

export default Footer