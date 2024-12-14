import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/go/go'
import 'codemirror/mode/python/python'
import 'codemirror/theme/material.css'
import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'

interface CodeEditorProps {
	language: string
	code: string
	onCodeChange: (code: string) => void
}

const CodeEditor: React.FC<CodeEditorProps> = ({
	language,
	code,
	onCodeChange,
}) => {
	return (
		<CodeMirror
			value={code}
			options={{
				mode: language,
				theme: 'material',
				lineNumbers: true,
			}}
			onBeforeChange={(editor, data, value) => {
				onCodeChange(value)
			}}
		/>
	)
}

export default CodeEditor
