import styles from './index.module.scss'
import ContentLayout from "@/components/layoutcomp"

interface BlogsProps {
    
}

const Blogs: React.FC<BlogsProps> = props => {
    return (
        <ContentLayout>
            <div className={styles.blogs}>
                <div className={styles.item}>
                    <picture>
                        <img src="https://cdnimg.vivaia.com/SLK/image/Banner/20230403_5400/v-tester.jpg" alt="VIVAIA" />
                    </picture>
                    <div className={styles.textContent}>
                        <h3>Vtester Soft Launching Our New Collection</h3>
                        <p>Since March 2021, we launched ‘Vtester’ free trial campaign by recruiting 500 Vtesters worldwide trying to encourage more public to participate in sustainable development and hearing suggestions from them to improve the products</p>
                    </div>
                    <a>
                        View More
                        <svg className={styles.arrowRight} t="1681018524646" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2752" width="18" height="18"><path d="M557.397333 167.204571l293.059048 293.059048L902.192762 512l-51.712 51.712-293.059048 293.083429-51.736381-51.712L762.148571 548.571429H121.904762v-73.142858h640.243809L505.660952 218.940952l51.736381-51.736381z" p-id="2753" fill="#182F39"></path></svg>
                    </a>
                </div>
            </div>
        </ContentLayout>
    )
}

export default Blogs