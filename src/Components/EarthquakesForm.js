import React, { Component } from 'react';


class EarthquakesForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onFilter(event)
  }

  render() {
    return(
      <div>
        <h3>Filter:</h3>
        <form onSubmit={this.handleSubmit}>
          <label className="filter-column">Minimalna jačina potresa:</label>
          <br/>
          <select name="magnitude">
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        <br/>
        <br/>
          <label className="filter-column">Traženje po datumu (od-do):</label><br/>
          <input type="date" name="min" /><br/>
          <input type="date" name="max" /><br/>
          <br/>
        <input type="submit" className="myButton"/>
      </form>
      </div>
    )
  }
}

export default EarthquakesForm