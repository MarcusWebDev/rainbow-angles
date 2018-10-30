import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MapList from './components/MapList/MapList';
import MapGuide from './components/MapGuide/MapGuide';
import setRoute from './containers/reducers';
import changeRoute from './containers/actions';

const mapStateToProps = (state) => {
  return {
    route: state.route
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (event) => {dispatch(changeRoute(event))}
  }
}

class App extends Component {
  render() {
    const { route, onRouteChange } = this.props
    return (
      <div className="App">
        <NavBar routeChange={onRouteChange} />
        <div className="contentContainer">
        {route === 'mapList'
          ?
          <MapList routeChange={onRouteChange}/>
          : route === 'bank' ?
          <MapGuide 
            header={'BANK'} 
            headerPicture={require('./images/Bank.jpg')} //Pass these down as props for each route. Code MapGuide so it can accommodate any combination of these props
            pictures={'picture1', 'picture2'} 
            videos={'video1', 'video2'}
            text={['blep', 'blep']}
          /> 
          : 'Something isn\'t working with state.'
        }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
