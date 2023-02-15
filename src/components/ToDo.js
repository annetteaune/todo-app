import Button from "./Button";

export default function ToDo({ title, content, removeToDos, id }) {
	return (
		<article>
			<h3>{title}</h3>
			<p>{content}</p>
			<Button removeToDos={removeToDos} id={id} />
		</article>
	);
}
