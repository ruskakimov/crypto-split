import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors, foo } from '@constants'

const List = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
`

const ListItem = styled.li`
  display: block;
  flex-grow: 1;
  text-align: center;
`

const StyledNavLink = styled(NavLink)`
  padding: 20px;
  display: block;
  color: ${colors.black};
  text-decoration: none;

  &.${props => props.activeClassName} {
    color: ${colors.white};
    background: ${colors.light_red};
  }
`

StyledNavLink.defaultProps = {
  activeClassName: 'active',
  exact: true,
}

const NavBar = (props) => {
  return (
    <nav>
      <List>
        <ListItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/split">Split</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/combine">Combine</StyledNavLink>
        </ListItem>
      </List>
    </nav>
  )
}

export default NavBar