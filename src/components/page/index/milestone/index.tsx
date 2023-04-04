import styles from './index.module.scss'
import HalfCircle from '@/components/halfcircle'
import ContentLayout from "@/components/layoutcomp"

interface MileStoneProps {

}

const MileStone: React.FC<MileStoneProps> = props => {
    return (
        <div className={styles.milestone_container}>
            <HalfCircle dir="left" top={270}/>
            <ContentLayout>
                <h3 className={styles.title}>里程碑</h3>
                <p className={styles.desc}>大事记</p>
                <div className={styles.milestone_swiper}></div>

            </ContentLayout>
        </div>
    )
}

export default MileStone