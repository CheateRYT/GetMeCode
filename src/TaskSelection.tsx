import React from 'react'
import TaskList from './TaskList'

const TaskSelection: React.FC<{ onSelect: (task: string) => void }> = ({
	onSelect,
}) => {
	const tasks = ['Задача 1', 'Задача 2']

	return (
		<div>
			<h1>Выбор задания</h1>
			<TaskList tasks={tasks} onSelectTask={onSelect} />
		</div>
	)
}

export default TaskSelection
