import React, { Component } from 'react'

class SectionHeader extends Component {
  render() {
    const { title, describe } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="section-heading col-12">
            <span>{title}</span>
          </div>
          <div className="text col-12 d-none d-md-block col-md-12">
            {describe}
            </div>
        </div>
      </div>
    )
  }
}

export default SectionHeader
