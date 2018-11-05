import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MapList from './components/MapList/MapList';
import MapGuide from './components/MapGuide/MapGuide';
import { changeRoute } from './containers/actions';

const mapStateToProps = (state) => {
  return {
    route: state.setRoute.route,
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
            objectiveStart={[0,1,2]}
            pictures={[[require('./images/Bank.jpg'), require('./images/Bank.jpg')], [require('./images/Border.jpg')], [require('./images/Skyscraper.png'), require('./images/Skyscraper.png'), require('./images/Skyscraper.png')]]} 
            text={['What the fuck did you just fucking say about me, you little bitch? I\'ll have you know I graduated top of my class in the Navy Seals, and I\'ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I\'m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You\'re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that\'s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn\'t, you didn\'t, and now you\'re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You\'re fucking dead, kiddo.', 
            'oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof ',
            'oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof ']}
          /> 
          : 'Something isn\'t working with state.'
        }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
