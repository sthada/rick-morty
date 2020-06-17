import React, { Component } from 'react';
import Character from './Character';
import Filter from './Filter';
import SelectedFilters from './SelectedFilters';

import { connect } from 'react-redux';
import './App.css';
import { onClickGetDetails, onClickChangeSort  } from './redux/action/service';
import { bindActionCreators } from 'redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characterDetail: []
    };
  }
  componentDidMount(){
    this.props.onClickGetDetails();
  }
  componentDidUpdate(prevProps, prevState){
    if (JSON.stringify(this.props.characterDetail) !== JSON.stringify(prevProps.characterDetail) ){
      this.setState({
        characterDetail: this.props.characterDetail
      });
    }
  }
  render() {
    return (
      <div className='App'>
          <Filter/>
          <SelectedFilters/>
        <Character characterDetail={this.props.characterDetail}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characterDetail: state.characterDetail
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  onClickGetDetails, onClickChangeSort
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);