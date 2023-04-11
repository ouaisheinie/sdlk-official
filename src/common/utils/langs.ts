import { useEffect, useContext } from "react"
import { C_Content } from "@/pages/_app"
import { IndexProvider } from '@/pages/index'
import { BrandProvider } from '@/pages/ourbrand'

interface langInterface {
    langdata?: any
    lang: string
    setLang?: any
}
interface IndexInterface {
	isMobile: boolean
}

// 获取语言的公共hooks
export const useLangs = (keyname1: string, keyname2: string): string =>  {
    const { langdata, lang } = useContext<langInterface>(C_Content)
    return langdata[lang][keyname1][keyname2]
}

export const useInjectLang = (langCode: string): void => {
    const { lang, setLang } = useContext(C_Content)
    if (langCode && lang !== langCode) {
        setLang(langCode)
    }
}

export const useIsMobile = (): boolean => {
    const isMobile = useContext<IndexInterface>(IndexProvider).isMobile
    return isMobile
}

export const useBrandMobile = (): boolean => {
    const isMobile = useContext<IndexInterface>(BrandProvider).isMobile
    return isMobile
}