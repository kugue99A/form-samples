'use client'

import { Input } from '@/components'
import { useForm, valiForm } from '@modular-forms/react'
import * as v from 'valibot'
import s from './style.module.css'

type LoginForm = {
	email: string
	password: string
}

const LoginSchema: v.GenericSchema<LoginForm> = v.object({
	email: v.pipe(
		v.string(),
		v.nonEmpty('Please enter your email.'),
		v.email('The email address is badly formatted.'),
	),
	password: v.pipe(
		v.string(),
		v.nonEmpty('Please enter your password.'),
		v.minLength(8, 'You password must have 8 characters or more.'),
	),
})

export default function Case() {
	const [_loginForm, { Form, Field }] = useForm<LoginForm>({
		validate: valiForm(LoginSchema),
	})
	return (
		<div className={s.container}>
			<section className={s.root}>
				<h1>case01</h1>
				<Input label="Name" name="name" />

				<Form>
					<Field name="email">
						{(field, props) => (
							<>
								<input {...props} type="email" required />
								{field.error && <div>{field.error.value}</div>}
							</>
						)}
					</Field>
					<Field name="password">
						{(field, props) => (
							<>
								<input {...props} type="password" required />
								{field.error && <div>{field.error.value}</div>}
							</>
						)}
					</Field>
					<button type="submit">Login</button>
				</Form>
			</section>
		</div>
	)
}
