import styled from "styled-components";


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; 
`

const CardDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 250px;
    background-color: #fff;
    border: solid 2px blue;
    border-radius: 10px;
`

const Title = styled.h1`
    font-size: 24px;
    line-height: 2.5px;
    align-self: flex-start;
    padding: 24px;
    margin: 24px,0,0,12px;
    position: relative;
    
` 

const Paragraph = styled.p`
    text-align: left;
    margin: 0 auto;
    width: 80%;
    color: #707070;
    font-size: 15px;
`


export default function Card(){
    return(
        <>
            <CardContainer>
                <CardDiv>
                    <Title>Lorem ipsum!</Title>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio placeat recusandae iusto labore natus similique sint voluptate asperiores, vero molestias beatae consectetur quidem sapiente soluta! Recusandae qui aut illum?</Paragraph>                
                </CardDiv>
            </CardContainer>
        </>
    )
}