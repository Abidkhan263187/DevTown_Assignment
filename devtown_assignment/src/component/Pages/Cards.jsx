import React from 'react'
import styled, { css } from 'styled-components'



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



const Container = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);

padding:20px 0px;
margin:5% auto;
height:300px;
width:80%;
gap:30px;

@media (max-width:767px) {
    grid-template-columns:repeat(1,1fr);
    width:100%;
    margin:0% ;
}
@media (min-width:768px) and  (max-width:1023px){  
    grid-template-columns:repeat(1,1fr);
    width:100%;
    margin:0% ;

}


`

const ImageCard = styled.div`
    margin:auto 0px auto 50% ;
    display:grid;
    text-align:start;
    color:#292b2c;

    @media (max-width:767px) {
        margin:0% 0px auto 70% ;
        font-size:10px;
     
    }
 
`
const Card1 = styled.div`
    display: flex;
    width:100%;
    background-image:url(https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/shop_banner_img1.jpg);
    @media (max-width:767px) {
    width:100%;
         
    @media (max-width:767px) {
        width:100%;
       
    }

    }
`
const Card2 = styled.div`
    display: flex;
    width:100%;
    background-image:url(https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/shop_banner_img2.jpg);
    @media (max-width:767px) {
        width:100%;
       
    }

`