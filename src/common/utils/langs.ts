import { useEffect, useContext } from "react"
import { C_Content } from "@/pages/_app"

interface langInterface {
    langdata?: any
    lang: string
    setLang?: any
}

// 获取语言的公共hooks
export const useLangs = (keyname1: string, keyname2: string): string =>  {
    const { langdata, lang, setLang } = useContext<langInterface>(C_Content)
    return langdata[lang][keyname1][keyname2]
}