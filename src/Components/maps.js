import React from 'react'
import styled from 'styled-components'
import Map from '../Images/maps.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

const MapsStyled = styled.div`
  background-color: #0C0B0C;
  color: White;
  .grid {
    padding: 50px 10px;
  }
  .maps-div {
    text-align: start;
    p {
      margin: 20px 0;
      color: #69685E; 
    }
  }
  .title {
    font-size: 40px;
    span {
      color: #0cacbc
    }
  }
  .social-maps {
    display: flex;
  }
  a {
    display: flex;
    background-color: white;
    border-radius: 100%;
    padding: 5px;
    color: #0C0B0C;
    margin-right: 30px;
  }
  .map-img {
    margin-top: 20px;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    .grid {
      padding: 100px 50px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      align-items: flex-start;
    }
    .map-img {
      margin-top: 0px;
      width: auto;
    }
  }
`
function Maps() {
  return (
    <MapsStyled>
      <div className="grid">
        <div className="maps-div">
          <h1 className="title">
            ¿Estás listo? <span>Contacte</span> con nosotros
          </h1>
          <p>
            ¿Listo para comenzar un proyecto o asesoría de uno?
            Entonces contacte con nosotros y le ofrecemos la 
            mejor experiencia de trabajo.
          </p>
          <div className="social-maps">
            <a href="https://instagram.com/akuarium_mendoza?utm_medium=copy_link">
              <FaFacebookF size="25px" style={{cursor:'pointer'}}/>
            </a>
            <a href="https://instagram.com/akuarium_mendoza?utm_medium=copy_link">
              <FaInstagram size="25px" style={{cursor:'pointer'}}/>
            </a>
            <a href="https://instagram.com/akuarium_mendoza?utm_medium=copy_link">
              <GrMail size="25px" style={{cursor:'pointer'}}/>
            </a>
          </div>
        </div>
        <img src={Map} alt="mapa" className="map-img"/>
      </div>
    </MapsStyled>
  )
}

export default Maps
