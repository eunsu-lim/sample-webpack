import React from "react";

export default function Count() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}> - </button>
      {count}
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}
