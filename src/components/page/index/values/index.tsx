import styles from './index.module.scss'
import { useLangs } from '@/common/utils/langs'
import { useState } from 'react'
import HalfCircle from '@/components/halfcircle'
import ContentLayout from "@/components/layoutcomp"
import ValueContent from './valuesContent'

interface PropsTypes {

}

interface ValuesProps {
    tab_name: string
    id: number
    image_src: string
    content_title: string
    content_desc: string
}

const Values: React.FC<PropsTypes> = props => {
    const tabdata: ValuesProps[] = [
        {
            tab_name: useLangs('homepage', 'tab1_title'),
            id: 1,
            image_src: "https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/chengxin.jpg",
            content_title: useLangs('homepage', 'tab1_title'),
            content_desc: useLangs('homepage', 'tab1_desc')
        },
        {
            tab_name: useLangs('homepage', 'tab2_title'),
            id: 2,
            image_src: "https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/xiaofeizhe.jpg",
            content_title: useLangs('homepage', 'tab2_title'),
            content_desc: useLangs('homepage', 'tab2_desc')
        },
        {
            tab_name: useLangs('homepage', 'tab3_title'),
            id: 3,
            image_src: "https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/tongdao.jpg",
            content_title: useLangs('homepage', 'tab3_title'),
            content_desc: useLangs('homepage', 'tab3_desc')
        },
        {
            tab_name: useLangs('homepage', 'tab4_title'),
            id: 4,
            image_src: "https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/xuexi.jpg",
            content_title: useLangs('homepage', 'tab4_title'),
            content_desc: useLangs('homepage', 'tab4_desc') 
        },
        {
            tab_name: useLangs('homepage', 'tab5_title'),
            id: 5,
            image_src: "https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/benfen.jpg",
            content_title: useLangs('homepage', 'tab5_title'),
            content_desc: useLangs('homepage', 'tab5_desc')
        }
    ]

    const [selected_num, setSelected_num] = useState<number>(0)

    return (
        <div className={styles.container}>
            <HalfCircle dir="right" />
            <ContentLayout>
                <h3 className={styles.title}>{ useLangs('homepage', 'values_title') }</h3>
                <div className={styles.tabline_container}>
                    <div className={styles.tabline}>
                        {
                            tabdata.map((item, index) => {
                                if (index === selected_num) return <div className={styles.tabItem} key={index}>
                                    <div className={`${styles.tab_text} ${styles.tab_selected}`}>{ item.tab_name }</div>
                                </div>
                                else return <div className={styles.tabItem} onClick={() => setSelected_num(item.id - 1)} key={index}>
                                    <div className={styles.tab_text}>{item.tab_name }</div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className={styles.contant_container}>
                    <ValueContent key={tabdata[selected_num].id} img_src={tabdata[selected_num].image_src} title={tabdata[selected_num].content_title} desc={tabdata[selected_num].content_desc}/>
                </div>
            </ContentLayout>
        </div>
    )
}

export default Values