import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fonts } from '@constants'

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
  color: ${colors.neon_green};
  font: 20px ${fonts.monospace};
  text-decoration: none;

  &.${props => props.activeClassName} {
    border-bottom: 2px solid ${colors.neon_green};
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