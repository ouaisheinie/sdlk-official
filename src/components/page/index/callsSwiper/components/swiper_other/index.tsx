import styles from './index.module.scss'
import { SwiperItemProps } from '@/components/page/index/callsSwiper'

interface PropsTypes {
    data: SwiperItemProps
}

export default function ContentOther(props: PropsTypes) {
    const { data } = props
    return (
        <div className={styles.content_container}>
            <picture>
                <img className={styles.content_img} src={data.image_src} alt="STARLINKE" />
            </picture>
        </div>
    )
}