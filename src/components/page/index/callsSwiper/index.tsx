import styles from "./index.module.scss"
import ContentOne from "./components/swiper_one"
import ContentOther from "./components/swiper_other"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import { useState } from "react";
import { useLangs } from '@/common/utils/langs'

export interface SwiperItemProps {
    itemType: number,
    item_subtitle: string,
    item_title: string,
    image_src?: string
}

interface PropsTypes {

}
export default function CallsSwiper(props: PropsTypes) {
    const itemData: SwiperItemProps[] = [
        {
            itemType: 1,
            item_subtitle: useLangs('homepage', 'calls_1st_subTitle'),
            item_title: useLangs('homepage', 'calls_1st_title')
        },
        {
            itemType: 2,
            item_subtitle: useLangs('homepage', 'calls_2nd_subTitle'),
            item_title: useLangs('homepage', 'calls_2nd_title'),
            image_src: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/worker.jpg'
        },
        {
            itemType: 3,
            item_subtitle: useLangs('homepage', 'calls_3rd_subTitle'),
            item_title: useLangs('homepage', 'calls_3rd_title'),
            image_src: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/partner.jpg'
        },
        {
            itemType: 4,
            item_subtitle: useLangs('homepage', 'calls_4th_subTitle'),
            item_title: useLangs('homepage', 'calls_4th_title'),
            image_src: 'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/orwner.jpg'
        },
    ]

    const [slideIndex, setSlideIndex] = useState<number>(0)

    const swiperSlideChange = (index: number): void => {
        setSlideIndex(index)
    }

    return (
        <div className={styles.swiper_container}>
            <Swiper
                className="mySwiper"
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={swiper => swiperSlideChange(swiper.activeIndex)}
                onSwiper={(swiper) => console.log('onswiper')}
            >
                {
                    itemData.map((item, index) => {
                        if (item.itemType === 1) {
                            return <SwiperSlide key={index} className="contentOne-slide">
                                <ContentOne />
                                <div className={styles.swiper_info_one}>
                                    <div className={styles.subTitle}>{ item.item_subtitle }</div>
                                    <div className={styles.title}>{ item.item_title }</div>
                                </div>
                            </SwiperSlide>
                        } else {
                            return <SwiperSlide key={index} className="contentOther-slide">
                                <ContentOther data={item}/>
                                <div className={styles.swiper_info}>
                                    <div className={styles.subTitle}>{ item.item_subtitle }</div>
                                    <div className={styles.title}>{ item.item_title }</div>
                                </div>
                            </SwiperSlide>
                        }
                    })
                }
            </Swiper>
        </div>
    )
}