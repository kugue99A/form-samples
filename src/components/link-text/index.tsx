import type { Route } from 'next'
import Link from 'next/link'
import { Text } from '../text'

type Props<T extends string> = {
	href: Route<T>
	children: string
}

export function LinkText<T extends string>({
	children,
	href,
}: Props<T>): JSX.Element {
	return (
		<Link href={href}>
			<Text color="primary">{children}</Text>
		</Link>
	)
}
