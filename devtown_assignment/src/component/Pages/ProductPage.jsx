import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'
import { useSearchParams } from "react-router-dom";
import { Rating } from './Rating';
import { Filter } from './Filter';



export const ProductPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(false)


    const cat = searchParams.get('category')
    const sort = searchParams.get('sortby')
    const size = searchParams.get('size')
    const rat = searchParams.get('rating')

    var url = process.env.REACT_APP_URL
    useEffect(() => {
        (async () => {
            let queryParams = [];

            if (cat) queryParams.push(`category=${cat}`);
            if (sort) queryParams.push(`sortby=price&order=${sort}`);
            if (size) queryParams.push(`size=${size}`);
            if (rat) queryParams.push(`rating=${rat}`);

            const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}&pageNo=${page}` : `?pageNo=${page}`;
            try {
                const response = await axios.get(url + queryString);
                const { data } = response;
                setData(data.data);
                console.log(data.data)
            } catch (error) {
                console.log(error)
            }
        })();
    }, [page, sort, cat, size, rat]);


    const toggleFilter = () => {
        setFilter(!filter)
    }
    const onClose = () => {
        setFilter(false)
    }

    return (
        <Container >
            <Filter isOpen={filter} onClose={onClose} />
            <ProductContainer>
                <AlignStart >
                    <Select onChange={(e) => {
                        searchParams.set('sortby', e.target.value)
                        setSearchParams(searchParams)
                    }}
                        name="" id="">
                        <option value="">Select Here For Sort</option>
                        <option value="asc">Sort By Price : Low To High</option>
                        <option value="desc">Sort By Price : High To Low</option>
                    </Select>
                    <Button onClick={toggleFilter} >
                        Filter
                    </Button>
                </AlignStart>

                <GridItems >
                    {data.length >0 ? data.map((elem, ind) => {
                        return (
                            <Card key={ind} >
                                <CardItem >
                                    <Image src={elem.img} alt="img" />
                                </CardItem>
                                <ContentBox >
                                    <h4>{elem.name}</h4>
                                    <PriceDiv >
                                        <S >${Math.floor(elem.mrp)}</S>&nbsp;&nbsp;&nbsp;
                                        <Strong >${Math.floor(elem.price)}</Strong>
                                    </PriceDiv>
                                    <Rating rating={elem.rating} />
                                    <Addtocart >Add To Cart</Addtocart>
                                </ContentBox>
                            </Card>
                        )
                    }): <EmptyCard></EmptyCard>}

                </GridItems>
                <div style={{

                    margin: "10% auto"
                }}>
                    <PageButtons disabled={page === 1} onClick={() => (setPage((p) => p - 1))} >prev</PageButtons>&nbsp;&nbsp;
                    <PageButtons>{page}</PageButtons>&nbsp;&nbsp;
                    <PageButtons disabled={data.length < 6} onClick={() => (setPage((p) => p + 1))}>next</PageButtons>
                </div>
            </ProductContainer>

        </Container>
    )
}


const Select = styled.select`
 padding: 10px;
  color: gray;
   border: none;
    outline: none; 
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`
const EmptyCard=styled.div`
height:250px;
margin:auto;
width:90%;
background-repeat: no-repeat;
background-image:url(https://www.shutterstock.com/image-vector/mechanism-crossed-eye-sign-no-260nw-2311832361.jpg);
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`
const Button = styled.button`
display:none;
 padding:10px 10px;
 border:none;
 background-color:#FF324D;
 color:white;
 font-weight:600;
 border-radius:5px;

 @media (max-width:767px){
    display:block;
 }
`

const Image = styled.img`
 width: 100%;
 height: 100%;
  object-fit: contain 
`
const PriceDiv = styled.div`

    display: flex;
    align-items: center

`
const S = styled.s`
    color: gray;
`
const Strong = styled.strong`
    color: red;
`
const Card = styled.div`
  
    border-radius: 5px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

`
const ContentBox = styled.div`

    text-align: start;
    display: grid;
    gap: 5px;
    padding: 10px 

`
const AlignStart = styled.div`
 display:flex;
 flex-wrap:wrap;
 align-items: center;

 justify-content:space-between;
 text-align: start;
 @media (max-width:767px){
    padding:0px 10px;
 }

`

const CardItem = styled.div`

    height: 40vh;
    background-color: #fafafa

`


const GridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
  margin-top: 20px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr); 
  }
  @media (min-width: 768px) and ( max-width :1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


const ProductContainer = styled.div`
  width:75%;
  @media (max-width:767px){
    width:100%;
    marginTop:-100%;   
}
@media (min-width:768px) and  (max-width:1023px){ 
    width:80%
}

  `
const Addtocart = styled.button`

    padding:5px;
    background-color:#FF324D;
    color:white;
    border:none;
    font-weight:700;
    border-radius:5px

`


const PageButtons = styled.button`
  padding:10px;
  background-color: ${props => props.disabled ? 'gray' : '#FF324D'};

  color:white;
  border:none;
  border-radius:5px;
  

  `
const Container = styled.div`
    display: flex;
    width:80%;
    justify-content:space-between;
    margin:5% auto ;
    gap:20px;
    
    @media (max-width:767px){
        width:100%;
        display:block;
    }
    @media (min-width:768px) and  (max-width:1023px){ 
        width:100%
    }

  
`
