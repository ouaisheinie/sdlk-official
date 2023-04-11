import { ReactNode, useState } from "react"
import styles from "./index.module.scss"
import { useLangs, useIsMobile } from '@/common/utils/langs'

interface PropsTypes {
    children?: ReactNode
}

export default function TopBanner(props: PropsTypes) {
    const isMobild = useIsMobile()
	return (
		<div className={styles.banner}>
            <video style={{ width: '100%' }} className={styles.img} src={isMobild ? 'https://cdnimg.vivaia.com/SLK/video/Banner/20230403_5400/starlinke-m.mp4' : 'https://cdnimg.vivaia.com/SLK/video/Banner/20230403_5400/starlinke-pc.mp4'} controls={false} autoPlay muted>
                您的浏览器不支持 video 标签。
            </video>
            <div className={styles.text}>
                <p className={styles.will}>{ useLangs('homepage', 'will') }</p>
                <p className={styles.title}>{ useLangs('homepage', 'topbanner_title') }</p>
            </div>
		</div>
	)
}
