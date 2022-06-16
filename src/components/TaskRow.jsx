export const TaskRow = ({task, toggleTask}) => {
	return (
		<tr>
			<td className="d-flex justify-content-between">
				{task.name}
				<input
					type="checkbox"
          checked={task.done}
          className="form-check-input"
					onChange={() => toggleTask (task)}
				/>
			</td>
		</tr>
	);
};
