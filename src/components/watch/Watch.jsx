import { Component } from "react";
import PropTypes from "prop-types";
import "./Watch.css"

export default class Watch extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {description: props.description, zone: props.zone};
  }

  getTimeByZoneOffset(zone) {
    const localDate = new Date();
    const newDate = new Date(
      localDate.valueOf() + (localDate.getTimezoneOffset() + zone * 60) * 60000);
    return newDate.toTimeString().substring(0,8);
  }

  render() {

    const {description, zone} = this.state;

    return (
      <div className="watch-container">
        <div className="description">{description}</div>
        <div className="newdate">{this.getTimeByZoneOffset(zone)}</div>
      </div>
    );
  }
}

Watch.propTypes = {
  description: PropTypes.string,
  zone: PropTypes.string
}

