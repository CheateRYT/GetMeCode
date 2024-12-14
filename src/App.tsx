import React, { useState } from 'react'
import TaskExecution from './TaskExecution'
import TaskSelection from './TaskSelection'

const App: React.FC = () => {
	const [selectedTask, setSelectedTask] = useState<string | null>(null)

	return (
		<div>
			{!selectedTask ? (
				<TaskSelection onSelect={task => setSelectedTask(task)} />
			) : (
				<TaskExecution task={selectedTask} />
			)}
		</div>
	)
}

export default App
