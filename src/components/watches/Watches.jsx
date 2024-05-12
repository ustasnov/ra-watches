import { Component } from "react";
import PropTypes from "prop-types";
import Watch from "../watch/Watch";
import './Watches.css'

export default class Watches extends Component {
  constructor() {
    super();
    this.watches = [];
  }

  render() {

    return (
      <div className="watches-container">
        <form className="watches-form">
          <label className="descr-label">Название
            <input className="watch-descr" name="description" type="text" />
          </label>
          <label className="zone-label">Временная зона
            <input className="watch-zone" name="zone" type="text" />
          </label>
          <button className="add-btn">Добавить</button>
        </form>
        <div className="watches-list">
          {this.watches.map((el) => {
            <Watch {...el}></Watch>
          })}
        </div>
      </div>
    )
  }
}


