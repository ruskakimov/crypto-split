import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteKey } from '@actions'
import { List, ListItem, Button, Input } from '@components/global'

const CombineListItem = ListItem.extend`
  grid-template-columns: 70px 1fr;
`

class KeysList extends Component {
  handleDelete = (index) => {
    this.props.deleteKey(index)
  }

  render() {
    return (
      <List>
        {
          this.props.keys.map((key, i) => (
            <CombineListItem key={key}>
              <div>
                <Button onClick={() => this.handleDelete(i)}>remove</Button>
              </div>
              <Input value={key} readOnly/>
            </CombineListItem>
          ))
        }
      </List>
    )
  }
}

function mapStateToProps(state) {
  return {
    keys: state.combine.keys
  }
}

export default connect(mapStateToProps, { deleteKey })(KeysList)