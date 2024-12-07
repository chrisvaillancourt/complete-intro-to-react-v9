function Pizza(props) {
  return (
    <div>
      <h1 className="pizza">{props.name}</h1>
      <p>{props.description}</p>
      <img
        // src={props.image ? props.image : "https://picsum.photos/200"}
        src={props.image ?? "https://picsum.photos/200"}
        alt={props.name}
      />
    </div>
  );
}

export default Pizza;
