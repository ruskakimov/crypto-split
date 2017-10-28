import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
`

const ListItem = styled.li`
  padding: 20px;
  display: block;
  flex-grow: 1;
  text-align: center;
`

const NavBar = (props) => {
  return (
    <nav>
      <List>
        <ListItem><Link to="/">Home</Link></ListItem>
        <ListItem><Link to="/split">Split</Link></ListItem>
        <ListItem><Link to="/combine">Combine</Link></ListItem>
      </List>
    </nav>
  )
}

export default NavBar