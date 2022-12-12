import React from "react";
import styled from "styled-components";
import SmallHead from "./SmallHead";
import blockchain from '../assets/bchain.png';
import loan from '../assets/loan.jpg'
const Content = () => {
    return ( 
        <ContentStyle>
            <div className="content">
                <div className="left">
                    <SmallHead title={""} identifier={'Before'}/>
                    <h1>
                        
                    </h1>
                    <p>
                       

                    </p>
                </div>
                <div className="right">
                    
                <img  alt="" />
                </div>
            </div>
        </ContentStyle>
    );
}

const ContentStyle = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .left{
        text-align: center;
    }
    
    

    .content{
        color: black;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
                font-size: 1.5em;
            }
        }
        .right{
            position: absolute;
            right: -11%;
            bottom: -1%;
            width: 60%;
        }
    }
`;

export default Content ;