import React, { Component } from 'react';

import fetchData from '../../services/itemService';

class ItemList extends Component {
  state = {
    items: [],
    hasErrored: false,
    isLoading: false
  };

  componentDidMount() {
    fetchData.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.state.isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    );
  }
}
export default ItemList;
