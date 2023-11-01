import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);

padding:20px 0px;
margin:5% auto;
height:50vh;
width:80%;
gap:30px
`

const ImageCard = styled.div`
    height:15vh;
    margin:auto 0px auto 50% ;
    display:grid;
    text-align:start;
    color:#292b2c;
 
`
const Card1 = styled.div`
    display: flex;
    width:100%;
    background-image:url(https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/shop_banner_img1.jpg);

`
const Card2 = styled.div`
    display: flex;
    width:100%;
    background-image:url(https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/shop_banner_img2.jpg);

`

export const Cards = () => {
    return (
        <Container>
            <Card1 >

                <ImageCard >
                    <h4>Super Sale</h4>
                    <h1>New Collection</h1>
                    <p>Shop Now</p>
                </ImageCard>
            </Card1>
            <Card2>
                <ImageCard >
                    <h4>New Season</h4>
                    <h2>New Sale 40% Off</h2>
                    <p>Shop Now</p>
                </ImageCard>
            </Card2>
        </Container>
    )
}
