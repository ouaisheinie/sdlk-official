export const getCookie = (cname: string, context: any): string => {
	var name = cname + "="
	var ca: string[] = context.req.headers.cookie.split(';')
	for (var i = 0; i< ca.length; i++) {
		var c = ca[i].trim()
		if (c.indexOf(name)==0) return c.substring(name.length, c.length)
	}
	return ""
}

export const setCookie = (key: string,value: string,day: number): void => {
    var cookie=key + '=' + encodeURIComponent(value)
    if(day > 0){
         var date = new Date()
         date.setDate(date.getDate() + day)
         cookie+=';expires=' + date
    }
    document.cookie=cookie
}