import { useState, useEffect } from 'react'
import styles from './index.module.scss'

interface PropsTypes {
    imageList: string[],
    slideDir: string,
    marginbottom?: number
}

export default function Marquee(props: PropsTypes) {
    const [instance, setInstance] = useState<number>(0)

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>

        if (props.slideDir === 'left') {
            timer = setInterval(() => {
                if (instance >= 1100) {
                    setInstance(0)
                } else setInstance(instance + 2)
            }, 16)
        } else if (props.slideDir === 'right') {

            timer = setInterval(() => {
                if (instance <= 0) {
                    setInstance(1100)
                } else setInstance(instance - 2)
            }, 16)
        }
        return () => clearInterval(timer)
    }, [instance])

    return (
        <div className={styles.marquee_container} style={{ left: `-${instance}px`, marginBottom: props.marginbottom + 'px' }}>
            {
                props.imageList.map((item, index) => <picture key={index} className={styles.image_container}>
                    <img className={styles.img} src={item} alt="STARLINKE" />
                </picture>)
            }
        </div>
    )
}