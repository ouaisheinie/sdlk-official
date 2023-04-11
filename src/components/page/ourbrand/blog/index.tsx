import { ReactNode } from 'react'
import styles from './index.module.scss'
import ContentLayout from "@/components/layoutcomp"
import { StringData } from '@/pages/ourbrand' 
interface BlogsProps {
    blogData: StringData[]
    blog_title: string
}

const Blogs: React.FC<BlogsProps> = props => {
    const { blogData, blog_title } = props
    return (
        <ContentLayout style_obj={{ paddingRight: 0 }}>
            <div className={styles.title}>{ blog_title }</div>
            <div className={styles.blogs}>
                {
                    blogData.map((item: StringData, index: number): ReactNode => {
                        return <div key={index} className={styles.item}>
                            <picture>
                                <img className={styles.img} src={item.img_url} alt="VIVAIA" />
                            </picture>
                            <div className={styles.textContent}>
                                <h3>{ item.title }</h3>
                                <p>{ item.desc }</p>
                            </div>
                            <a className={styles.skip} href={item.skip_url}>
                                { item.view_more }
                                <svg className={`icon ${styles.arrowRight}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2752" width="18" height="18"><path d="M557.397333 167.204571l293.059048 293.059048L902.192762 512l-51.712 51.712-293.059048 293.083429-51.736381-51.712L762.148571 548.571429H121.904762v-73.142858h640.243809L505.660952 218.940952l51.736381-51.736381z" p-id="2753" fill="#182F39"></path></svg>
                            </a>
                        </div>
                    })
                }
            </div>
        </ContentLayout>
    )
}

export default Blogs