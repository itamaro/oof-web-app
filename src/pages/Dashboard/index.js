import React from "react"
import MetaTags from 'react-meta-tags';
import {
  Container
} from "reactstrap"

const Dashboard = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | Onion On Fire</title>
        </MetaTags>
        <Container fluid>
          <h3>Dashboard</h3>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
