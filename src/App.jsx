import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { Tasktable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

export default function App() {
	// Para los use State
	const [taskItems, setTaskItems] = useState([]);
	const [showCompleted, setShowCompleted] = useState(false);

	// Para las funciones
	function createNewTask(taskName) {
		if (taskName.trim().length !== 0) {
			if (!taskItems.find((task) => task.name === taskName)) {
				setTaskItems([...taskItems, { name: taskName, done: false }]);
			}
		}
	}

	const toggleTask = (task) => {
		setTaskItems(
			taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
		);
	};

	const cleanTask = () => {
		setTaskItems(taskItems.filter((task) => !task.done));
	};

	// Para los use Effect
	useEffect(() => {
		let data = localStorage.getItem("tasks");
		if (data) {
			setTaskItems(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(taskItems));
	}, [taskItems]);

	return (
		<div className="bg-dark vh-100 text-light">
			<div className="container p-4 col-md-4 offset-md-3">
				<h1>To do APP</h1>
				<TaskCreator createNewTask={createNewTask}  />
				<Tasktable tasks={taskItems} toggleTask={toggleTask} title={"Tasks to do"} />
				<VisibilityControl
					isChecked={showCompleted}
					setShowCompleted={(checked) => setShowCompleted(checked)}
					cleanTask={cleanTask}
				/>
				{showCompleted && (
					<Tasktable
						tasks={taskItems}
						toggleTask={toggleTask}
						showCompleted={showCompleted}
						title={"Tasks done"}
					/>
				)}
			</div>
		</div>
	);
}
