import { useState, useEffect } from "react"
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ContentLayout from "@/components/layoutcomp"
import { useLangs } from '@/common/utils/langs'

export default function Header(props) {
	return (
		<>
			<div className={styles.header}>
				<ContentLayout>
					<div className={styles.logo_navbar}>
						<div className={styles.logo}>
							<Image objectFit='contain' layout="fill" object-fit="contain" src="https://cdnimg.vivaia.com/VA/image/Banner/20230331_5378/sdlk-logo.png" alt="STARLINKE"/>
						</div>
						<div className={styles.navbar}>
							<div className={styles.navItem}>
								<Link href="/">{ useLangs('common', 'aboutus') }</Link>
							</div>
							<div className={styles.navItem}>
								<Link href="/ourbrand">{ useLangs('common', 'abond') }</Link>
							</div>
							<div className={styles.navItem}>
								<Link href="/joinus">{ useLangs('common', 'joinus') }</Link>
							</div>
						</div>
					</div>
				</ContentLayout>
			</div>
		</>
	)
}
