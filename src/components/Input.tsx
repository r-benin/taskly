import React, { useRef } from 'react'
import arrowImg from '../img/right-arrow.png'

interface Props{
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const Input: React.FC<Props> = ({toDo, setToDo, handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    return (
        <form className="input-container" onSubmit={(e) => {
                    handleAdd(e)
                    inputRef.current?.blur()
                }
            }>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter something to do..."
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
            ></input>
            <button type="submit" className="submit-button">
                <img src={arrowImg} className="button-img"></img>
            </button>
        </form>
    )
}

export default Input