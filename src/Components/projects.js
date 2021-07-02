import React from 'react'
import styled from 'styled-components'
import ProjectsImg from '../Images/projects.png'

const ProjectsStyled = styled.div`
  .grid {
    margin: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
  }
  .projects-div {
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
  .projects-btn {
    font-weight: 500;
    border: solid 2px #0C0B0C;
    color: white;
    background-color: #0C0B0C;
  }
  .projects-btn:hover {
    color: #0C0B0C;
    background-color: white;
  }
`
function Projects() {
  return (
    <ProjectsStyled>
      <div className="grid">
        <div className="projects-div">
          <h1 className="title">
            Observa algunos de los <span>proyectos</span> que hemos realizado
          </h1>
          <p>
            Contamos con un taller acondicionado 
            para el trabajo con vidrio, madera y metal 
            donde se realiza el armado de acuarios, filtros 
            y muebles para acuarios familiares, empresas, 
            consultorios, estudios, hoteles y restaurantes.
          </p>
          <button className="projects-btn">
            Ver proyectos
          </button>
        </div>
        <img src={ProjectsImg} alt="proyectos"width="500px"/>
      </div>
    </ProjectsStyled>
  )
}

export default Projects
