import axios from 'axios'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'
import 'codemirror/theme/material.css'
import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './index.module.css'

interface RouteParams {
	language: string
}

type CodeState = string
type OutputState = string | null
type ErrorState = string | null

const Workspace: React.FC = () => {
	const { language } = useParams<RouteParams>()
	const [code, setCode] = useState<CodeState>('// Напишите ваш код здесь')
	const [output, setOutput] = useState<OutputState>(null)
	const [error, setError] = useState<ErrorState>(null)

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
		} catch (error) {
			setError(`Ошибка при отправке запроса на сервер. ${error}`)
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
			</div>
			<Footer />
		</div>
	)
}

export default Workspace
