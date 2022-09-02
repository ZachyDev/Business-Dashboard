import React from 'react'
import Brand from './Brand'
import Container from './Container'
import GlobalStyle from './GlobalStyle'
import { Card } from './Card'

function Dashboard() {
  return (
    <>
    <GlobalStyle />
    <Container>
        <Brand />
        <Card> Chart goes here</Card>
        <Card>Table goes here </Card>
    </Container>
    </>
  )
}

export default Dashboard;