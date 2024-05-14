import styled from "styled-components";
import Button from "../Button/Button";
import { X } from "lucide-react";


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; 
`

const DivImage = styled.div`
    display: flex;
    align-self: flex-end;
    position: fixed;
    margin-top: 25px;
    margin-right: 20px;
`

const CardDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 250px;
    background-color: #fff;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to right, #ff007f, #8a2be2, #007bff);
    border-image-slice: 1;
    border-radius: 10px;
    
`

const Title = styled.h1`
    font-size: 24px;
    line-height: 2.5px;
    align-self: flex-start;
    padding: 24px;
    margin: 24px,0,0,12px;
    
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
                    <DivImage><X></X></DivImage>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio placeat recusandae iusto labore natus similique sint voluptate asperiores Recusandae qui aut illum?</Paragraph>  
                    <Button></Button>              
                </CardDiv>
            </CardContainer>
        </>
    )
}