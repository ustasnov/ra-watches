import { Component } from "react";
import Watch from "../watch/Watch";
import './Watches.css'

export default class Watches extends Component {
  constructor() {
    super();
    /*
    this.watches = [
      { id: 1, description: "Москва", zone: 3 },
      { id: 2, description: "Новосибирск", zone: 7 },
      { id: 3, description: "Калининград", zone: 2 },
      { id: 4, description: "Даллас", zone: -5 },
      { id: 5, description: "Токио", zone: 9 },
      { id: 6, description: "Лондон", zone: 1 }
    ];
    */
    this.watches = [];
    this.state = { watches: this.watches }
  }

  componentDidMount() {
    this.loadWatches();
    if (this.watches.length > 0) {
      this.setState({ watches: this.watches })
    }
    const descrEl = document.querySelector(".watch-descr");
    descrEl.focus();
  }

  onSubmitHandler = (ev) => {
    const descrEl = ev.target.querySelector(".watch-descr");
    const zoneEl = ev.target.querySelector(".watch-zone");
    this.watches.push({
      id: crypto.randomUUID(),
      description: descrEl.value,
      zone: parseInt(zoneEl.value)
    });
    this.saveWatches();
    this.setState({ watches: this.watches });
    descrEl.value = "";
    zoneEl.value = "0";
    descrEl.focus();
    ev.preventDefault();
  }

  saveWatches() {
    const data = JSON.stringify(this.watches);
    localStorage.setItem("watches", data);
  }

  loadWatches() {
    const data = localStorage.getItem("watches");
    if (data) {
      this.watches = JSON.parse(data);
    }
  }

  onDeleteWatch(id) {
    this.watches = this.watches.filter((el) => el.id !== id);
    this.setState({ watches: this.watches });
    this.saveWatches();
  }

  render() {
    const { watches } = this.state;

    return (
      <div className="watches-container">
        <form className="watches-form" onSubmit={this.onSubmitHandler}>
          <label className="descr-label">Название
            <input required className="watch-descr" name="description" type="text" />
          </label>
          <div className="zone-label">Временная зона
            <label className="gmt">UTC
              <input required className="watch-zone" name="zone" type="number" min="-12" max="13" step="1" defaultValue={0} />
            </label>
          </div>
          <button className="add-btn" type="submit">Добавить</button>
        </form>
        <div className="watches-list">
          {watches.map((el) => <Watch key={el.id} callback={this.onDeleteWatch.bind(this)} {...el}></Watch>)}
        </div>
      </div>
    );
  }
}


