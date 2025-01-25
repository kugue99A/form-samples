import s from './style.module.css'

export default function Colors() {
	const udagawanightPalette = {
		dark0_hard: '#2a2f34',
		dark0: '#343b40',
		dark0_soft: '#3f484d',
		dark1: '#495156',
		dark2: '#5a6267',
		dark3: '#70777b',
		dark4: '#8b9093',
		light0_hard: '#f5e6d3',
		light0: '#fae4cb',
		light0_soft: '#f4dcc4',
		light1: '#ecd3b9',
		light2: '#dcc4a9',
		light3: '#cbb69a',
		light4: '#baa88b',
		bright_red: '#ff6b6b',
		bright_green: '#a3d9a5',
		bright_yellow: '#ffd27f',
		bright_blue: '#82aaff',
		bright_purple: '#d49ede',
		bright_aqua: '#9ad8c0',
		bright_orange: '#ffab73',
		neutral_red: '#ff5a5a',
		neutral_green: '#a1c4a3',
		neutral_yellow: '#ffbe76',
		neutral_blue: '#6798e5',
		neutral_purple: '#c285c2',
		neutral_aqua: '#84c5ab',
		neutral_orange: '#f09562',
		faded_red: '#d84848',
		faded_green: '#88aa88',
		faded_yellow: '#e3b568',
		faded_blue: '#5c87b2',
		faded_purple: '#a974a4',
		faded_aqua: '#6ea28c',
		faded_orange: '#d47d57',
		dark_red_hard: '#773a3a',
		dark_red: '#824343',
		dark_red_soft: '#8b4949',
		light_red_hard: '#ffa5a5',
		light_red: '#ff9d9d',
		light_red_soft: '#f49191',
		dark_green_hard: '#5b7357',
		dark_green: '#667d61',
		dark_green_soft: '#6e8469',
		light_green_hard: '#cce6c5',
		light_green: '#d4e7cc',
		light_green_soft: '#ddebd3',
		dark_aqua_hard: '#4b6457',
		dark_aqua: '#57705e',
		dark_aqua_soft: '#617869',
		light_aqua_hard: '#cee9d8',
		light_aqua: '#d6eddc',
		light_aqua_soft: '#e0f0e2',
		gray: '#a4a8ac',
	}

	const ColorBox: React.FC<{ color: string; label: string }> = ({
		color,
		label,
	}) => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				margin: '10px',
			}}
		>
			<div
				style={{
					width: '50px',
					height: '50px',
					backgroundColor: color,
					borderRadius: '4px',
				}}
			/>
			<span style={{ fontSize: '12px', marginTop: '5px' }}>{label}</span>
		</div>
	)

	return (
		<main className={s.root}>
			<div className={s.content}>
				<section className={s['section-heading']}>
					<h1>Neovim Colorsheme</h1>
				</section>
				<section className={s['section-case']}>
					<ul className={s['list-case']}>
						{Object.entries(udagawanightPalette).map(([name, color]) => (
							<li key={name}>
								<ColorBox color={color} label={name} />
							</li>
						))}
					</ul>
				</section>
			</div>
		</main>
	)
}
