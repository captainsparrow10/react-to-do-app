import { TaskRow} from "./TaskRow";

export const Tasktable = ({ tasks, toggleTask, showCompleted=false, title}) => {
	const taskTableRows = (doneValue) => {
		return tasks
			.filter((task) => task.done === doneValue)
			.map((task) => (
				<TaskRow task={task} key={task.name} toggleTask={toggleTask} />
			));
	};
	return (
	<div className="pt-2">
		<table className="table table-dark table-striped table-bordered border-secondary">
			<thead>
				<tr className="table-primary">
					<th>{title}</th>
				</tr>
			</thead>
			<tbody>{taskTableRows(showCompleted)}</tbody>
		</table>
	</div>
	);
};
