import styles from "./index.module.scss"
import { useLangs, useIsMobile } from '@/common/utils/langs'
import HalfCircle from '@/components/halfcircle'
import ContentLayout from "@/components/layoutcomp"
import CallsSwiper from '@/components/page/index/callsSwiper'

interface PropsTypes {

}

const Calls: React.FC<PropsTypes> = props => {
    const isMobile = useIsMobile()
    const val1 = useLangs('homepage', 'calls_title')
    const val2 = useLangs('homepage', 'calls_text')
    const val3 = useLangs('homepage', 'calls_title')
    return (
        <div className={styles.calls}>
            {
                !isMobile && <HalfCircle dir="left" />
            }
            {
                !isMobile ? <ContentLayout>
                <div className={styles.calls_text_container}>
                    <div className={styles.calls_text}>
                        <div className={styles.title_desc_container}>
                            <div className={styles.title}>{ val1 }</div>
                            <div className={styles.desc} dangerouslySetInnerHTML={{
                                __html: val2
                            }}></div>
                        </div>
                    </div>
                    <div className={styles.calls_swiper}>
                        <CallsSwiper />
                    </div>
                </div>
            </ContentLayout> : <div className={styles.calls_text_container}>
                <div className={styles.calls_text}>
                    <div className={styles.title_desc_container}>
                        <div className={styles.title}>{ val3 }</div>
                    </div>
                </div>
                <div className={styles.calls_swiper}>
                    <CallsSwiper />
                </div>
            </div>
            }
        </div>
    )
}

export default Calls