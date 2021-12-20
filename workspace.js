import React from 'react';
import {useState} from 'react';
import './index.css';
import ContImg from './ContImg.jpg';
import Vrimg from './Vrimg.jpg';
import {data1,data2} from "./data";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import pinterest from "./pinterest.svg";
import instagram from "./instagram.svg";
import Close from "./Close.svg";

import imagehero from "./Images/imagehero.jpg";
import interactive from"./Images/interactive.jpg";

const Lcreation1 = (props)=>{
    const {img,text}=props;
    return(
        <>
            <div className="loopImg">
                <img src={img} alt="img"/>
                <div className="hoverB">
                    <div className="text">
                        <h3>{text}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
export const Main1 = ()=>{
    const [click,isClicked] = useState(false);
    return(
        <>
            <div className="head_container">
                <img src={ContImg} alt="img"/> 
                <div className="head">
                    <div className="brandName">
                        <h1>loopstudios</h1>
                    </div>
                    <div className="hambuger" 
                    onClick={()=>isClicked(!click)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                {
                    click ?
                    <div className="Lmenu"
                    style={{left:"0%"}}>
                        <div className="head">
                            <div className="brandName">
                            <h1>loopstudios</h1>
                            </div>
                            <img src={Close} alt="close"
                            onClick={()=>isClicked(false)}/>
                        </div>
                        <div className="Lbody">
                            <h1>About</h1>
                            <h1>Careers</h1>
                            <h1>Events</h1>
                            <h1>Products</h1>
                            <h1>Support</h1>
                        </div>
                    </div>
                    :
                    <div className="Lmenu"
                    style={{left:"-100%"}}>
                        <div className="head">
                            <div className="brandName">
                                <h1>loopstudios</h1>
                            </div>
                            <img src={Close} alt="close"
                            onClick={()=>isClicked(false)}/>
                        </div>
                        <div className="Lbody">
                            <h1>About</h1>
                            <h1>Careers</h1>
                            <h1>Events</h1>
                            <h1>Products</h1>
                            <h1>Support</h1>
                        </div>
                    </div>
                }

                <div className="display">
                    <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                </div>
            </div>
            <img className="vrImg" src={Vrimg} alt=""/>
            <div className="VR">
                <h1>THE LEADER IN 
                INTERACTIVE VR
                </h1>
                <h3>Founded in 2011. loopstudios has been
                    producing world-class virtual reality
                    projects for some of the best companies
                    around the globe. Our award-winning 
                    creations have transformed business 
                    through digital experiences that bind to
                    their brand.
                </h3>
            </div>
            <div className="creation">
                <h1>OUR CREATIONS</h1>
            </div>
            <div className="loop1">
                {
                    data1.map((items)=>{
                        return(
                            <Lcreation1 {...items} key={items.id}/>       
                        )
                        
                    })
                }
            </div>
            <div className="seeAll">
                <h3>SEE ALL</h3>
            </div>
            <div className="footer">
                <div className="footerName">
                <h2>loopstudios</h2>
                </div>
                <div className="menu">
                    <h3>About</h3>
                    <h3>Careers</h3>
                    <h3>Events</h3>
                    <h3>Products</h3>
                    <h3>Support</h3>
                </div>
                <div className="icons">
                    <img src={facebook} alt="f"/>
                    <img src={twitter} alt="t"/>
                    <img src={pinterest} alt="p"/>
                    <img src={instagram} alt="i"/>
                </div>
                <div className="reserved">
                    2021 Loopstudios. All rights reserved.
                </div>
            </div>
        </>
    )
}

const Lcreation2 = (props)=>{
    const {img,text}=props;
    return(
        <>
            <div className="loopImg">
                <img src={img} alt="img"/>
                <div className="hoverB">
                    <div className="text">
                        <h3>{text}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Main2 = ()=>{
    return(
        <>
            <div className="head_container">
                <img src={imagehero} alt="img"/> 
                <div className="head">
                    <div className="brandName">
                        <h1>loopstudios</h1>
                    </div>
                    <div className="menu">
                            <h3>About</h3>
                            <h3>Careers</h3>
                            <h3>Events</h3>
                            <h3>Products</h3>
                            <h3>Support</h3>
                    </div>
                </div>
                <div className="display">
                    <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                </div>
            </div>
            <img className="vrImg" src={interactive} alt=""/>
            <div className="VR">
                <h1>THE LEADER IN 
                INTERACTIVE VR
                </h1>
                <h4>Founded in 2011. loopstudios has been
                    producing world-class virtual reality
                    projects for some of the best companies
                    around the globe. Our award-winning 
                    creations have transformed business 
                    through digital experiences that bind to
                    their brand.
                </h4>
            </div>
            <div className="creation">
                <h1>OUR CREATIONS</h1>
                <div className="seeAll">
                    <h6>SEE ALL</h6>
                </div>
            </div>
            <div className="loop2">
                {
                    data2.map((items)=>{
                        return(
                            <Lcreation2 {...items} key={items.id}/>       
                        )
                        
                    })
                }
            </div>
            <div className="footer">
                <div className="footerName">
                    <h1>loopstudios</h1>
                <div className="icons">
                    <img src={facebook} alt="f"/>
                    <img src={twitter} alt="t"/>
                    <img src={pinterest} alt="p"/>
                    <img src={instagram} alt="i"/>
                </div>
                </div>
                <div className="menu">
                    <p>About</p>
                    <p>Careers</p>
                    <p>Events</p>
                    <p>Products</p>
                    <p>Support</p>
                    <div className="reserved">
                    2021 Loopstudios. All rights reserved.
                    </div>
                </div>
            </div>
        </>
    )
}
