import React from 'react'
import styled from 'styled-components'

const SectionSL = styled.section`
    background-image: url(https://tiendakalendar.vteximg.com.br/arquivos/Banner-Hombre-Jeansd.jpg?v=637613629546200000);
    background-size: cover;
    height: 100vh;
`

const Home = () => {
    return (
        <SectionSL className="d-flex align-items-center">
            <div className="ms-5">
                <h1>Bienvenido a Primal</h1> <br />
                <h2>La Tienda de Moda para Hombres que te hará <br /> lucir un estilo único y formidable</h2>
            </div>
        </SectionSL>
    )
}

export default Home