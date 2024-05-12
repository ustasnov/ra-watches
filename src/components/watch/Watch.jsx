import { Component } from "react";
import PropTypes from "prop-types";

export default class Watch extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {


    return (
      <>
      </>
    )
  }
}

Watch.propTypes = {
  description: PropTypes.string,
  zone: PropTypes.string
}

