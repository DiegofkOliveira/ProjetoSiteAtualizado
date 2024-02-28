import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F8F8FF;
  align-items: center;
  text-align: center;

  > header {
    flex-direction: column;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background-color: #F8F8FF;

    > img {
      width: 200px;
      height: 200px;
    }

    a {
      text-decoration: none;
      color: #43639d;
      font-family: 'Open sans', sans-serif;
      font-size: 24px;
      margin: 0 15px;
      transition: color 0.3s, font-size 0.3s ease;
      &:hover {
        color: #f0c918;
        font-size: 30px;
      }
    }
  }

  >main {
        width: 100%;
        height:700px;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: stretch;
        gap: 10px;
        margin-top: 20px;

  }
  
  >div:nth-last-of-type(1){
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 8px;
    font-family: 'open sans' sans-serif;
    color: #43639d;
    background-color: #F5F5F5;
    border-radius: 0px 0px 10px 10px;
  }
`;

export const Pesquisa = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  margin-top: 70px;
  border-radius: 10px;
  background-color: #F8F8FF;

    >div:nth-child(1){
      display: flex;
      flex-direction: row;

         button:nth-child(1) {
          width: 50px;
          height: 50px;
          font-size: 20px;
          text-align: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          transition: color 0.3s, font-size 0.3s ease;
          cursor: pointer;
          background-color: transparent;
          color: #43639d;
          box-shadow: 4px 4px 8px rgba(119, 136, 153);

            &:hover {
              font-size: 24px;
              color: #f0c918;
              box-shadow: 8px 8px 16px rgba(119, 136, 153);
            }
          }

          >div:nth-child(2) {
            display: flex;
            width: 400px;
            height: 50px;
            margin-left:  20px;
            align-items: center;
            justify-content: center;
            text-align: center;
            border-radius: 20px;
            color: transparent;
            font-style: normal;
            box-shadow: 8px 8px 8px rgba(119,136,153);

            input {
              border: none;
              font-family:  'Open sans', sans-serif;
              font-size: 22px;
              color: #43639d;
              text-align: center;
              justify-content: center;
              align-items: center;
              border-radius: 20px;
              background-color: transparent;

              &::placeholder {
                color: #43639d;
              }

              &:focus {
                outline: none;
              }
            }

            button {
              width: 50px;
              height: 50px;
              font-size: 22px;
              text-align: center;
              justify-content: center;
              align-items: center;
              border: none;
              border-radius: 50%;
              transition: color 0.3s, font-size 0.3s ease;
              cursor: pointer;
              background-color: transparent;
              color: #43639d;

              &:hover {
                font-size: 26px;
                color: #f0c918;
              }
        }
      }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 100px 300px 0px 300px;
  align-items: start;
  justify-content: center;
  gap: 300px;
  border-radius: 10px 10px 0px 0px;
  background-color: #F5F5F5;


  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
      width: 100px;
    }

    h1{
      font-size: 21px;
      font-family:  'Open sans', sans-serif;
      color: #43639d;
    }

    p{
      font-size: 18px;
      font-family:  'Open sans', sans-serif;
      color: #43639d;
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
      font-size: 21px;
      font-family: 'Open sans', sans-serif;
      color: #43639d;
    }

    p{
      width: 300px;
      font-size: 18px;
      font-family: 'Open sans', sans-serif;
      color: #43639d;
    }
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
      font-size: 21px;
      font-family: 'Open sans', sans-serif;
      color: #43639d;
    }

    p {
      font-size: 18px;
      font-family: 'Open sans', sans-serif;
      color: #43639d
    }

    >div:nth-child(4){
      display: flex;
      gap: 20px;

      button {
      width: 40px;
      height: 40px;
      font-size: 26px;
      text-align: center;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 50%;
      transition: color 0.3s, font-size 0.3s ease;
      cursor: pointer;
      background-color: transparent;
      color: #43639d;
        &:hover {
          font-size: 32px;
          color: #f0c918;
         }
    }
  }
  }
`;

