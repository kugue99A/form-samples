import s from './style.module.css'

type Props = {
	value: string
	options: number[]
}

const Select = ({ value }: Props) => {
	return (
		<>
			<input className={s.root} />
		</>
	)
}
