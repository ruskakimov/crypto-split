import React, { Component } from 'react'
import { connect } from 'react-redux'
import { copyKey } from '@/actions'
import styled from 'styled-components'
import { List, ListItem, Input, Button } from '@/components/global'

const SplitListItem = ListItem.extend`
  grid-template-columns: 50px 1fr 80px;
`

const CopyStatus = styled.div`
  text-align: right;
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
      return <div></div>
    }

    return (
      <List>
        {
          keys.map((key, i) => (
            <SplitListItem key={key}>
              <div>
                <Button onClick={() => this.handleCopy(i)}>copy</Button>
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
            </SplitListItem>
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