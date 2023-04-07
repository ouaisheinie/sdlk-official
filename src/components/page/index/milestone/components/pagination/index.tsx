import styles from './index.module.scss'
import ContentLayout from "@/components/layoutcomp"
import { StageProps } from '../../index'

interface PaginationProps {
    stageData: StageProps[]
    current: number
}



const Pagination: React.FC<PaginationProps> = props => {
    return (
        <ContentLayout overflow='hidden'>
            <div className={styles.pagination_container}>
                <div className={styles.pagination_line} style={{ left: -props.current * 101 + 'px' }}>
                    {
                        props.stageData.map((item, index) => {
                            return <div key={index} className={styles.pagination_item}>
                                <div className={styles.normal_style} style={{ backgroundColor: item.pagination_color }}></div>
                                {
                                    index === props.current ? <div className={styles.current_style} style={{ backgroundColor: item.pagination_color }}>
                                        <picture>
                                            <img className={styles.current_fillimg} src={item.pagination_img} alt="STARLINKE" />
                                        </picture>
                                    </div> : null
                                }
                            </div>
                        })
                    }
                </div>
            </div>
        </ContentLayout>
    )
}

export default Pagination