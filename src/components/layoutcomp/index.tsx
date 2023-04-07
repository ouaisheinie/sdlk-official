import { ReactNode, useState } from "react"
import styles from "./index.module.scss"

interface PropsTypes {
    children: ReactNode
	overflow?: string
}

export default function contentLayout({ children, overflow }: PropsTypes) {
	return (
		<div className={styles.layout} style={{ overflow }}>
			{ children }
		</div>
	)
}
