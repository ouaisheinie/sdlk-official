import { createContext, ReactNode, useContext } from "react";
import Header from '@/components/header'
import HeaderMobile from '@/components/headerMobile'
import TopBanner from '@/components/topbanner'
import Calls from '@/components/page/index/calls'
import Values from '@/components/page/index/values'
import MileStone from '@/components/page/index/milestone'
import Footer from '@/components/footer'
import { getCookie, UserAgent } from '@/common/utils/index'
import { useInjectLang } from '@/common/utils/langs'

interface HomeProps {
	cookielang: string
    isMobile: boolean
	resolvedUrl: string
}

interface IndexInterface {
	isMobile: boolean
}

export const IndexProvider = createContext<IndexInterface>({} as IndexInterface)

export default function Home(props: HomeProps ): ReactNode {
    const { cookielang, isMobile, resolvedUrl } = props
	useInjectLang(cookielang)

	return (
		<IndexProvider.Provider value={{ isMobile }}>
			<div style={{ background: '#f5f5f5' }}>
				{
					!isMobile ? <Header /> : <HeaderMobile resolvedUrl={resolvedUrl}/>
				}
				<TopBanner />
				<Calls />
				<Values />
				<MileStone />
				<Footer />
			</div>
		</IndexProvider.Provider>
	)
}

export async function getServerSideProps (context: any) {
    const cookielang = context.req.cookies.cookie_lang || 'cn'
	const resolvedUrl = context.resolvedUrl
    const isMobile = UserAgent(context)
    return {
        props: {
            cookielang,
            isMobile,
            resolvedUrl
        }
	}
}
