import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext } from 'react'
import lang_cn from "@/common/lang/cn"
import lang_en from "@/common/lang/en"
const langdata = {
	cn: lang_cn,
	en: lang_en
}

export const C_Content = createContext(null)

export default function App({ Component, pageProps }: AppProps) {
	return <C_Content.Provider value={{ langdata, lang: 'cn' }}>
		<Component {...pageProps} />
	</C_Content.Provider>
}
