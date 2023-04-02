import { useState, useContext } from "react"
import { useLangs } from '@/common/utils/langs'
import Header from '@/components/header'
import TopBanner from '@/components/topbanner'
import Calls from '@/components/page/index/calls'

export default function Home() {
	return (
		<>
            <Header />
            <TopBanner />
            <Calls />
		</>
	)
}
