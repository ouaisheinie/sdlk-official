import styles from './index.module.scss'
import HalfCircle from '@/components/halfcircle'
import ContentLayout from "@/components/layoutcomp"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
interface MileStoneProps {

}

const MileStone: React.FC<MileStoneProps> = props => {
    return (
        <div className={styles.milestone_container}>
            <HalfCircle dir="left" top={270}/>
            <ContentLayout>
                <h3 className={styles.title}>里程碑</h3>
                <p className={styles.desc}>大事记</p>
                <div className={styles.milestone_swiper}>
                    <Swiper
                        className="milestone-Swiper"
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={swiper => console.log(swiper)}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            123
                        </SwiperSlide>
                    </Swiper>
                </div>

            </ContentLayout>
        </div>
    )
}

export default MileStone