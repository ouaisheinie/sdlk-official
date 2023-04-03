import { ReactNode, useState } from "react"
import styles from "./index.module.scss"
import { useLangs } from '@/common/utils/langs'

interface PropsTypes {
    children?: ReactNode
}

export default function TopBanner(props: PropsTypes) {
	return (
		<div className={styles.banner}>
            <picture>
                <img className={styles.img} src="https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/topBanner.png" alt="STARLINK" />
            </picture>
            <p className={styles.title}>{ useLangs('homepage', 'topbanner_title') }</p>
		</div>
	)
}
