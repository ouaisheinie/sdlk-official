import styles from './index.module.scss'
import Image from 'next/image'
import { useState } from 'react'

interface HeaderMobileProps {

}

const HeaderMobile: React.FC<HeaderMobileProps> = props => {

    const [folding, setFolding] = useState<boolean>(true)

    const handleOpenMenu: () => void = () => {
        setFolding(false)
    }

    const handleCloseMenu: () => void = () => {
        setFolding(true)
    }

    return (
        <div className={styles.header_container}>
            <Image className={styles.logo} src="https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starlinke-whitebg.png" alt="STARLINKE" width={150} height={36}/>
            {
                folding 
                ? <svg className={styles.icon} onClick={handleOpenMenu} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2624" width="32" height="32"><path d="M192.662463 640.429021l637.429711 0 0 70.827115-637.429711 0 0-70.827115Z" fill="#ffffff" p-id="2625"></path><path d="M192.662463 446.99345l637.429711 0 0 70.825069-637.429711 0 0-70.825069Z" fill="#ffffff" p-id="2626"></path><path d="M192.662463 256.658498l637.429711 0 0 70.825069-637.429711 0 0-70.825069Z" fill="#ffffff" p-id="2627"></path></svg>
                : <svg className={styles.icon} onClick={handleCloseMenu} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3632" width="32" height="32"><path d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" fill="#ffffff" p-id="3633"></path></svg>
            }
            {
                folding ? null : <div className={styles.menu}>
                    
                </div>
            }
        </div>
    )
}

export default HeaderMobile