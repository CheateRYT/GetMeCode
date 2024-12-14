import React from 'react'

interface ResultDisplayProps {
	result: string
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
	return <pre>{result}</pre>
}

export default ResultDisplay
