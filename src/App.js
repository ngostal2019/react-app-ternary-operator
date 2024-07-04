import './App.css';

function App() {
  const randImgUrl = 'https://picsum.photos/400';
  const time = new Date();
  const day = time.toLocaleString('en-US', {weekday: 'long'});
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;

  switch (day.toLowerCase()) {
    case 'monday':
      dayMessage = `Happy ${day}`
      break;
    case 'tuesday':
      dayMessage = `${day}, only four days to go`
      break;
    case 'wednesday':
      dayMessage = `${day}, half way there for weekend 😃`
      break;
    case 'thursday':
      dayMessage = `${day}, start planning the week`
      break;
    case 'friday':
      dayMessage = `${day}, tomorrow is the weekend! 😊`
      break;

    default:
      dayMessage = "Stay calm and keep having fun";
  }

  return (
    <div className="App">
      <h1>
        {dayMessage}
      </h1>
      <img
        src={randImgUrl}
        height={200}
        width={200}
        alt='A random souvenir'
      />
      {morning ? <h2>Have you had breakfast yet?</h2> : <p>It's almost late {time.toLocaleTimeString()}</p>}
    </div>
  );
}

export default App;
