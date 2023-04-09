import { ReactNode } from "react";
import { getCookie } from '@/common/utils/index'
import { useInjectLang } from '@/common/utils/langs'
import Header from '@/components/header'
import styles from './styles/ourbrand.module.scss'
import TextContent from '@/components/page/ourbrand/textContent'
import Blogs from '@/components/page/ourbrand/blog'

interface HomeProps {
	cookielang: string
}

export default function OurBrand(props: HomeProps): ReactNode {
    useInjectLang(props.cookielang)

    return (
        <>
            <div className={styles.topbanner}>
                <video style={{ width: '100%' }}src="https://cdnimg.vivaia.com/VA/video/Banner/20221220_5142/20221206-1920x800_3.mp4" controls={false} autoPlay muted>
                    您的浏览器不支持 video 标签。
                </video>
                <div className={styles.header}>
                    <Header backgroundColor="transparent" hoverBgColor="rgb(255, 139, 8)" />
                </div>
            </div>
            <TextContent />
            <Blogs />
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