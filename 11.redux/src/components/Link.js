import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const LinkUI = ({ active, children, onClick }) => {
  if (active) {
    return <span className="active">{children}</span>
  }

  return (
    <a className="footerLink"
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

LinkUI.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const Link = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkUI)

export default Link