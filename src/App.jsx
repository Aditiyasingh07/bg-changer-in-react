import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
  const [Hello, setHello] = useState("black")

  return (
      <div className=" main" style={{backgroundColor: Hello}}>
          <button className="colors">
          <button onClick={() => setHello("red")}
          className="btn" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setHello("pink")}
          className="btn" style={{backgroundColor: 'pink'}}>pink</button>
          <button onClick={() => setHello("blue")}
          className="btn" style={{backgroundColor: 'blue'}}>blue</button>
          <button onClick={() => setHello("yellow")}
          className="btn" style={{backgroundColor: 'yellow'}}>yellow</button>
          <button onClick={() => setHello("olive")}
          className="btn" style={{backgroundColor: 'olive'}}>olive</button>
          <button onClick={() => setHello("hotpink")}
          className="btn" style={{backgroundColor: 'hotpink'}}>hotpink</button>
          <button onClick={() => setHello("green")}
          className=' text-black h2 p-3 rounded-4 m-0 border-0' style={{backgroundColor: 'green'}}>green</button>
          </button>
      </div>
  )
}
export default App
