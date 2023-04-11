import styles from "./index.module.scss"
import { useLangs, useIsMobile } from '@/common/utils/langs'
import HalfCircle from '@/components/halfcircle'
import ContentLayout from "@/components/layoutcomp"
import CallsSwiper from '@/components/page/index/callsSwiper'

interface PropsTypes {

}

const Calls: React.FC<PropsTypes> = props => {
    const isMobile = useIsMobile()
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
                            <div className={styles.title}>{ useLangs('homepage', 'calls_title') }</div>
                            <div className={styles.desc} dangerouslySetInnerHTML={{
                                __html: useLangs('homepage', 'calls_text')
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
                        <div className={styles.title}>{ useLangs('homepage', 'calls_title') }</div>
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