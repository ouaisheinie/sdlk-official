import styles from './index.module.scss'
import ContentLayout from "@/components/layoutcomp"
import { StageProps } from '../../index'

interface PaginationProps {
    stageData: StageProps[]
}



const Pagination: React.FC<PaginationProps> = props => {

    return (
        <ContentLayout>
            <div className={styles.pagination_container}>
                <div className={styles.pagination_line}>
                    
                </div>
            </div>
        </ContentLayout>
    )
}

export default Pagination