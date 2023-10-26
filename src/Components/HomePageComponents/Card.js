import React from "react";
import { styled } from "styled-components";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

function StarCard(elem) {
  if (!elem || !elem.photo || !elem.price || !elem.city || !elem.projectName) {

    return (
      <Wrapper className="section">
        <div>Loading...</div>
      </Wrapper>
    );
  }
  const{photo,price,city,projectName,location,_id} =elem;
  const Url=`/${projectName}/${_id}`
  
  return (
    <Wrapper className="section">
    <Link to={Url}>
    <div className='w9HDn0'>
      <div className='sQoIH w-100 h-auto'>
        <div className='xjNJ w-100'>
          <img
            src={photo[0].url}
            alt=''
            className="w-100 h-100"
          />
        </div>
        <div className='eoiU d-flex align-items-center'>
          <div className='dsfds43 d-flex align-items-center'>
            <div className='q2jam'>
              <MdLocationPin size={14} color='#0a9e88' />
            </div>
            <div style={{ fontWeight: "600", fontSize: "14px" }}>{location}</div>
          </div>
        </div>
      </div>
      <div className='w238N'>
        <h2>{projectName}</h2>
        <p style={{margin:"0px",marginTop:"14px"}}>
          Starting at <span>₹ {price} CR/-</span>
        </p>
      </div>
    </div>
    </Link>
    </Wrapper>
  );
}

export default StarCard;

const Wrapper=styled.section`
*{
  font-family: 'DM Sans', sans-serif;
}
.w9HDn0 {
    height: 280px;
    border-radius: 15px;
    margin-left:10px;
    margin-right:5px;
  }
  .sQoIH {
    margin-bottom:10px;
  }
  .xjNJ {
    height: 200px;
  }
  .xjNJ img {
    border-radius: 15px;
  }
  .dsfds43{
    padding:2px;
    color:#0a9e88;
  }
  .q2jam{
    padding:0px 7px;
  }
  .w238N h2{
    color:#3a3a3a;
    font-size:1.3vw;
    font-weight:600;
    padding-left:8px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    line-height:1;
  }
  .w238N p{
    font-size:1vw;
    font-weight:400;
    color:#3a3a3a;
    padding-left:8px;
    line-height:0;
  }
  .w238N p span{
    color:#3a3a3a;
    font-size:1.2vw;
    font-weight:600;
    padding-left:8px;
  }
  .w9HDn0:hover{
    cursor:pointer;
  }
  @media screen and (max-width:600px){
    .w238N h2{
      font-size:large;
    }
    .w238N p{
      font-size:medium;
    }
    .w238N p span{
      font-size:large;
    }
  }
`

// box-shadow: 0px 0px 30px 0px #0000001a;
