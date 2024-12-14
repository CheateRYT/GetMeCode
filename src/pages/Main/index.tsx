'use client'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TypeIt from 'typeit'
import styles from './index.module.css'

const Main = () => {
	const typeItRef = useRef<HTMLSpanElement | null>(null)

	useEffect(() => {
		if (typeItRef.current) {
			const typeItInstance = new TypeIt(typeItRef.current, {
				speed: 50,
				waitUntilVisible: true,
			})
				.type('Добро пожаловать в GetMeCode — онлайн редактор кода')
				.go()

			return () => {
				typeItInstance.destroy()
			}
		}
	}, [])

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.title}>GetMeCode</h1>
				<nav>
					<Link to='/home'>
						<button className={styles.navLink}>Главная</button>
					</Link>
				</nav>
			</header>
			<main className={styles.main}>
				<h2 className={styles.subtitle}>
					<span ref={typeItRef}></span>
				</h2>
				<p className={styles.description}>
					Аналог leetcode.com где пользователь может писать код на разных
					языках, затем отправлять его на сервер для выполнения и получать
					результаты
				</p>
				<div className={styles.actions}>
					<Link to='/home'>
						<button className={styles.signupButton}>Начать</button>
					</Link>
				</div>
			</main>
			<footer className={styles.footer}>
				<p>
					© 2024 Тестовое задание на позицию Junior Frontend Developer.
					https://github.com/CheateRYT Редников Лев
				</p>
			</footer>
		</div>
	)
}

export default Main
