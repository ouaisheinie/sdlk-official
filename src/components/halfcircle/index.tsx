import { ReactNode, useState } from "react"
import styles from "./index.module.scss"
import { useLangs } from '@/common/utils/langs'

type Circle_Direction = 'left' | 'right'

interface propsTypes {
    children?: ReactNode,
    style_obj?: object,
    dir: Circle_Direction
}

export default function TopBanner(props: propsTypes) {
	return (
        <div className={styles.circle_container}>
            {
                props.dir === 'left' 
                ? <div className={styles.circle_div_left}></div>
                : <div className={styles.circle_div_right}></div>
            }
        </div>
	)
}
