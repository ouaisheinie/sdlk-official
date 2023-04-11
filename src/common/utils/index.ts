import { getSelectorsByUserAgent } from 'react-device-detect';

export const getCookie = (cname: string, context: any): string => {
	var name = cname + "="
    var ca: string[]
    if (context.req.headers.cookie) {
        ca = context.req.headers.cookies.split(';')
        for (var i = 0; i< ca.length; i++) {
            var c = ca[i].trim()
            if (c.indexOf(name)==0) return c.substring(name.length, c.length)
        }
    }
	return ""
}

export const setCookie = (key: string, value: string, day: number): void => {
    var cookie=key + '=' + encodeURIComponent(value)
    if(day > 0){
         var date = new Date()
         date.setDate(date.getDate() + day)
         cookie+=';expires=' + date
    }
    document.cookie=cookie
}

export const UserAgent = (context: any): boolean => {
    const { req } = context
    // const symbolKey: string | undefined | symbol = Reflect.ownKeys(context.req).find(key => key.toString() === 'Symbol(kHeaders)')
    // const userAgent = context.req[symbolKey as string]['user-agent']
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    const { isMobile } = getSelectorsByUserAgent(userAgent)
    return isMobile
}
