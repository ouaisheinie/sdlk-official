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

export interface StringData {
    [keyname: string]: string
}

interface OurBrandDataProps {
    logo_img: string
    text_data: StringData
    // blog_data: StringData
    // skip_url: string
}

export default function OurBrand(props: HomeProps): ReactNode {
    useInjectLang(props.cookielang)

    const ourbrandData: OurBrandDataProps = {
        logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/Vlogo.png',
        text_data: {
            title: 'Step Into Conscious Comfort',
            desc: 'At VIVAIA, we are focused on creating shoes that are comfortable to wear and incredibly stylish, fusing modern technology with sustainable practices for the ultimate in eco-friendly footwear and apparel.',
            subtitle1: '61+',
            subdesc1: 'VIVAIA has left its footprint in 61 countries and regions.',
            subtitle2: '1,067,000+',
            subdesc2: 'Followed by over 1,067,000 social media fans',
            subtitle3: '3,475,206+',
            subdesc3: 'Over 3,475,206 PET bottles were recycled and counting'
        },
    }

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
            <TextContent logoImage={ourbrandData.logo_img} textData={ourbrandData.text_data}/>
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