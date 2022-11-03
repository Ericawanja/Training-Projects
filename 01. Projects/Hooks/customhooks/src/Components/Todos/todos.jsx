import React, { useEffect, useState } from "react";

function Todos() {
  const [list, setList] = useState([]);
  //fetchdata
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?limit=20"
      );
      const data = await res.json();
      let dataList = data.slice(0, 20);
      setList(dataList);
    };
    fetchData();
  }, []);
  console.log(list);
 
  return (
    <div>
        gggg
      {list.map((t) => {
         let { id, title, completed } = t
        return <div className="todo">{title}</div>;
      })}
    </div>
  );
}

export default Todos;
