import styled from "styled-components";

export default function Story(props: {story: string}) {

    return (
        <StoryContainer>
            <StoryText>{props.story}</StoryText>
        </StoryContainer>
    )
}

const StoryContainer = styled.div`

`

const StoryText = styled.p`

`