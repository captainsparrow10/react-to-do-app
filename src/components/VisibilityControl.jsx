import Swal from "sweetalert2";

export const VisibilityControl = ({
	setShowCompleted,
	cleanTask,
	showCompleted,
}) => {
	const handleDelete = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Deleted!", "Your file has been deleted.", "success");
				cleanTask();
			}
		});
	};

	return (
		<div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
			<div className="form-check form-switch">
				<input
					type="checkbox"
					className="form-check-input"
					checked={showCompleted}
					onChange={(e) => setShowCompleted(e.target.checked)}
				/>{" "}
				<label>Show Tasks Done</label>{" "}
			</div>

			<button className="btn btn-danger btn-sm" onClick={handleDelete}>
				Clean
			</button>
		</div>
	);
};
