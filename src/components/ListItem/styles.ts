import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background: #20212C;
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        cursor: pointer;
        align-items: center;
        display: flex;
    }
    
    span {
        text-decoration: ${done ? 'line-through' : 'initial'}
    }

    button {
        border: none;
        background: transparent;
        font-size: 25px;
        cursor: pointer;
    }
`
));