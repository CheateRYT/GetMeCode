import React, { useState } from 'react'
import CodeEditor from './CodeEditor'
import ResultDisplay from './ResultDisplay'

const TaskExecution: React.FC<{ task: string }> = ({ task }) => {
	const [code, setCode] = useState('')
	const [result, setResult] = useState('')

	const handleRunCode = () => {
		// Имитация запроса к серверу
		setTimeout(() => {
			if (code.includes('error')) {
				setResult(
					JSON.stringify({ status: 'error', error: 'Синтаксическая ошибка' })
				)
			} else {
				setResult(
					JSON.stringify({ status: 'success', output: 'Hello, world!' })
				)
			}
		}, 1000)
	}

	return (
		<div>
			<h1>{task}</h1>
			<CodeEditor language='python' code={code} onCodeChange={setCode} />
			<button onClick={handleRunCode}>Запустить</button>
			<ResultDisplay result={result} />
		</div>
	)
}

export default TaskExecution
