import { Link, useNavigate } from 'react-router-dom'
import styles from './index.module.css'

const Header = () => {
	const navigate = useNavigate()
	const handleClickLogo = () => {
		navigate('/')
	}
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1 className={styles.title} onClick={handleClickLogo}>
					GetMeCode
				</h1>
				<nav>
					<Link to='/home'>
						<button className={styles.navLink}>Главная</button>
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
