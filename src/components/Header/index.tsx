import { Link } from 'react-router-dom'
import styles from './index.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1 className={styles.title}>GetMeCode</h1>
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
