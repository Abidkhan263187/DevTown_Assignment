import React from 'react'
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components'
import { Rating } from './Rating';


export const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const cat = searchParams.get('category')
    const size = searchParams.get('size')
    const rat = searchParams.get('rating')
    return (
        
            <FilterOptions >

                <div>
                    <Heading > Filter By Categories</Heading>
                    <OptionDiv onChange={(e) => {
                        const { value } = e.target
                        searchParams.set('category', value === cat ? "" : value)
                        setSearchParams(searchParams)
                    }} >

                        <label htmlFor=""> <input type='checkbox' checked={cat === "Men"} value="Men" /> Mens</label>
                        <label htmlFor=""> <input type='checkbox' checked={cat === "Women"} value="Women" /> Womens</label>
                        <label htmlFor=""> <input type='checkbox' checked={cat === "Kids"} value="Kids" /> Kids</label>
                    </OptionDiv>

                </div>

                <div>
                    <Heading> Filter By Size</Heading>
                    <OptionDiv onChange={(e) => {
                        const { value } = e.target
                        searchParams.set('size', value === size ? '' : value)
                        setSearchParams(searchParams)
                    }} >
                        <label htmlFor=""> <input type='checkbox' checked={size === "m"} value="m" /> M</label>
                        <label htmlFor=""> <input type='checkbox' checked={size === "s"} value="s" /> S</label>
                        <label htmlFor=""> <input type='checkbox' checked={size === "l"} value="l" /> L</label>
                        <label htmlFor=""> <input type='checkbox' checked={size === "xl"} value="xl" /> XL</label>
                        <label htmlFor=""> <input type='checkbox' checked={size === "xxl"} value="xxl" /> XXL</label>
                        <label htmlFor=""> <input type='checkbox' checked={size === "xxxl"} value="xxxl" /> XXXL</label>
                    </OptionDiv>
                </div>
                <div>
                    <Heading> Filter By Rating</Heading>
                    <OptionDiv onChange={(e) => {
                        const { value } = e.target
                        searchParams.set('rating', value === rat ? '' : value)
                        setSearchParams(searchParams)
                    }} >
                        <label htmlFor="" style={{ display: 'flex' }}> <input type='checkbox' checked={rat === "1"} value="1" />&nbsp; <Rating rating='1' /></label>
                        <label htmlFor="" style={{ display: 'flex' }}> <input type='checkbox' checked={rat === "2"} value="2" />&nbsp; <Rating rating='2' /></label>
                        <label htmlFor="" style={{ display: 'flex' }}> <input type='checkbox' checked={rat === "3"} value="3" />&nbsp; <Rating rating='3' /></label>
                        <label htmlFor="" style={{ display: 'flex' }}> <input type='checkbox' checked={rat === "4"} value="4" />&nbsp; <Rating rating='4' /></label>
                        <label htmlFor="" style={{ display: 'flex' }}> <input type='checkbox' checked={rat === "5"} value="5" />&nbsp; <Rating rating='5' /></label>
                    </OptionDiv>
                </div>
                <div>
                    <Heading> Product Status</Heading>
                    <OptionDiv >
                        <label htmlFor=""> <input type='checkbox' /> In Stock </label>
                        <label htmlFor=""> <input type='checkbox' /> On Sale </label>
                    </OptionDiv>
                </div>
                <Banner >
                    <Content >
                        <h3>New Collection</h3>
                        <h1>Sale 30% Off</h1>
                        <ShopButton >SHOP NOW</ShopButton>
                    </Content>
                </Banner>

            </FilterOptions>
       
    )
}
const ShopButton = styled.button`

    padding: 10px;
    border: none;
    width: 40%

 `
const Banner = styled.div`

    background-image: url(https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/sidebar_banner_img-1.jpg);
    height: 350px;
    color: white;
    marginTop: 30px
`
const Content = styled.div`

    padding: 70% 0px 0px 20px;
    height: max-content

`
const FilterOptions = styled.div`
    width:25%;
    text-align:start;
    @media (max-width: 767px) {
    display:none;
    
      }
    
   
  
`
const OptionDiv = styled.div`

    display:grid;
    color:gray;
    text-align:start;
    padding:10px 20px

`

const Heading = styled.div`
    padding: 10px;
    background-color: #E9EAEA

`