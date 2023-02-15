import ToDo from "./ToDo";

export default function ToDos({todoStart, removeToDos}) {
	return (
		<main className="main-content">
			{todoStart.map((todo) => (
				<ToDo key={todo.id} title={todo.title} content={todo.content} removeToDos={removeToDos} id={todo.id} />
                
			))}
		</main>
	);
}
