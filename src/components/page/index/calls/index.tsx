import HalfCircle from '@/components/halfcircle'
import styles from "./index.module.scss"
import ContentLayout from "@/components/layoutcomp"

interface propsTypes {

}

export default function Calls(props: propsTypes) {
    return (
        <div className={styles.calls}>
            <HalfCircle dir="left"/>
            <ContentLayout>
                <div className={styles.calls_text_container}>
                    <div className={styles.calls_text}>
                        <div className={styles.title}>使命</div>
                        <div className={styles.desc}>
                        对消费者，提供卓越的产品和服务；
                        <br />
                        对员工，创造不断进步，并使员工感到兴奋和自豪的工作氛围;
                        <br />
                        对商业伙伴，提供公平合理、对等互利的合作平台；
                        <br />
                        对股东，使其投入的股本有高于社会平均收益的回报。
                        </div>
                    </div>
                    <div className={styles.calls_swiper}>swiper</div>
                </div>
            </ContentLayout>
        </div>
    )
}