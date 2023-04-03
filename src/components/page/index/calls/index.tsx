import styles from "./index.module.scss"
import ContentLayout from "@/components/layoutcomp"
import { useLangs } from '@/common/utils/langs'
import HalfCircle from '@/components/halfcircle'
import CallsSwiper from '@/components/page/index/callsSwiper'

interface PropsTypes {

}

export default function Calls(props: PropsTypes) {
    return (
        <div className={styles.calls}>
            <HalfCircle dir="left"/>
            <ContentLayout>
                <div className={styles.calls_text_container}>
                    <div className={styles.calls_text}>
                        <div className={styles.title}>{ useLangs('homepage', 'calls_title') }</div>
                        <div className={styles.desc} dangerouslySetInnerHTML={{
                            __html: useLangs('homepage', 'calls_text')
                        }}>
                        </div>
                    </div>
                    <div className={styles.calls_swiper}>
                        <CallsSwiper />
                    </div>
                </div>
            </ContentLayout>
        </div>
    )
}