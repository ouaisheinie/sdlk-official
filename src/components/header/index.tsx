import { useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ContentLayout from "@/components/layoutcomp"
import { useLangs } from '@/common/utils/langs'
import { imageLoader } from '@/common/imgloader'

interface HeaderProps {
    backgroundColor?: string
    hoverBgColor?: string
}

export default function Header(props: HeaderProps) {
    const { backgroundColor, hoverBgColor = "rgba(221, 221, 221,.2)" } = props
    
    
    const [bgColor1, setBgColor1] = useState<string>('transparent')
    const [bgColor2, setBgColor2] = useState<string>('transparent')
    const [bgColor3, setBgColor3] = useState<string>('transparent')


	return (
		<div className={styles.header} style={{ 
            backgroundColor: backgroundColor ? backgroundColor : '#FF8B08'
        }}>
			<ContentLayout>
				<div className={styles.logo_navbar}>
					<div className={styles.logo}>
						<Image objectFit='contain' layout="fill" src="https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/starlinke-whitebg.png" alt="STARLINKE"/>
					</div>
					<div className={styles.navbar}>
						<div className={styles.navItem} 
                            style={{
                                backgroundColor: bgColor1
                            }} 
                            onMouseEnter={e => setBgColor1(hoverBgColor)} 
                            onMouseLeave={e => setBgColor1('transparent')}
                        >
							<Link href="/">{ useLangs('common', 'aboutus') }</Link>
						</div>
						<div className={styles.navItem}
                            style={{
                                backgroundColor: bgColor2
                            }} 
                            onMouseEnter={e => setBgColor2(hoverBgColor)} 
                            onMouseLeave={e => setBgColor2('transparent')}
                        >
							<Link href="/ourbrand">{ useLangs('common', 'abond') }</Link>
						</div>
						<div className={styles.navItem}
                            style={{
                                backgroundColor: bgColor3
                            }} 
                            onMouseEnter={e => setBgColor3(hoverBgColor)} 
                            onMouseLeave={e => setBgColor3('transparent')}
                        >
							<Link href="/joinus">{ useLangs('common', 'joinus') }</Link>
						</div>
					</div>
				</div>
			</ContentLayout>
		</div>
	)
}
