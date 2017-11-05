import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fonts } from '@/constants'

const Bar = styled.nav`
  margin: 50px 0;
`

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
  padding: 0px;
  color: ${colors.neon_green};
  font: 28px ${fonts.monospace};
  text-decoration: none;
  letter-spacing: -2px;
  /*border: 2px solid transparent;*/

  &.${props => props.activeClassName} {
    color: ${colors.black};
    background-color: ${colors.neon_green};
    /*border-color: ${colors.neon_green};*/
  }
`

StyledNavLink.defaultProps = {
  activeClassName: 'active',
  exact: true,
}

const NavBar = (props) => {
  return (
    <Bar>
      <List>
        <ListItem>
          <StyledNavLink to="/">???</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/split">Split</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/combine">Combine</StyledNavLink>
        </ListItem>
      </List>
    </Bar>
  )
}

export default NavBar