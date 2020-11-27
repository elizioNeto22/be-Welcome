import React from 'react'
import { connect } from 'react-redux'

import { deleteItem } from '../../redux/cart/cart.actions'

import { ReactComponent as Trash } from '../../assets/icons/trash.svg'

const TrashIcon = ({ deleteItem, item }) => (
  <div onClick={() => deleteItem(item)}>
    <Trash className="trash" />
  </div>
)

const mapStateToProps = {
  deleteItem,
}

export default connect(null, mapStateToProps)(TrashIcon)
