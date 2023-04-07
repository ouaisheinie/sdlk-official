import Header from '@/components/header'
import TopBanner from '@/components/topbanner'
import Calls from '@/components/page/index/calls'
import Values from '@/components/page/index/values'
import MileStone from '@/components/page/index/milestone'
import Footer from '@/components/footer'
import { getCookie } from '@/common/utils/index'
import { C_Content } from "@/pages/_app"
import { useContext } from "react"
interface HomeProps {
	cookielang: string
}

export default function Home(props: HomeProps) {
	const { langdata, lang, setLang } = useContext(C_Content)
	setLang(props.cookielang)
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
	const cookielang = getCookie('cookie_lang', context)
	return {
		props: {
			cookielang
		}
	}
}