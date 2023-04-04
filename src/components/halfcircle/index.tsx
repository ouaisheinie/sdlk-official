/**
 * 需要父容器设置position: relative;
 */

import { ReactNode } from "react"
import styles from "./index.module.scss"

type Circle_Direction = 'left' | 'right'
interface PropsTypes {
    children?: ReactNode,
    style_obj?: object,
    dir: Circle_Direction
    top?: number
}

const HalfCircle: React.FC<PropsTypes> = props => {
    return (
        <div className={`${styles.circle_container} ${props.dir === 'left' ? '' : styles.right_position}`} style={{ top: props.top ? - props.top : -210 }}>
            {
                props.dir === 'left' 
                ? <div className={styles.circle_div_left}></div>
                : <div className={styles.circle_div_right}></div>
            }
        </div>
	)
}

export default HalfCircle