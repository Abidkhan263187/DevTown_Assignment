import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'



export const ProductPage = () => {

    const [data,setData]=useState([])

    useEffect(()=>{
     (async()=>{
        try {
           await axios.get(`http://localhost:8080?sortby=price&category=Men&order=asc&limit=6&pageNo=1`).then(({data})=>{
                console.log(data.data)
                setData(data.data)
            })
        } catch (error) {
            
        }
     })()
    },[])

    return (
        <Container >

            {/* filter option */}
            <FilterOptions >

                <div>
                    <Heading > Filter By Categories</Heading>
                    <OptionDiv>
                        <label htmlFor=""> <input type='checkbox' /> All</label>
                        <label htmlFor=""> <input type='checkbox' /> Mens</label>
                        <label htmlFor=""> <input type='checkbox' /> Womens</label>
                        <label htmlFor=""> <input type='checkbox' /> Kids</label>
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

         <div>
            <div style={{
            // border:'1px solid',
            textAlign:'start'
         }}>
            <select style={{padding:'10px',color:'gray',border:'none',outline:'none',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}} name="" id="">
                <option value="">Select Here For Sort</option>
                <option value="">Sort By Latest</option>
                <option value="">Sort By Poplular</option>
                <option value="">Sort By Price : Low To High</option>
                <option value="">Sort By Price : High To Low</option>
            </select>
          
            </div>
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(3,1fr)',
                width:'100%',
               
                gap:'30px 20px',
                marginTop:'20px'
               
            }}>
                {data.map((elem,ind)=>{
                    return (
                        <div style={{
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
                              <button style={{
                                padding:'5px',
                                backgroundColor:'#FF324D',
                                color:'white',
                                border:'none',
                                fontWeight:'700',
                                borderRadius:'5px'
                              }}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })}
               
            </div>
            <div style={{
    
                    margin:"10% auto"
                }}>
                <PageButtons>prev</PageButtons>&nbsp;&nbsp;
                <PageButtons>1</PageButtons>&nbsp;&nbsp;
                <PageButtons>next</PageButtons>
            </div>
         </div>
            
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

  const PageButtons=styled.button`
  padding:10px;
  background-color:#FF324D;
  color:white;
  border:none;
  border-radius:5px

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
    width:30%;
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