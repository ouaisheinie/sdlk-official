import styles from './index.module.scss'
import HalfCircle from '@/components/halfcircle'
import ContentLayout from "@/components/layoutcomp"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import StageComp from './components/stageComp'
import Pagination from './components/pagination'
import { useLangs } from '@/common/utils/langs'
import { useState } from 'react'

interface MileStoneProps {

}

export interface StageProps {
    logo_img?: string
    vivaia_logo?: boolean
    fanka_logo?: boolean
    company_logo?: string
    event_title?: string
    investor_company?: string
    year: string,
    event: string
    skip_desc?: string
    skip_url?: string
    background_color: string
    pagination_color: string
    pagination_img: string
}

const MileStone: React.FC<MileStoneProps> = props => {
    const [current, setCurrent] = useState<number>(0)

    const stageData: StageProps[] = [
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/logo_white.png',
            year: useLangs('homepage', 'year1'),
            event: useLangs('homepage', 'event1'),
            background_color: '#182F39',
            pagination_color: '#FF8B08',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starline-fill.png'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/logo_white.png',
            year: useLangs('homepage', 'year1'),
            event: useLangs('homepage', 'event2'),
            background_color: '#182F39',
            pagination_color: '#FF8B08',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starline-fill.png'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/logo_white.png',
            year: useLangs('homepage', 'year2'),
            event: useLangs('homepage', 'event3'),
            background_color: '#182F39',
            pagination_color: '#FF8B08',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starline-fill.png'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/logo_white.png',
            year: useLangs('homepage', 'year3'),
            event: useLangs('homepage', 'event4'),
            background_color: '#182F39',
            pagination_color: '#FF8B08',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starline-fill.png'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/vivaia-logo.png',
            vivaia_logo: true,
            year: useLangs('homepage', 'year4'),
            event: useLangs('homepage', 'event5'),
            background_color: '#9F5123',
            skip_desc: useLangs('homepage', 'gotoVIVAIA'),
            skip_url: 'https://www.vivaia.com',
            pagination_color: '#9F5123',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/vivaia-fill.png'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/logo_white.png',
            year: useLangs('homepage', 'year4'),
            event: useLangs('homepage', 'event6'),
            background_color: '#182F39',
            pagination_color: '#FF8B08',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starline-fill.png'
        },
        {
            company_logo: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/investor-logo.png',
            event_title: useLangs('homepage', 'event7_title'),
            year: useLangs('homepage', 'year4'),
            event: useLangs('homepage', 'event7'),
            background_color: '#182F39',
            pagination_color: '#FF8B08',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starline-fill.png'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/vivaia-logo.png',
            vivaia_logo: true,
            year: useLangs('homepage', 'year5'),
            event: useLangs('homepage', 'event8'),
            background_color: '#9F5123',
            pagination_color: '#9F5123',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/vivaia-fill.png'
        },
        {
            company_logo: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/investor-logo.png',
            event_title: useLangs('homepage', 'event9_title'),
            year: useLangs('homepage', 'year5'),
            event: useLangs('homepage', 'event9'),
            background_color: '#182F39',
            pagination_color: '#FF8B08',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starline-fill.png'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/fanka-logo.png',
            fanka_logo: true,
            year: useLangs('homepage', 'year6'),
            event: useLangs('homepage', 'event10'),
            background_color: '#D53F62',
            pagination_color: '#D53F62',
            skip_desc: useLangs('homepage', 'gotoFanka'),
            skip_url: 'https://www.fanka.com',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/fanka-fill.png'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/vivaia-logo.png',
            vivaia_logo: true,
            year: useLangs('homepage', 'year6'),
            event: useLangs('homepage', 'event11'),
            background_color: '#9F5123',
            pagination_color: '#9F5123',
            pagination_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/vivaia-fill.png'
        },
    ]

    const handleChangeSlide: (swiper: any) => void = (swiper) => {
        setCurrent(swiper.activeIndex)
    }

    return (
        <div className={styles.milestone_container}>
            <HalfCircle dir="left" top={270}/>
            <ContentLayout>
                <div className={styles.milestone_div}>
                    <h3 className={styles.title}>里程碑</h3>
                    <p className={styles.desc}>大事记</p>
                    <div className={styles.milestone_swiper}>
                        <Swiper
                            className="milestone-Swiper"
                            modules={[Navigation]}
                            slidesPerView={1}
                            navigation
                            onSlideChange={swiper => handleChangeSlide(swiper)}
                            onSwiper={(swiper) => console.log('onswiper')}
                        >
                            {
                                stageData.map((item, index) => {
                                    return <SwiperSlide key={index}>
                                        <StageComp itemData={item}/>
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                        <Pagination stageData={stageData} current={current}/>
                    </div>
                </div>
            </ContentLayout>
        </div>
    )
}

export default MileStone