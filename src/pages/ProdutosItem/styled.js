import styled from "styled-components";

export const ProductContainer = styled.div`
    display:flex;
    flex-direction: row;


    > img {
        width: 300px;
        height: 300px;
    }

`;

export const ProductDetails = styled.div`
     position: absolute;
     top: 300px;
     left: 100px;
     width: 600px;
     background: rgba(255,255,255,0.8);
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     text-align: center;
     padding: 20px;
     box-shadow: 0 0 10px rgba(0,0,0,0.1);

     img{
        width: 100%;
        max-width: 500px;
        height: auto;
        margin-bottom: 10px;
     }

     h2{
         font-size: 18px;
         margin-bottom: 10px;
     }

     p{
         font-size: 14px;
         margin-bottom: 10px;
     }

     svg{
         cursor: pointer;
         color: #43639d;
     }
`;