import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { firestore, getShopData } from '../../firebase/firebase.utils'
import { selectShopSections } from '../../redux/shop/shop.selectors'
import { updateShop } from '../../redux/shop/shop.actions'
import ShopContainer from '../../components/shop-container/shop-container-component'
import ShopMenu from '../../components/shop-menu/shop-menu-component'
import WithSpinner from '../../components/HOC/withSpinner/with-spinner-component'

import './shopPage-styles.scss'

// const ShopContainerWithSpinner = WithSpinner(ShopContainer)

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null
  state = {
    loading: true,
  }

  componentDidMount() {
    const { updateShop } = this.props
    const collectionRef = firestore.collection('products')
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShot) => {
        const shopData = getShopData(snapShot)
        updateShop(shopData)
        this.setState({ loading: false })
      }
    )
  }

  render() {
    // const { items, id } = this.props.shopSection
    const section = this.props.match.params.section
    const { loading } = this.state
    // const tt = this.props.shopSection
    // console.log(tt)
    return (
      <div className="shopPage-container">
        <ShopMenu />
        <Route
          key={section}
          exact
          path={`/shop/${section}`}
          render={(props) => {
            return loading ? (
              <WithSpinner />
            ) : (
              <ShopContainer
                items={this.props.shopSection.items}
                key={this.props.shopSection.routeName}
              />
            )
          }}
        />
      </div>
    )
  }
}

// ;({ shopSection, match }) => {}

const mapStateToProps = (state, ownProps) => ({
  shopSection: selectShopSections(ownProps.match.params.section)(state),
})

const mapDispatchToProps = {
  updateShop,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopPage)
)
