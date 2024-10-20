import type { ChangeEventHandler, FocusEventHandler } from 'react'
import s from './style.module.css'

type InputProps = {
	name: string
	type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'date'
	label?: string
	placeholder?: string
	value?: string
	error?: string
	required?: boolean
	onChange?: ChangeEventHandler<HTMLInputElement>
	onBlur?: FocusEventHandler<HTMLInputElement>
}

export const Input = ({
	name,
	value,
	label,
	error,
	placeholder,
	type = 'text',
	required,
	...props
}: InputProps): JSX.Element => {
	return (
		<div>
			{label && (
				<label htmlFor={name}>
					{label} {required && <span>*</span>}
				</label>
			)}
			<input
				{...props}
				className={s.root}
				id={name}
				value={value}
				aria-invalid={!!error}
				aria-errormessage={`${name}-error`}
			/>
			{error && <div id={`${name}-error`}>{error}</div>}
		</div>
	)
}
