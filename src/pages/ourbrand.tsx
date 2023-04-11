import { createContext, ReactNode, useState } from "react";
import { getCookie, UserAgent } from '@/common/utils/index'
import { useInjectLang } from '@/common/utils/langs'
import Header from '@/components/header'
import HeaderMobile from '@/components/headerMobile'
import styles from './styles/ourbrand.module.scss'
import TextContent from '@/components/page/ourbrand/textContent'
import Blogs from '@/components/page/ourbrand/blog'
import Anchor from '@/components/anchor'

interface HomeProps {
	cookielang: string
    resolvedUrl: string
    isMobile: boolean
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

interface BrandInterface {
    isMobile: boolean
}
export const BrandProvider = createContext<BrandInterface>({} as BrandInterface)

function OurBrand(props: HomeProps): ReactNode {
    useInjectLang(props.cookielang)
    const { isMobile } = props
    const [brand, setBrand] = useState<string>('vivaia')

    const ourbrandData: OurBrandDataProps = {
        logo_img: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/logo-V.jpg',
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
                skip_url: 'https://www.vivaia.com/blog/vivaia-reviews-from-product-tester/'
            },
            {
                img_url: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/child.jpg',
                title: 'SOS Children‘s Village',
                desc: 'We have released our flats collection Avis in collaboration with the SOS Children‘s Village. With every purchase of Avis flats, VIVAIA will donate $5 to the charity. Til the end of April, 2022, we donated $3,105 to Family Strengthening programme in Bangladesh helping support livelihood training to 2,500 underprivileged women and family in need with education, nutrition, income and health care.',
                view_more: 'View More',
                skip_url: 'https://www.vivaia.com/promotion/Better_together-5658.html'
            },
            {
                img_url: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/breath.jpg',
                title: 'UBCF Breast Cancer',
                desc: 'In honor of Breast Cancer Awareness Month together with the United Breast Cancer Foundation. $10 will be donated to UBCF for each pair of pink shoes sold this month; with their mission to make a positive difference in the lives of those affected by breast cancer, regardless of age, race, gender or income. Til the end of Oct, 2022, we we wear pink with good cause and donated $4,850.',
                view_more: 'View More',
                skip_url: 'https://www.vivaia.com/promotion/Better_together-5658.html'
            }
        ]
    }

    const fankaData: OurBrandDataProps = {
        logo_img: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/logo-F.jpg',
        text_data: {
            title: 'Performance Makes Better.',
            desc: `Fanka is a fabricnology-oriented activewear brand devoted to making women shine. Our team comprises a group of maniacs with all the passion for making quality fabric and design.  Each step of our innovations in fabric performance is aimed to make people's lives more comfortable,convenient and versatile in every situation. Each innovation of Fanka is committed to bringing apparel to a new level.`,
            subtitle1: '56+',
            subdesc1: `Fanka's has fans in more than 56 countries around the world.`,
            subtitle2: '20,000+',
            subdesc2: "Fanka has received more than 20,000 five-star reviews from users within three months of its launch.",
            subtitle3: '350,000+',
            subdesc3: "Fanka is expected to provide over 350,000 pairs of leggings to users around the world in 2023"
        },
        skip_name: 'Go to Fanka',
        skip_url: 'https://www.fanka.com',
        blog_title: 'Main Products',
        blog_data: [
            {
                img_url: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/lifcruve.jpg',
                title: 'Lift n Curve Series',
                desc: 'Every body is able to be a masterpiece.',
                view_more: 'View More',
                skip_url: 'https://www.fanka.com/collections/lift-n-curve-collection'
            },
            {
                img_url: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/fanka-pigu.jpg',
                title: 'Beyond Nude Series',
                desc: 'Unlimited comfort in every situation.',
                view_more: 'View More',
                skip_url: 'https://www.fanka.com/collections/beyond-nude-collection '
            },
            {
                img_url: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/petfree.jpg',
                title: 'Pet Hair Free Series',
                desc: 'Ultimate solution for pet lovers.',
                view_more: 'View More',
                skip_url: 'https://www.fanka.com/collections/pet-hair-free-collection'
            }
        ]
    }

    return (
        <BrandProvider.Provider value={{ isMobile }}>
            <>
                <div className={styles.topbanner}>
                    <video style={{ width: '100%' }} src="https://cdnimg.vivaia.com/SLK/video/Banner/20230403_5400/VIVAIA-video-m.mp4" controls={false} autoPlay muted>
                        您的浏览器不支持 video 标签。
                    </video>
                    <div className={styles.header}>
                        {
                            !isMobile ? <Header backgroundColor="transparent" hoverBgColor="rgb(255, 139, 8)" /> : <HeaderMobile backgroundColor="transparent" hoverBgColor="rgb(255, 139, 8)" resolvedUrl={"/ourbrand"}/>
                        }
                    </div>
                    <div className={styles.videologo}>
                        <picture>
                            <img src={brand === 'vivaia' ? 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/VIVAIA.png' : 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/Fanka.png'} alt="VIVAIA" />
                        </picture>
                    </div>
                </div>
                {
                    brand === 'vivaia' ? 
                    <TextContent logoImage={ourbrandData.logo_img} textData={ourbrandData.text_data} skip_url={ourbrandData.skip_url} skip_name={ourbrandData.skip_name} brand={brand} /> : 
                    <TextContent logoImage={fankaData.logo_img} textData={fankaData.text_data} skip_url={fankaData.skip_url} skip_name={fankaData.skip_name} brand={brand} />
                }
                {
                    brand === 'vivaia' ? <Blogs blogData={ourbrandData.blog_data} blog_title={ourbrandData.blog_title}/> : 
                    <Blogs blogData={fankaData.blog_data} blog_title={fankaData.blog_title}/>

                }
                <Anchor brand={brand} setBrand={setBrand}/>
            </>
        </BrandProvider.Provider>
    )
}

export async function getServerSideProps(context: any) {
    const cookielang = context.req.cookies.cookie_lang || 'cn'
    const resolvedUrl = context.resolvedUrl
    const isMobile = UserAgent(context)

	return {
        props: {
            cookielang,
            resolvedUrl,
            isMobile
        }
	}
}

export default OurBrand