import React from 'react'
import Brand from './Brand'
import Container from './Container'
import GlobalStyle from './GlobalStyle'
import Chart from './Chart'
function Dashboard() {
  return (
    <>
    <GlobalStyle />
    <Container>
        <Brand />
        <Chart />
    </Container>
    </>
  )
}

export default Dashboard;