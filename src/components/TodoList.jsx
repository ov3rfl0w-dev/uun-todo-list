export default function TodoList({ data }) {
  return (
    <>
      {data.map(({ name, id }) => (
        <h1 key={id}>{name}</h1>
      ))}
    </>
  );
}
