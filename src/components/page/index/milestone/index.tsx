import styles from './index.module.scss'
import HalfCircle from '@/components/halfcircle'
import ContentLayout from "@/components/layoutcomp"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import StageComp from './components/stageComp'
import Pagination from './components/pagination'
import { useLangs } from '@/common/utils/langs'

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
}

// <svg t="1680771494553" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2611" width="32" height="32"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z" p-id="2612" fill="#182F39"></path></svg>

const MileStone: React.FC<MileStoneProps> = props => {
    const stageData: StageProps[] = [
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/logo_white.png',
            year: useLangs('homepage', 'year1'),
            event: useLangs('homepage', 'event1'),
            background_color: '#182F39'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/logo_white.png',
            year: useLangs('homepage', 'year1'),
            event: useLangs('homepage', 'event2'),
            background_color: '#182F39'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/logo_white.png',
            year: useLangs('homepage', 'year2'),
            event: useLangs('homepage', 'event3'),
            background_color: '#182F39'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/logo_white.png',
            year: useLangs('homepage', 'year3'),
            event: useLangs('homepage', 'event4'),
            background_color: '#182F39'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/vivaia-logo.png',
            vivaia_logo: true,
            year: useLangs('homepage', 'year4'),
            event: useLangs('homepage', 'event5'),
            background_color: '#9F5123',
            skip_desc: '前往VIVAIA',
            skip_url: 'https://www.vivaia.com'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/logo_white.png',
            year: useLangs('homepage', 'year4'),
            event: useLangs('homepage', 'event6'),
            background_color: '#182F39'
        },
        {
            company_logo: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/investor-logo.png',
            event_title: useLangs('homepage', 'event7_title'),
            year: useLangs('homepage', 'year4'),
            event: useLangs('homepage', 'event7'),
            background_color: '#182F39'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/vivaia-logo.png',
            vivaia_logo: true,
            year: useLangs('homepage', 'year5'),
            event: useLangs('homepage', 'event8'),
            background_color: '#9F5123'
        },
        {
            company_logo: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/investor-logo.png',
            event_title: useLangs('homepage', 'event9_title'),
            year: useLangs('homepage', 'year5'),
            event: useLangs('homepage', 'event9'),
            background_color: '#182F39'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/fanka-logo.png',
            fanka_logo: true,
            year: useLangs('homepage', 'year6'),
            event: useLangs('homepage', 'event10'),
            background_color: '#D53F62',
            skip_desc: '前往VIVAIA',
            skip_url: 'https://www.vivaia.com'
        },
        {
            logo_img: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/vivaia-logo.png',
            vivaia_logo: true,
            year: useLangs('homepage', 'year6'),
            event: useLangs('homepage', 'event11'),
            background_color: '#9F5123'
        },
    ]

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
                            onSlideChange={swiper => console.log(swiper)}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                stageData.map((item, index) => {
                                    return <SwiperSlide>
                                        <StageComp itemData={item}/>
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                        <Pagination stageData={stageData}/>
                    </div>
                </div>
            </ContentLayout>
        </div>
    )
}

export default MileStone