import { createContext, ReactNode } from "react";
import { getCookie, UserAgent } from '@/common/utils/index'
import { useInjectLang, useJoinusMobile } from '@/common/utils/langs'
import styles from './styles/joinus.module.scss'
import Header from '@/components/header'
import HeaderMobile from "@/components/headerMobile";
import Footer from '@/components/footer'
import BlockItem from '@/components/page/joinus/blockitem'
import ContentLayout from "@/components/layoutcomp"

interface JoinusProps {
	cookielang: string
    resolvedUrl: string
    isMobile: boolean
}

export interface ItemDataProps {
    title: string
    icon: string
    job_desc: string[]
    desc: string
    btn_text: string
    skip_url: string
}

interface IndexInterface {
	isMobile: boolean
}

export const JoinusProvider = createContext<IndexInterface>({} as IndexInterface)

export default function Joinus(props: JoinusProps): ReactNode {
    useInjectLang(props.cookielang)

    const items: ItemDataProps[] = [
        {
            title: 'Senior Key Account Director',
            icon: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/data_investigation.png',
            job_desc: [
                'United States',
                'Full Time',
                'Director'
            ],
            desc: `1. You will be responsible for the VIVAIA wholesale strategy, business development and business results in all channels, such as Fashion Specialty, Department Store and General Footwear focused channels
            <br />
            2. Source and on-board retailers, building a strong sales lead focused on mid- and long-term strategic plan, coordinate and activate all brand departments to execute relevant coop and sales activities to maximize success and create an exponential growth path.`,
            btn_text: 'Contact Us',
            skip_url: 'mailto:contact@starlinke.com'
        },
        {
            title: "海外内容运营",
            icon: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/data_investigation.png',
            job_desc: [
                '深圳',
                '正式',
                '运营'
            ],
            desc: `1、负责公司官网、产品和运营推广相关的文案撰写；
            <br />
            2、负责公司产品渠道推广，广告文案的策划输出。完成有吸引力的品牌宣传和媒体文案。熟悉对英文新闻稿的纂写；`,
            btn_text: '投递',
            skip_url: 'mailto:contact@starlinke.com'
        },
        {
            title: "广告投放",
            icon: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/data_i2.png',
            job_desc: [
                '深圳',
                '正式',
                '市场'
            ],
            desc: `1. 负责产品的Facebook/谷歌广告平台投放，及针对不同产品制定营销策略。
            <br />
            2. 执行每日广告投放计划，实时监控广告后台数据进行广告优化，定期检测广告投放效果、分析并整理广告数据，优化广告投放策略。`,
            btn_text: '投递',
            skip_url: 'mailto:contact@starlinke.com'
        },
        {
            title: "产品经理",
            icon: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/data_i3.png',
            job_desc: [
                '深圳',
                '正式',
                '产品'
            ],
            desc: `1、根据品牌定位、品类经营目标进行商品企划，包括规划产品结构、细分品类计划、商品矩阵、价格策略等，为品类经营目标提供有效商品支撑。
            <br />
            2、市场分析、进行消费者需求洞察、竞争市场分析，定期输出行业分析报告。
            <br />
            3、对市场上同类品牌的定价、风格、产品结构、产品特点、上架节奏、畅销货品、销售业绩等进行搜集分析，定期输出竞争对手分析报告。；`,
            btn_text: '投递',
            skip_url: 'mailto:contact@starlinke.com'
        },
        {
            title: "客服",
            icon: 'https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/data_i4.png',
            job_desc: [
                '深圳',
                '正式',
                '客服'
            ],
            desc: `1、根据独立站售后政策迅速准确地回复客户邮件，解答客户问题，为国外客户提供优质服务；
            <br />
            2、售前支持：解答产品问题，物流问题，提高客户购买意愿，促成订单；`,
            btn_text: '投递',
            skip_url: 'mailto:contact@starlinke.com'
        },
         
    ]

    return (
        <JoinusProvider.Provider value={{ isMobile: props.isMobile }}>
            <>
                {
                    !props.isMobile ? <Header /> : <HeaderMobile resolvedUrl={"/joinus"}/>
                }
                <div className={styles.topBanner}>
                    <picture>
                        <video style={{ width: '100%' }} src="https://cdnimg.vivaia.com/SLK/video/Banner/20230403_5400/Fanka-video-m.mp4" controls={false} autoPlay muted>
                            您的浏览器不支持 video 标签。
                        </video>
                        <div className={styles.topBannerText}>
                            <h2 className={styles.title}>加入我们</h2>
                            <p className={styles.desc}>创造不断进步</p>
                        </div>
                    </picture>
                </div>
                <ContentLayout>
                    <div className={styles.block_containers}>
                        {
                            items.map((item, index) => {
                                return <BlockItem key={index} data={item} number={index} />
                            })
                        }
                    </div>
                </ContentLayout>
                <div style={{ marginTop: 60 }}>
                    <Footer />
                </div>
            </>
        </JoinusProvider.Provider>
    )
}

export async function getServerSideProps(context: any) {
	const cookielang = getCookie('cookie_lang', context) || 'cn'
    const resolvedUrl = context.resolvedUrl
    console.log(useJoinusMobile)
    const isMobile = UserAgent(context)
    
	return {
		props: {
			cookielang,
            resolvedUrl,
            isMobile
		}
	}
}