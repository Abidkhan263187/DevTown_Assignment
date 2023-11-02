import React from 'react'
import styled from 'styled-components'


export const HomeImage = () => {
    return (
        <ImageContainer >
            <Box >
                <H1>   Incredibly Light Weight Gorgeous Clothing</H1>
                <p>    Welcome to a world of possibilities, where your journey begins at our doorstep</p>
                <Button >shop</Button>
            </Box>
        </ImageContainer>

    )
}
const ImageContainer = styled.div`
 background-image: url(https://dt-neytiri.myshopify.com/cdn/shop/files/Untitled-1_eca05662-e026-413e-b480-f0a5800700fd.jpg?v=1677834985&width=1500);
display:flex;
 `

const H1 = styled.h1`
 @media (max-width:767px){
    font-size:15px
 }   
 @media (min-width:768px) and  (max-width:1023px){   
    font-size:25px

}

 `
const Box = styled.div`
    margin:10% 0;
    display:grid;
    width:50%;
    padding:20px;
    gap:20px;
    @media (max-width:767px){   
        width:100%;
    
    }
    @media (min-width:768px) and  (max-width:1023px){   
        width:80%;
    margin:auto;
    }
    
 `

const Button = styled.button`    
    margin:auto;
    width:30%;
    padding:10px;
    background-color:#ff324d;
    color:white;
    border:none;
    font-weight:700;
    font-size:large

    @media (max-width:767px){
        font-size:small;
        padding:0px;
    }

 `
