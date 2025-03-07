import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Vite + React Test Project</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
        <h1 className="text-5xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
};

export default Home;
