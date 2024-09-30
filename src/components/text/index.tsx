import clsx from 'clsx'
import type { ReactNode } from 'react'
import s from './style.module.css'

type Props = {
	children: ReactNode
	className?: string
	size?: 'small' | 'medium' | 'large'
	color?: 'on-surface' | 'primary' | 'error'
}

export function Text({
	children,
	className,
	size = 'medium',
	color = 'on-surface',
}: Props): JSX.Element {
	return (
		<span className={clsx(s.root, s[size], s[color], className)}>
			{children}
		</span>
	)
}
