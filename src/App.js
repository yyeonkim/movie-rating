function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>I delete everyting!!</h1>
      <Food fav="cheese" />
      <Food fav="bread" />
      <Food fav="apple" />
      <Food fav="pasta" />
    </div>
  );
}

export default App;
