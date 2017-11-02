import React, { Component } from 'react'
import { connect } from 'react-redux'
import { copyKey } from '@actions'
import styled from 'styled-components'
import Input from '@components/global/Input'


const List = styled.ul`
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  display: block;
  margin: 20px 0;
  font-size: 16px;
  display: grid;
  grid-template-columns: 100px 50px 1fr 100px;
  grid-gap: 5px;
`

const CopyStatus = styled.div`
  text-align: center;
`

class KeysList extends Component {
  constructor(props) {
    super(props)
    this.inputs = {}
  }

  handleFocus = (e) => {
    e.target.select()
  }

  handleCopy = (i) => {
    this.inputs[i].select()
    document.execCommand('copy')
    this.props.copyKey(i)
  }

  render() {
    const { keys, copied } = this.props;

    if (keys.length === 0 || keys[0] === '') {
      return <div>No message.</div>
    }

    return (
      <List>
        {
          keys.map((key, i) => (
            <ListItem key={key}>
              <div>
                Key #{i + 1}
              </div>
              <div>
                <button onClick={() => this.handleCopy(i)}>copy</button>
              </div>
              <Input
                innerRef={comp => this.inputs[i] = comp}
                onFocus={this.handleFocus}
                value={key}
                type="text"
                readOnly
              />
              <CopyStatus>
                { copied[i] ? '[copied]' : '' }
              </CopyStatus>
            </ListItem>
          ))
        }
      </List>
    )
  }
}

function mapStateToProps(state) {
  return {
    keys: state.split.keys,
    copied: state.split.copied,
  }
}

export default connect(mapStateToProps, { copyKey })(KeysList)