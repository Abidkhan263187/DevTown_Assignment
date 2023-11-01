import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSearchParams } from "react-router-dom";



export const ProductPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page,setPage]=useState(1);
    const [sort,setSort]=useState()
    const [data,setData]=useState([])

 
const cat=searchParams.get('category')
console.log(cat)
var url=`http://localhost:8080`
    useEffect(()=>{
        
     (async()=>{
    if(cat!==""){
        url+=`?category=${cat}`
    }
   
        try {
           await axios.get(url).then(({data})=>{
                console.log(data.data)
                setData(data.data)
            })
        } catch (error) {
            
        }
     })()
    },[page,sort,cat])

   
   
    return (
        <Container >

            {/* filter option */}
            <FilterOptions >

                <div>
                    <Heading > Filter By Categories</Heading>
                    <OptionDiv onChange={(e)=>setSearchParams({
                        category:e.target.value
                    })} >
                        <label htmlFor=""> <input type='checkbox' value="" /> All</label>
                        <label htmlFor=""> <input type='checkbox' value="Men" /> Mens</label>
                        <label htmlFor=""> <input type='checkbox' value="Women" /> Womens</label>
                        <label htmlFor=""> <input type='checkbox' value="Kids" /> Kids</label>
                    </OptionDiv>

                </div>

                <div>
                    <Heading> Filter By Size</Heading>
                    <OptionDiv >
                        <label htmlFor=""> <input type='checkbox' /> M</label>
                        <label htmlFor=""> <input type='checkbox' /> S</label>
                        <label htmlFor=""> <input type='checkbox' /> L</label>
                        <label htmlFor=""> <input type='checkbox' /> XL</label>
                        <label htmlFor=""> <input type='checkbox' /> XXL</label>
                        <label htmlFor=""> <input type='checkbox' /> XXXL</label>
                    </OptionDiv>
                </div>
                <div>
                    <Heading> Filter By Rating</Heading>
                    <OptionDiv >
                        <label htmlFor="" style={{display:'flex'}}> <input type='checkbox'/>&nbsp; <Rating rating='1'/></label>
                        <label htmlFor=""style={{display:'flex'}}> <input type='checkbox' />&nbsp; <Rating rating='2'/></label>
                        <label htmlFor=""style={{display:'flex'}}> <input type='checkbox' />&nbsp; <Rating rating='3'/></label>
                        <label htmlFor=""style={{display:'flex'}}> <input type='checkbox' />&nbsp; <Rating rating='4'/></label>
                        <label htmlFor=""style={{display:'flex'}}> <input type='checkbox' />&nbsp; <Rating rating='5'/></label>
                    </OptionDiv>
                </div>
                <div>
                    <Heading> Product Status</Heading>
                    <OptionDiv >
                        <label htmlFor=""> <input type='checkbox' /> In Stock </label>
                        <label htmlFor=""> <input type='checkbox' /> On Sale </label>
                    </OptionDiv>
                </div>
                <div style={{
                    backgroundImage:'url(https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/sidebar_banner_img-1.jpg)',
                    height:'350px',
                    color:'white',
                    marginTop:'30px'
                    
                   
                }}>
                     <div style={{
                        padding:'70% 0px 0px 20px',
                        height:'max-content'
                     }}>
                        <h3>New Collection</h3>
                        <h1>Sale 30% Off</h1>
                        <button style={{
                            padding:'10px',
                            border:'none',
                            width:'40%'
                        }}>SHOP NOW</button>
                     </div>
                </div>

            </FilterOptions>

         <ProductContainer> 
            <div style={{
            // border:'1px solid',
            textAlign:'start'
         }}>
            <select onChange={(e)=>setSort(e.target.value)} style={{padding:'10px',color:'gray',border:'none',outline:'none',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}} name="" id="">
                <option value="undefined">Select Here For Sort</option>
                {/* <option value="">Sort By Latest</option>
                <option value="">Sort By Poplular</option> */}
                <option value="asc">Sort By Price : Low To High</option>
                <option value="desc">Sort By Price : High To Low</option>
            </select>
          
            </div>
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(3,1fr)',
                width:'100%',
               border:'1px solid',
                gap:'30px 20px',
                marginTop:'20px'
               
            }}>
                {data.map((elem,ind)=>{
                    return (
                        <div key={ind} style={{
                        borderRadius:'5px',
                         boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
                        }}>
                            <div style={{
                                height:"40vh",
                              
                                backgroundColor:'#fafafa'
                            }}>
                                <img  style={{width:'100%',height:'100%',objectFit:'fill'}}
                                
                        
                                src={elem.img} alt="" />
                            </div>
                            <div style={{
                                textAlign:'start',
                                display:'grid',
                                gap:'5px',
                                padding:'10px '
                            }}>
                                <h4>{elem.name}</h4>
                                <div style={{
                                    display:'flex',
                                    alignItems:'center'
                                }}>
                                    <s style={{
                                        color:'gray'
                                       
                                    }}>${Math.floor(elem.mrp)}</s>&nbsp;&nbsp;&nbsp;
                                    <strong style={{
                                        color:'red'
                                    }}>${Math.floor(elem.price)}</strong>
                                    
                                </div>
                                <Rating rating={elem.rating} />
                              <Addtocart >Add To Cart</Addtocart>
                            </div>
                        </div>
                    )
                })}
               
            </div>
            <div style={{
    
                    margin:"10% auto"
                }}>
                <PageButtons onClick={()=>(setPage((p)=>p-1))} >prev</PageButtons>&nbsp;&nbsp;
                <PageButtons>{page}</PageButtons>&nbsp;&nbsp;
                <PageButtons  onClick={()=>(setPage((p)=>p+1))}>next</PageButtons>
            </div>
         </ProductContainer>
            
        </Container>
    )
}
const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} role="img" aria-label="Star">
           <i  style={{color:'#f6bc3e'}}class="fa-solid fa-star"></i>
          </span>
        );
      } else {
        stars.push(
          <span key={i} role="img" aria-label="Star">
            <i style={{color:'gray'}} class="fa-solid fa-star"></i>
          </span>
        );
      }
    }
  
    return <div>{stars}</div>;
  };


  const ProductContainer=styled.div`
  width:75%;
  `
const Addtocart=styled.button`

    padding:5px;
    background-color:#FF324D;
    color:white;
    border:none;
    font-weight:700;
    border-radius:5px

`

  const PageButtons=styled.button`
  padding:10px;
  background-color: ${props => props.disabled ? 'gray' : '#FF324D'};

  color:white;
  border:none;
  border-radius:5px;
  

  `
const Container = styled.div`
    display: flex;
    width:80%;
    margin:5% auto ;
    ;
    gap:20px
  
`
const FilterOptions = styled.div`
    ;
    width:25%;
    text-align:start;
  
`
const OptionDiv = styled.div`

    display:grid;
    color:gray;
    text-align:start;
    padding:10px 20px

`

const Heading=styled.div`
    padding: 10px;
    background-color: #E9EAEA

`