import React, { Component } from 'react';
import Character from './Character';
import Filter from './Filter';
import SelectedFilters from './SelectedFilters';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Filter/>
          <SelectedFilters/>
          <Character />
      </div>
    );
  }
}

export default App;