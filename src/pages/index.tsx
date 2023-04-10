import { JSXElementConstructor, ReactElement, ReactNode, useContext } from "react";
import Header from '@/components/header'
import HeaderMobild from '@/components/headerMobile'
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
}

export default function Home(props: HomeProps ): ReactNode {
    const { cookielang, isMobile } = props
	useInjectLang(cookielang)

	return (
		<div style={{ background: '#f5f5f5' }}>
            {
                !isMobile ? <Header /> : <HeaderMobild />
            }
            {/* <TopBanner />
            <Calls />
			<Values />
			<MileStone />
			<Footer /> */}
		</div>
	)
}

export async function getServerSideProps(context: any) {
	const cookielang = getCookie('cookie_lang', context) || 'cn'
    const isMobile = UserAgent(context)
	return {
		props: {
			cookielang,
            isMobile
		}
	}
}