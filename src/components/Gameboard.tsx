import styled from "styled-components";
import layout from "../assets/gameboardLayout";
import { useState, useEffect } from 'react'

export default function Gameboard(props: {url: string, setPlayerNames: Function, setStory: Function, action: string}) {

    const [gameboard, setGameboard] = useState([])
    const [messages, setMessages] = useState([
        {
            role: "",
            content: "",
        }
    ])
    const [update, setUpdate] = useState(true)

    useEffect(() => {
        if (update) {
            async function updateBoard() {
                const url = props.url + "/update-board";
                await fetch(url, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({messages: messages})
                }).then((res) => res.json())
                .then((res) => {
                    // console.log(res.messages[res.messages.length - 1].content);
                    const jsonMessage = JSON.parse(res.messages[res.messages.length - 1].content);
                    setMessages(res.messages);
                    setGameboard(jsonMessage.updatedBoard);
                    props.setPlayerNames({
                        playerOne: jsonMessage.playerOne,
                        playerTwo: jsonMessage.playerTwo,
                        playerThree: jsonMessage.playerThree,
                        playerFour: jsonMessage.playerFour
                    })
                    props.setStory(jsonMessage.storyUpdate)
                    setUpdate(false);
                }).catch((err) => console.log(err));
            }
            updateBoard();
        }
    }, [update])

    useEffect(() => {
        setMessages((prev) => [...prev, {role: "user", content: props.action}])
        setUpdate(true);
    }, [props.action])


    function getTileColor(tile: number) {
        switch (tile) {
            case 0:
                return {color: "white", text: ""}
            case 1:
                return {color: "blue", text: "Player One"}
            case 2: 
                return {color: "blue", text: "Player Two"}
            case 3: 
                return {color: "blue", text: "Player Three"}
            case 4: 
                return {color: "blue", text: "Player Four"}
            case 5: 
                return {color: "red", text: "Enemy"}
            case 6:
                return {color: "yellow", text: "Chest"}
            case 7:
                return {color: "purple", text: "Trap"}
            case 8:
                return {color: "brown", text: "Door"}
            case 9:
                return {color: "black", text: ""}
            default:
                return {color: "white", text: ""}
        }
    }

    const mappedGameboard = gameboard.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
                return <Tile key={`${rowIndex}-${cellIndex}`} style={{backgroundColor: `${getTileColor(cell).color}`}}>
                    {getTileColor(cell).text}
                </Tile>
            })
    })


    return (
        <GameboardContainer>
            {mappedGameboard}
        </GameboardContainer>
    )
}

const GameboardContainer = styled.div`
    grid-area: gameboard;
    border: 1px solid black;
    width: 800px;
    height: 700px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    div {
        border: 1px solid black;
    }
`

const Tile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`