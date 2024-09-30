import type { Metadata } from 'next'
import '@/styles/index.css'

export const metadata: Metadata = {
	title: 'Form Samples',
	description: `Let's enjoy!`,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
