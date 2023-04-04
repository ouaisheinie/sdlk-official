import Header from '@/components/header'
import TopBanner from '@/components/topbanner'
import Calls from '@/components/page/index/calls'
import Values from '@/components/page/index/values'
import MileStone from '@/components/page/index/milestone'

export default function Home() {
	return (
		<div style={{ background: '#f5f5f5' }}>
            <Header />
            <TopBanner />
            <Calls />
			<Values />
			<MileStone />
		</div>
	)
}
