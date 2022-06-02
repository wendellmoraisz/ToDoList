import React, { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import { Method } from "./types/method";
import { ListItem } from "./components/ListItem"
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskname: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false,
    });
    setList(newList);
  };

  const changeDone:Method = (item: Item) => {
    let newList = [...list];
    let newItem = list[list.indexOf(item)];
    newList[newList.indexOf(newItem)].done = !newItem.done;
    setList(newList);
  };

   const removeItem:Method = (element: Item) => {
    let newList = [...list];
    newList.splice(list.indexOf(element), 1);
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>To do List</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} changeDone={(item: Item) => changeDone(item)} removeItem={(item:Item) => removeItem(item)}/>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;