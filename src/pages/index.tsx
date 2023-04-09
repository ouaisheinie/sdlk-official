import { ReactNode, useContext } from "react";
import Header from '@/components/header'
import TopBanner from '@/components/topbanner'
import Calls from '@/components/page/index/calls'
import Values from '@/components/page/index/values'
import MileStone from '@/components/page/index/milestone'
import Footer from '@/components/footer'
import { getCookie } from '@/common/utils/index'
import { useInjectLang } from '@/common/utils/langs'

interface HomeProps {
	cookielang: string
}

export default function Home(props: HomeProps ): ReactNode {
	useInjectLang(props.cookielang)

	return (
		<div style={{ background: '#f5f5f5' }}>
            <Header />
            <TopBanner />
            <Calls />
			<Values />
			<MileStone />
			<Footer />
		</div>
	)
}

export async function getServerSideProps(context: any) {
	const cookielang = getCookie('cookie_lang', context) || 'cn'
	return {
		props: {
			cookielang
		}
	}
}