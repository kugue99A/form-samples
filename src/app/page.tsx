import { LinkText } from '@/components/link-text'
import s from './style.module.css'

export default function Home() {
	return (
		<main className={s.root}>
			<div className={s.content}>
				<section className={s['section-heading']}>
					<h1>Form Playground</h1>
				</section>
				<section className={s['section-case']}>
					<ul className={s['list-case']}>
						<li>
							<LinkText href={'/case01'}>case 01</LinkText>
						</li>
						<li>
							<LinkText href={'/case01'}>case 02</LinkText>
						</li>
						<li>
							<LinkText href={'/case01'}>case 03</LinkText>
						</li>
						<li>
							<LinkText href={'/case01'}>case 04</LinkText>
						</li>
						<li>
							<LinkText href={'/case01'}>case 05</LinkText>
						</li>
					</ul>
				</section>
			</div>
		</main>
	)
}
