import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'


const Card = ({circleimg,title,body,imageurl,Subtitle,paragraphtag,btn}) => 
<div className='graycolor'>
  <div>
 <div className='contentdiv'>
 <img src ={circleimg} className="imgclass"/> 


<h3>{title}</h3>  </div>
<div className='alignment'>
<p >{body}</p>
<img src={imageurl}/>

<h3>{Subtitle}</h3>
<p style={{color: "red"}}>{paragraphtag}</p>
<button className='bbtn'>{btn}</button>
</div>
</div>
</div>;


const Cardpage = ()=>
<>

<Card 
 circleimg = "https://picsum.photos/200/300"
title ="Facebook"
 body="Connect with us"
  imageurl="https://picsum.photos/300/400"
  Subtitle="www.facebook.com"
  paragraphtag= "This is testing for facebook" 
  btn="connect fb"/>
  <Card 
 circleimg = "https://picsum.photos/200/300"
title ="Twitter"
 body="Connect with twitter"
  imageurl="https://picsum.photos/300/400"
  Subtitle="www.twitter.com"
  paragraphtag= "This is testing for twitter" 
  btn="connect twitter"/>
  <Card 
 circleimg = "https://picsum.photos/200/300"
title ="Instagram"
 body="Connect with Instagram"
  imageurl="https://picsum.photos/300/400"
  Subtitle="www.Instagram.com"
  paragraphtag= "This is testing for facebook" 
  btn="connectinstgram"/>

</>




ReactDOM.render(<Cardpage/>,document.querySelector("#root"))



