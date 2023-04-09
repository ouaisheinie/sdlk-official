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
    blog_data: StringData[]
    skip_name: string
    skip_url: string
    blog_title: string
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
        skip_name: 'Go to VIVAIA',
        skip_url: 'https://www.vivaia.com',
        blog_title: 'We Care about Our Society',
        blog_data: [
            {
                img_url: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/v-tester.jpg',
                title: 'Vtester Soft Launching Our New Collection',
                desc: 'Since March 2021, we launched ‘Vtester’ free trial campaign by recruiting 500 Vtesters worldwide trying to encourage more public to participate in sustainable development and hearing suggestions from them to improve the products',
                view_more: 'View More',
                skip_url: ''
            },
            {
                img_url: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/child.jpg',
                title: 'SOS Children‘s Village',
                desc: 'We have released our flats collection Avis in collaboration with the SOS Children‘s Village. With every purchase of Avis flats, VIVAIA will donate $5 to the charity. Til the end of April, 2022, we donated $3,105 to Family Strengthening programme in Bangladesh helping support livelihood training to 2,500 underprivileged women and family in need with education, nutrition, income and health care.',
                view_more: 'View More',
                skip_url: ''
            },
            {
                img_url: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/breath.jpg',
                title: 'UBCF Breast Cancer',
                desc: 'In honor of Breast Cancer Awareness Month together with the United Breast Cancer Foundation. $10 will be donated to UBCF for each pair of pink shoes sold this month; with their mission to make a positive difference in the lives of those affected by breast cancer, regardless of age, race, gender or income. Til the end of Oct, 2022, we we wear pink with good cause and donated $4,850.',
                view_more: 'View More',
                skip_url: ''
            }
        ]
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
            <TextContent logoImage={ourbrandData.logo_img} textData={ourbrandData.text_data} skip_url={ourbrandData.skip_url} skip_name={ourbrandData.skip_name} />
            <Blogs blogData={ourbrandData.blog_data} blog_title={ourbrandData.blog_title}/>
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