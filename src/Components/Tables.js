import { Component } from "react";
import Rows from "/Users/austinperez/Desktop/directoryapp/src/Components/Rows.js";
import API from "/Users/austinperez/Desktop/directoryapp/src/Utils/api.js";

class Tables extends Component {
  state = {
    employees: [],
  };
  componentDidMount() {
    API.search().then((res) =>
      this.setState({ results: res.data.results, filtered: res.data.results })
    );
  }
  sortByName = (event) => {
    event.preventDeafault();
    this.setState({
      employees: this.state.employees.sort((a, b) => {
        if (a.name.first > b.name.first) return 1;
        if (a.name.first < b.name.first) return 0;
      }),
    });
  };
  filterById = function (event) {
    event.preventDefault();
    this.setState({
      employees: this.state.employees.filter((item) => item.id.value),
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <i
                  onClick={this.filterById}
                  className="fas fa-caret-up"
                  style={{ color: "green", cursor: "pointer" }}
                ></i>
                ID
              </th>
              <th scope="col">image</th>
              <th scope="col">
                <i
                  onClick={this.sortByName}
                  className="fas fa-caret-up"
                  style={{ color: "red", cursor: "pointer" }}
                ></i>
                Name
              </th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <Rows employees={this.state.employees} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tables;
