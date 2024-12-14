import React from 'react'
import { FaJsSquare, FaPython } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './index.module.css'

const languages = [
	{
		name: 'Python',
		icon: <FaPython className={styles.pythonIcon} />,
		path: 'python',
	},
	{
		name: 'JavaScript',
		icon: <FaJsSquare className={styles.jsIcon} />,
		path: 'javascript',
	},
]

const Home: React.FC = () => {
	const navigate = useNavigate()

	const handleSelect = (path: string) => {
		navigate(`/workspace/${path}`)
	}

	return (
		<div>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.title}>Выбор языка программирования</h1>
				<div className={styles.cards}>
					{languages.map((language, index) => (
						<div key={index} className={styles.card}>
							{language.icon}
							<h2 className={styles.languageName}>{language.name}</h2>
							<button
								className={styles.selectButton}
								onClick={() => handleSelect(language.path)}
							>
								Выбрать
							</button>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home
