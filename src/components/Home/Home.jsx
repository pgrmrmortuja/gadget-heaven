import React from 'react'
import Gadgets from '../Gadgets/Gadgets'
import Banner from '../Banner/Banner'
// import PdcDetails from '../Details/PdcDetails'
// import Dashboard from '../Dashboard/Dashboard'
// import PropTypes from 'prop-types'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Gadgets></Gadgets>
        {/* <PdcDetails></PdcDetails>
        <Dashboard></Dashboard> */}
    </div>
  )
}

// Home.propTypes = {}

export default Home