import styled from "styled-components";
import { useState } from 'react'

export default function Controls(props: {playerOne: any, playerTwo: any, playerThree: any, playerFour: any, setAction: Function}) {

    let activePlayer = "";

    if (props.playerOne.isTurn) {
        activePlayer = props.playerOne.name;
    } else if (props.playerTwo.isTurn) {
        activePlayer = props.playerTwo.name;
    } else if (props.playerThree.isTurn) {
        activePlayer = props.playerThree.name;
    } else if (props.playerFour.isTurn) {
        activePlayer = props.playerFour.name;
    }

    return (
        <ControlsContainer>
            <PlayerContainer style={{backgroundColor: `${activePlayer === props.playerOne.name ? "green" : ""}`}}>
                <PlayerNumber>1</PlayerNumber>
                <PlayerName>{props.playerOne.name}</PlayerName>
                <PlayerHealth>HP: {props.playerOne.health}</PlayerHealth>
                <PlayerClass>{`${props.playerOne.race} ${props.playerOne.class}`}</PlayerClass>
            </PlayerContainer>
            <PlayerContainer style={{backgroundColor: `${activePlayer === props.playerTwo.name ? "green" : ""}`}}>
                <PlayerNumber>2</PlayerNumber>
                <PlayerName>{props.playerTwo.name}</PlayerName>
                <PlayerHealth>HP: {props.playerTwo.health}</PlayerHealth>
                <PlayerClass>{`${props.playerTwo.race} ${props.playerTwo.class}`}</PlayerClass>
            </PlayerContainer>
            <PlayerContainer style={{backgroundColor: `${activePlayer === props.playerThree.name ? "green" : ""}`}}>
                <PlayerNumber>3</PlayerNumber>
                <PlayerName>{props.playerThree.name}</PlayerName>
                <PlayerHealth>HP: {props.playerThree.health}</PlayerHealth>
                <PlayerClass>{`${props.playerThree.race} ${props.playerThree.class}`}</PlayerClass>
            </PlayerContainer>
            <PlayerContainer style={{backgroundColor: `${activePlayer === props.playerFour.name ? "green" : ""}`}}>
                <PlayerNumber>4</PlayerNumber>
                <PlayerName>{props.playerFour.name}</PlayerName>
                <PlayerHealth>HP: {props.playerFour.health}</PlayerHealth>
                <PlayerClass>{`${props.playerFour.race} ${props.playerFour.class}`}</PlayerClass>
            </PlayerContainer>
            <ActionContainer>
                <MoveButtons>
                    <MoveButton onClick={() => props.setAction(`${activePlayer} wants to move left.`)}>Move Left</MoveButton>
                    <div>
                        <MoveButton onClick={() => props.setAction(`${activePlayer} wants to move down.`)}>Move Down</MoveButton>
                        <MoveButton onClick={() => props.setAction(`${activePlayer} wants to move right.`)}>Move Right</MoveButton>
                    </div>
                    <MoveButton onClick={() => props.setAction(`${activePlayer} wants to move up.`)}>Move Up</MoveButton>
                </MoveButtons>
                <Action onClick={() => props.setAction(`${activePlayer} wants to attack.`)}>Attack</Action>
                <Action onClick={() => props.setAction(`${activePlayer} wants to open the chest.`)}>Open Chest</Action>
                <Action onClick={() => props.setAction(`${activePlayer} wants to open the door.`)}>Open Door</Action>
                <Action onClick={() => props.setAction(`${activePlayer} wants to disarm the trap.`)}>Disarm Trap</Action>
            </ActionContainer>
        </ControlsContainer>
    )
}

const ControlsContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: controls;
`

const PlayerContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    font-size: 1.5rem;
    width: 100%;
`

const PlayerName = styled.p`
    font-weight: bolder;
    margin-left: 20px;
`

const PlayerNumber = styled.p`

`

const PlayerHealth = styled.p`
    margin-left: 20px;
`

const PlayerClass = styled.p`
    margin-left: 20px;
`

const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const MoveButtons = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        height: 100%;
        display: flex;
        flex-direction: column;
        button {
            height: 50%;
            width: 100%;
        }
    }
`

const Action = styled.button`
    height: 70px;
    width: 100%;
    margin-top: 10px;
`

const MoveButton = styled.button`
    height: 50%;
    width: 100%;
`