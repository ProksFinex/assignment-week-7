import { useState } from "react";
import "./App.css";
import { data } from "./constant";

function App() {
  const [count, setCount] = useState(0);
  const [text,setText]=useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(amount<0) amount=1;
    if(amount>5) amount=5;
    setText(data.slice(0,amount))
    return;
  };

  return (
    <>
      <h1>Paragraph Generator</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="enter Number of Words"
          value={count}
          onChange={(e) => setCount(
            e.target.value)
          }
        />
        <button className="button">Go</button>
      </form>

      <article className="para">
        {text.map((data,index)=>(
          <p key={index}>{data}</p>
        ))}
      </article>
    </>
  );
}

export default App;
