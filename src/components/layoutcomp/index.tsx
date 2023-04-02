import { ReactNode, useState } from "react"
import styles from "./index.module.scss"

interface propsTypes {
    children: ReactNode
}

export default function contentLayout({ children }: propsTypes) {
	return (
		<>
			<div className={styles.layout}>
				{ children }
			</div>
		</>
	)
}
