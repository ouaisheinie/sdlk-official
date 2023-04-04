import { ReactNode, useState } from "react"
import styles from "./index.module.scss"

interface PropsTypes {
    children: ReactNode
}

export default function contentLayout({ children }: PropsTypes) {
	return (
		<div className={styles.layout}>
			{ children }
		</div>
	)
}
