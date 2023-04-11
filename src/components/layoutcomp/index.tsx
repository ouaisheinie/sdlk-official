import { ReactNode, useState } from "react"
import styles from "./index.module.scss"

interface PropsTypes {
    children: ReactNode
	overflow?: string
	style_obj?: object
}

export default function contentLayout({ children, overflow, style_obj }: PropsTypes) {
	return (
		<div className={styles.layout} style={{ overflow, ...style_obj }}>
			{ children }
		</div>
	)
}
