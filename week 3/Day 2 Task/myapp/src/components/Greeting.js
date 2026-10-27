function Greeting(props) {
  return (
    <div className="greeting-card">
      <h3>Hello, {props.name}!</h3>
      <p>You are learning {props.topic} today.</p>
    </div>
  );
}

export default Greeting;
