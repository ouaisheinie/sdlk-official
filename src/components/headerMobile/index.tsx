import { useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useLangs } from '@/common/utils/langs'

interface HeaderMobileProps {
    resolvedUrl: string
    backgroundColor?: string
    hoverBgColor?: string
}

const HeaderMobile: React.FC<HeaderMobileProps> = props => {
    const { resolvedUrl } = props
    const { backgroundColor, hoverBgColor = "rgba(221, 221, 221,.2)" } = props

    const [folding, setFolding] = useState<boolean>(true)

    const handleOpenMenu: () => void = () => {
        setFolding(false)
    }

    const handleCloseMenu: () => void = () => {
        setFolding(true)
    }

    const tab1 = useLangs('common', 'aboutus')
    const tab2 = useLangs('common', 'abond')
    const tab3 = useLangs('common', 'joinus')

    return (
        <div className={styles.header_container} style={{ 
            backgroundColor: backgroundColor ? backgroundColor : '#FF8B08'
        }}>
            <Image className={styles.logo} src="https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starlinke-whitebg.png" alt="STARLINKE" width={150} height={36}/>
            {
                folding 
                ? <svg className={styles.icon} onClick={handleOpenMenu} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2624" width="32" height="32"><path d="M192.662463 640.429021l637.429711 0 0 70.827115-637.429711 0 0-70.827115Z" fill="#ffffff" p-id="2625"></path><path d="M192.662463 446.99345l637.429711 0 0 70.825069-637.429711 0 0-70.825069Z" fill="#ffffff" p-id="2626"></path><path d="M192.662463 256.658498l637.429711 0 0 70.825069-637.429711 0 0-70.825069Z" fill="#ffffff" p-id="2627"></path></svg>
                : <svg className={styles.icon} onClick={handleCloseMenu} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3632" width="32" height="32"><path d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" fill="#ffffff" p-id="3633"></path></svg>
            }
            {
                !folding ? <div className={styles.menu}>
                    <div className={styles.open_menu}>
                        <Image className={styles.logo} src="https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starlinke-whitebg.png" alt="STARLINKE" width={150} height={36}/>
                        <svg className={styles.icon} onClick={handleCloseMenu} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3632" width="32" height="32"><path d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" fill="#ffffff" p-id="3633"></path></svg>
                    </div>
                    <div className={styles.menuItem}>
                        <Link href="/">
                            { tab1 }
                            {
                                resolvedUrl !== '/' && <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4774" width="24" height="24"><path d="M512 42.666667C252.8 42.666667 42.666667 252.8 42.666667 512s210.133333 469.333333 469.333333 469.333333 469.333333-210.133333 469.333333-469.333333S771.2 42.666667 512 42.666667zM266.496 522.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h281.002666l-119.168-119.168a42.666667 42.666667 0 0 1 60.330667-60.330667l192 192a42.581333 42.581333 0 0 1 12.544 30.08l-0.042667 0.085334v0.128a42.538667 42.538667 0 0 1-12.544 30.08l-191.957333 192a42.666667 42.666667 0 0 1-60.330667-60.373334l119.168-119.168H309.162667a42.666667 42.666667 0 0 1-42.666667-42.666666z" fill="#ffffff" fillOpacity={.85} p-id="4775"></path></svg>
                            }
                        </Link>
                    </div>
                    <div className={styles.menuItem} style={{ margin: '80px 0' }}>
                        <Link href="/ourbrand">
                            { tab2 }
                            {
                                resolvedUrl !== '/ourbrand' && <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4774" width="24" height="24"><path d="M512 42.666667C252.8 42.666667 42.666667 252.8 42.666667 512s210.133333 469.333333 469.333333 469.333333 469.333333-210.133333 469.333333-469.333333S771.2 42.666667 512 42.666667zM266.496 522.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h281.002666l-119.168-119.168a42.666667 42.666667 0 0 1 60.330667-60.330667l192 192a42.581333 42.581333 0 0 1 12.544 30.08l-0.042667 0.085334v0.128a42.538667 42.538667 0 0 1-12.544 30.08l-191.957333 192a42.666667 42.666667 0 0 1-60.330667-60.373334l119.168-119.168H309.162667a42.666667 42.666667 0 0 1-42.666667-42.666666z" fill="#ffffff" fillOpacity={.85} p-id="4775"></path></svg>
                            }
                        </Link>
                    </div>
                    <div className={styles.menuItem}>
                        <Link href="/joinus">
                            { tab3 }
                            {
                                resolvedUrl !== '/joinus' && <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4774" width="24" height="24"><path d="M512 42.666667C252.8 42.666667 42.666667 252.8 42.666667 512s210.133333 469.333333 469.333333 469.333333 469.333333-210.133333 469.333333-469.333333S771.2 42.666667 512 42.666667zM266.496 522.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h281.002666l-119.168-119.168a42.666667 42.666667 0 0 1 60.330667-60.330667l192 192a42.581333 42.581333 0 0 1 12.544 30.08l-0.042667 0.085334v0.128a42.538667 42.538667 0 0 1-12.544 30.08l-191.957333 192a42.666667 42.666667 0 0 1-60.330667-60.373334l119.168-119.168H309.162667a42.666667 42.666667 0 0 1-42.666667-42.666666z" fill="#ffffff" fillOpacity={.85} p-id="4775"></path></svg>
                            }
                        </Link>
                    </div>
                </div> : null
            }
        </div>
    )
}

export default HeaderMobile