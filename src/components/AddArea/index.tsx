import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
    onEnter: (taskname: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === "Enter" && inputText !== ""){
            onEnter(inputText);
            setInputText('');
        };
    };

    return(
        <C.Container>
            <div className="image">&#x2795;</div>
            <input 
            type="text"
            placeholder="Add new task"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}