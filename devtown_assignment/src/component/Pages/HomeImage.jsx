import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
 background-image: url(https://dt-neytiri.myshopify.com/cdn/shop/files/Untitled-1_eca05662-e026-413e-b480-f0a5800700fd.jpg?v=1677834985&width=1500);
height:80vh;
display:flex;
 `
 const Box=styled.div`
    margin:10% 0;
    display:grid;
    height:30vh;
    width:50%;
    padding:20px;
    gap:20px
    
 `

 const Button= styled.button`    
    margin:auto;
    width:30%;
    padding:10px;
    background-color:#ff324d;
    color:white;
    border:none;
    font-weight:700;
    font-size:large

 `

export const HomeImage = () => {
    return (
        <ImageContainer style={{
            // backgroundImage: 'url(https://dt-neytiri.myshopify.com/cdn/shop/files/Untitled-1_eca05662-e026-413e-b480-f0a5800700fd.jpg?v=1677834985&width=1500)'

        }}>
            <Box >
                <h1>   Incredibly Light Weight Gorgeous Clothing</h1>
                <p>    Welcome to a world of possibilities, where your journey begins at our doorstep</p>
                <Button >shop</Button>
            </Box>
        </ImageContainer>

    )
}
