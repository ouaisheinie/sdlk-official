/* 多语言文案 */
export interface LangType {
    [propName: string]: {
        [propName: string]: string
    }
}
export interface LangDataType {
    [propName: string]: LangType
}