import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'
import { lang_cn } from "@/common/lang/cn"
import { lang_en } from "@/common/lang/en"
import { LangDataType } from "@/common/interface"
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const langdata: LangDataType = {
	cn: lang_cn,
	en: lang_en
}

interface langInterface {
    langdata?: LangDataType
    lang: string
    setLang?: any
}

export const C_Content = createContext<langInterface>({} as langInterface)

export default function App({ Component, pageProps }: AppProps) {
	const [lang, setLang] = useState<string>('cn')

	return <C_Content.Provider value={{ langdata, lang, setLang }}>
		<Component {...pageProps} />
	</C_Content.Provider>
}