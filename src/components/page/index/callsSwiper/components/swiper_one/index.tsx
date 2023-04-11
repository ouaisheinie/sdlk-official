import { useState } from 'react'
import styles from "./index.module.scss"
import Marquee from './marquee'
import { useIsMobile } from '@/common/utils/langs'
interface PropsTypes {

}

export default function SwiperOne(props: PropsTypes) {
    const [images, setImages] = useState<Array<string[]>>([
        [
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-a.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-b.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-c.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-d.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-e.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-a.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-b.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-c.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-d.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-e.jpg'
        ],
        [
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-f.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-g.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-h.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-i.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-j.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-f.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-g.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-h.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-i.jpg',
            'https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/custumer-j.jpg'
        ]
    ])

    const isMobile = useIsMobile()

    return (
        <div className={styles.swiper_content}>
            <Marquee imageList={images[0]} slideDir="left" marginbottom={isMobile ? 10 : 20}/>
            <Marquee imageList={images[1]} slideDir="right" marginbottom={isMobile ? 20 : 40}/>
        </div>
    )
} 