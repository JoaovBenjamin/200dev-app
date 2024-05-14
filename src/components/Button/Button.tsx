import  Styled, { styled } from "styled-components";


interface ButtonPros{
    variant: "black" | "pink"
}

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
`

const ButtonLorem = styled.button<ButtonPros>`
        padding: 12px 24px;
        font-size: 16px;
        font-weight: bold;
        border: none;
        width: 180px;
        cursor: pointer;
        border-radius: 5px;
        color: #fff;
        letter-spacing: 0.5px;
        text-align: center;
        margin-top: 18px;
        transition: transform 0.4s ease 0.1s;


        ${({variant}) => variant === 'black' && `
            background-color:black;

                &:hover{
                    background-color: transparent;
                    border: 1px solid black;
                    font-size: 16px;
                    letter-spacing: 0.5px;
                    font-weight: bold;
                    color: black;
                    transform: scale(1.10);

                }
        `}
        ${({variant}) => variant === 'pink' && `
            background-color:#ff007f;

                &:hover{
                    background-color: transparent;
                    border: 1px solid #ff007f;
                    font-size: 16px;
                    letter-spacing: 0.5px;
                    font-weight: bold;
                    color: #ff007f;
                    transform: scale(1.10);

                }
        `}
`

export default function Button(){
    return(
        <>
            <ButtonContainer>
                <ButtonLorem variant="black">LOREM</ButtonLorem>
                <ButtonLorem variant="pink">IPSUM</ButtonLorem>
            </ButtonContainer>
        </>
    )
}