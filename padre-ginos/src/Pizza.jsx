function Pizza(props) {
  return (
    <div>
      <h1 className="pizza">{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Pizza;
