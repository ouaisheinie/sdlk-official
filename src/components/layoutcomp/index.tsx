import { ReactNode, useState } from "react"
import styles from "./index.module.scss"

export default function contentLayout({ children }: ReactNode) {
	return (
		<>
			<div className={styles.layout}>
				{ children }
			</div>
		</>
	)
}
