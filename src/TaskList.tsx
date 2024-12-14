import React from 'react'

interface TaskListProps {
	tasks: string[]
	onSelectTask: (task: string) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onSelectTask }) => {
	return (
		<ul>
			{tasks.map((task, index) => (
				<li key={index} onClick={() => onSelectTask(task)}>
					{task}
				</li>
			))}
		</ul>
	)
}

export default TaskList
