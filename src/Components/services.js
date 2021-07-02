import React from 'react'
import styled from 'styled-components'
import FishBowl from '../Images/fishbowl.jpg'
import { GiAquarium } from 'react-icons/gi'
import { GrHostMaintenance } from 'react-icons/gr'
import { GoReport } from 'react-icons/go'
import { SiMaterialdesign } from 'react-icons/si'

const ServicesStyled = styled.div`
  background-color: #0C0B0C;
  color: White;
  .grid {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 50px;
  }
  img {
    margin-top: -40px;
  }
  .services-div {
    text-align: left;
    margin: 40px 100px 0 0;
    p {
      margin: 40px 0;
      color: #C1BABB;
    }
  }
  .title {
    font-size: 40px;
    span {
      color: #0cacbc
    }
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  .card {
    padding: 20px;
    background-color: white;
    color: #0C0B0C;
    p {
      margin: 20px 0;
      color: #0C0B0C;
    }
  }
  .services-btn {
    font-weight: 700;
    border: none;
    color: white;
    padding: 10px 40px;
    background-color: #0cacbc;
    margin-top: 20px;
  }
`
function Services() {
  return (
    <ServicesStyled>
      <div className="grid">
        <img src={FishBowl} alt="pecera" width="500px"/>
        <div className="services-div">
          <h1 className="title">
            Conozca los <span>servicios</span> que ofrecemos para tí
          </h1>
          <p>
          Akuarium es una empresa que nace en el año 2009 
          materializando 15 años 
          de experiencia en el rubro del acuarismo.
          </p>
          <div className="card-grid">
            <div className="card">
              <GiAquarium size="35px"/>
              <h3>Acuarios</h3>
              <p>
                Fabricación de acuarios 
                especiales a medida. 
              </p>
            </div>
            <div className="card">
              <GrHostMaintenance size="35px"/>
              <h3>Mantención</h3>
              <p>
              Mantenimiento domiciliario a empresas 
              y particulares. 
              </p>
            </div>
            <div className="card">
              <GoReport size="35px"/>
              <h3>Asesoría</h3>
              <p>
                Asesoría en 
                acuarismo marino y agua dulce.
              </p>
            </div>
            <div className="card">
              <SiMaterialdesign size="35px"/>
              <h3>Diseño</h3>
              <p>
                Diseño de espacios acuáticos 
                interiores y exteriores. 
              </p>
            </div>
          </div>
          <button className="services-btn">
            Contactar
          </button>
        </div>
      </div>
    </ServicesStyled>
  )
}

export default Services
