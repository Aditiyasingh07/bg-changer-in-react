import { useState } from 'react';

function App() {
  const [Hello, setHello] = useState("black")

  return (
      <div className=" main" style={{backgroundColor: Hello}}>
          <div className="colors">
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
          </div>
      </div>
  )
}
export default App
