import axios from 'axios'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css' // Темная тема
import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './index.module.css'

const Workspace: React.FC = () => {
	const { language } = useParams<{ language: string }>()
	const [code, setCode] = useState('// Напишите ваш код здесь')
	const [output, setOutput] = useState<string | null>(null)
	const [error, setError] = useState<string | null>(null)

	const runCode = async () => {
		setOutput(null)
		setError(null)

		try {
			const response = await axios.post('http://localhost:5000/executions', {
				language,
				code,
			})

			if (response.data.status === 'success') {
				setOutput(response.data.output)
			} else {
				setError(response.data.error)
			}
		} catch (err) {
			setError('Ошибка при отправке запроса на сервер.')
		}
	}

	return (
		<div>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.title}>Рабочее пространство: {language}</h1>
				<CodeMirror
					value={code}
					options={{
						mode: language === 'python' ? 'text/x-python' : 'text/javascript',
						theme: 'material',
						lineNumbers: true,
					}}
					onBeforeChange={(editor, data, value) => {
						setCode(value)
					}}
					className={styles.codeMirror}
				/>
				<button className={styles.runButton} onClick={runCode}>
					Запустить
				</button>
				<div className={styles.output}>
					<h2>Вывод:</h2>
					{output && <pre>{output}</pre>}
					{error && <pre style={{ color: 'red' }}>{error}</pre>}
				</div>
			</div>{' '}
			<Footer />
		</div>
	)
}

export default Workspace
