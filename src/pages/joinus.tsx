import { ReactNode } from "react";
import { getCookie } from '@/common/utils/index'
import { useInjectLang } from '@/common/utils/langs'
import styles from './styles/joinus.module.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
interface JoinusProps {
	cookielang: string
}

export default function Joinus(props: JoinusProps): ReactNode {
    useInjectLang(props.cookielang)

    return (
        <>
            <Header />
            <div className={styles.topBanner}>
                <picture>
                    <img className={styles.topbannerImage} src="https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/join%20us.jpg" alt="alt" />
                    <div className={styles.topBannerText}>
                        <h2 className={styles.title}>加入我们</h2>
                        <p className={styles.desc}>创造不断进步</p>
                    </div>
                </picture>
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context: any) {
	const cookielang = getCookie('cookie_lang', context) || 'cn'
	return {
		props: {
			cookielang
		}
	}
}