import React from 'react'
import styled from 'styled-components'
import HomeImage from '../Images/background-home.png'
import  {AiOutlineLine } from 'react-icons/ai'
import Services from '../Components/services'
import Projects from '../Components/projects'
import Maps from '../Components/maps'

const HomeStyled = styled.div`
  color: white;
  text-align: center;
  margin: 50px 0 0 0;
  color: #0C0B0C;
  .title {
    font-size: 35px;
  }
  .home {
    display: grid;
    justify-self: center;
    width: 100%;
  }
  .home-div {
    text-align: start;
    padding: 0 10px;
    .title {
      color: #0C0B0C;
      margin: 0;
    }
    span {
    color: #0cacbc;
    }
    div {
      padding: 5px 0;
      display: flex;
      align-items: center;
      .name {
        margin: 0 10px;
      }
    }
  }
  .home-img {
    width: 100%;
  }
  .description {
    font-size: 15px;
    p {
      margin: 0;
      color: #69685E;
      line-height: 20px;
    }
  }
  button {
    font-size: 15px;
    padding: 12px 20px;
    cursor: pointer;
  }
  .btn-1 {
    margin-right: 20px;
    font-weight: 500;
    transition-delay: 0.1s;
    border: solid 2px #0C0B0C;
    color: white;
    background-color: #0C0B0C;
  }
  .btn-1:hover {
    color: #0C0B0C;
    background-color: white;
  }
  .btn-2 {
    font-weight: 500;
    transition-delay: 0.1s;
    border: solid 2px #0C0B0C;
    color: #0C0B0C;
    background-color: white;
  }
  .btn-2:hover {
    color: white;
    background-color: #0C0B0C;
  }
  .separator {
    height: 100px;
  }

  @media screen and (min-width: 1024px) {
    .home {
    grid-template-columns: repeat(2, 1fr);
    justify-items: end;
    align-items: center;
    }
    .home-div {
      padding: 0;
      margin-left: 100px;
    }
    .home-img {
      width: 570px;
    }
    .title {
    font-size: 50px;
    }
    .description {
    font-size: 20px;
      p {
        line-height: 30px;
      }
    }
    button {
      padding: 12px 40px;
    }
  }
`
function Home() {
  return (
    <HomeStyled>
    <main>
      <section className="home">
        <div className="home-div">
          <h1 className="title">
            El <span>mejor acuarismo</span> especializado de Mendoza
          </h1>
          <div>
            <AiOutlineLine size="35px"/>
            <p className="name">Akuarium</p>
          </div>
          <div className="description">
            <p className="p">
              En akuarium hacemos el diseño de 
              espacios acuáticos interiores y exteriores. Y tenemos
              los mejores productos.
            </p>
          </div>
          <div style={{marginTop: '20px'}}>
            <button className="btn-1">Contáctanos</button>
            <button className="btn-2">Mira nuestro trabajo</button>
          </div>
        </div>
        <img className="home-img" src={HomeImage} alt="home"/>
      </section>
      <div className="separator"></div>
      <Services />
      <Projects />
      <Maps />
    </main>
    </HomeStyled>
  )
}

export default Home
