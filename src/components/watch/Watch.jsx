import { Component } from "react";
import PropTypes from "prop-types";
import "./Watch.css"

export default class Watch extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { time: this.getTimeByZoneOffset(this.props.zone) };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const time = this.getTimeByZoneOffset();
      this.setState({ time: time });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
    const delBtnEl = document.querySelector(`.delete-btn-${this.props.id}`);
    delBtnEl.removeEventListener("onclick", this.onDelete);
  }

  getTimeByZoneOffset() {
    const localDate = new Date();
    const newDate = new Date(
      localDate.valueOf() +
      (localDate.getTimezoneOffset() + this.props.zone * 60) * 60000
    );
    return newDate.toTimeString().substring(0, 8);
  }

  onDelete = (ev) => {
    if (confirm(`Удалить время: ${this.props.description}?`)) {
      this.props.callback(this.props.id);
    }
    ev.preventDefault();
  }

  render() {
    const { time } = this.state;

    return (
      <div className="watch-container">
        <div className="watch-body">
          <div className="description">{this.props.description}</div>
          <div className="time">{time}</div>
        </div>
        <button className={`delete-btn delete-btn-${this.props.id}`} onClick={this.onDelete}>Х</button>
      </div>
    );
  }
}

Watch.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  zone: PropTypes.number,
  callback: PropTypes.func
}

