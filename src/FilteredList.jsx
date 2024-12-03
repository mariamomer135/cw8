import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All",
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  onFilter = (type) => {
    this.setState({ type });
  };

  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = this.state.type === "All" || item.type === this.state.type;
    return matchesSearch && matchesType;
  };

  render() {
    return (
      <div
        className="container text-center"
        style={{
          marginTop: "50px",
          padding: "20px",
          maxWidth: "600px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >

      {/* Dropdown */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DropdownButton
          id="filter-dropdown"
          title={`Filter: ${this.state.type}`}
          onSelect={this.onFilter}
          variant="primary"
          style={{
            width: "150px",
            textAlign: "center",
            marginBottom: "20px", 
          }}
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>
      </div>


        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
          style={{
            width: "100%",
            padding: "10px",
            margin: "20px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        />

        {/* List */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;

