import * as C from "./styles";
import { Item } from "../../types/item"
import { Method } from "../../types/method";

type Props = {
    item: Item
    removeItem: Method
    changeDone: Method
}

export const ListItem = ({ item, removeItem, changeDone }: Props) => {

    return(
        <C.Container done={item.done}>
             <label>
            <input type="checkbox"
             checked={item.done}
             onChange={() => changeDone(item)}
             />
             <span>
             {item.name}
             </span>
             </label>
             <button onClick={() => removeItem(item)}>🗑️</button>
        </C.Container>
    );
}