import { Discussions } from "./components/Discussions";
import { Form } from "./components/Form";
import { useState, useEffect } from 'react';

function App() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/discussions')
    .then(res => res.json())
    .then(data => {
      setDiscussions(data);
    })
  }, []);

  return (
    <>
      <h1>My Agora States</h1>
       <Form></Form>
       <Discussions discussions={discussions}></Discussions>
    </>
  );
}

export default App;
