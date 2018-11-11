import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Banner from './components/Banner/Banner';
import MapList from './components/MapList/MapList';
import MapGuide from './components/MapGuide/MapGuide';
import { changeRoute } from './containers/actions';

const mapStateToProps = (state) => {
  return {
    route: state.setRoute.route,
  }
}
//;p;
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
        <Banner routeChange={onRouteChange} />
        <div className="contentContainer">
        {route === 'mapList'
          ?
          <MapList routeChange={onRouteChange}/>
          : route === 'bank' ?
          <MapGuide 
            header={'BANK'} 
            headerPicture={require('./images/Bank.jpg')} //Pass these down as props for each route. Code MapGuide so it can accommodate any combination of these props
            floorNames={['B', '1st', '2nd']}
            floorStart={[3,5]}
            pictures={[
              [require('./images/Bank.jpg'), require('./images/Border.jpg')], [require('./images/Border.jpg')], 
              [require('./images/Skyscraper.jpg'), require('./images/Skyscraper.jpg'), require('./images/Skyscraper.jpg')], 
              [require('./images/Skyscraper.jpg')], 
              [require('./images/Border.jpg')],
              [require('./images/Border.jpg')],
              [require('./images/Border.jpg')]
            ]} 
            text={['What the fuck did you just fucking say about me, you little bitch? I\'ll have you know I graduated top of my class in the Navy Seals, and I\'ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I\'m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You\'re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that\'s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn\'t, you didn\'t, and now you\'re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You\'re fucking dead, kiddo.', 
            'oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof ',
            'oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof ',
            'oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof ']}
          /> 
          : route === 'border' ? 
          <MapGuide
            header={'Border'}
            headerPicture={require('./images/Border.jpg')}
            floorNames={['1st', '2nd']}
            floorStart={[4]}
            pictures={[
              [require('./images/border/1st1_1.png'), require('./images/border/1st1_2.png'), require('./images/border/1st1_3.png')],
              [require('./images/border/1st2_1.png'),require('./images/border/1st2_2png')],
              [require('./images/border/1st3_1.png'), require('./images/border/1st3_2.png')],
              [require('./images/border/1st4_1.png'), require('./images/border/1st4_2.png')],
              [require('./images/border/2nd1_1.png'), require('./images/border/2nd1_2.png')],
              [require('./images/border/2nd2_1.png'), require('./images/border/2nd2_2.png')],
              [require('./images/border/2nd3_1.png'), require('./images/border/2nd3_2.png')]
            ]}
            text={['']}
          />
          : route === 'chalet' ?
          <MapGuide
            header={'CHALET'}
            headerPicture={require('./images/Chalet.jpg')}
            floorNames={['B', '1st', '2nd']}
            floorStart={[3,6]}
            pictures={[
              [require('./images/chalet/B1_1.png'), require('./images/chalet/B1_2.png')],
              [require('./images/chalet/B2_1.png'), require('./images/chalet/B2_2.png')],
              [require('./images/chalet/B3_1.png'), require('./images/chalet/B3_2.png')],
              [require('./images/chalet/1st1_1.png'), require('./images/chalet/1st1_2.png')],
              [require('./images/chalet/1st2_1.png'), require('./images/chalet/1st2_2.png')],
              [require('./images/chalet/1st3_1.png'), require('./images/chalet/1st3_2.png')],
              [require('./images/chalet/2nd1_1.png'), require('./images/chalet/2nd1_2.png')],
              [require('./images/chalet/2nd2_1.png'), require('./images/chalet/2nd2_2.png')],
              [require('./images/chalet/2nd3_1.png'), require('./images/chalet/2nd3_2.png')]
            ]}
            text={['']}
          />
          : route === 'clubHouse' ?
          <MapGuide
            header={'CLUB HOUSE'}
            headerPicture={require('./images/ClubHouse.jpg')}
            floorNames={['B', '1st', '2nd']}
            floorStart={[3,7]}
            pictures={[
              [require('./images/clubHouse/B1_1.png'), require('./images/clubHouse/B1_2.png')],
              [require('./images/clubHouse/B2_1.png'), require('./images/clubHouse/B2_2.png')],
              [require('./images/clubHouse/B3_1.png'), require('./images/clubHouse/B3_2.png')],
              [require('./images/clubHouse/1st1_1.png'), require('./images/clubHouse/1st1_2.png')],
              [require('./images/clubHouse/1st2_1.png'), require('./images/clubHouse/1st2_2.png')],
              [require('./images/clubHouse/1st3_1.png'), require('./images/clubHouse/1st3_2.png')],
              [require('./images/clubHouse/1st4_1.png'), require('./images/clubHouse/1st4_2.png')],
              [require('./images/clubHouse/2nd1_1.png'), require('./images/clubHouse/2nd1_2.png')],
              [require('./images/clubHouse/2nd2_1.png'), require('./images/clubHouse/2nd2_2.png')],
              [require('./images/clubHouse/2nd3_1.png'), require('./images/clubHouse/2nd3_2.png')]
            ]}
            text={['']}
          />
          : route === 'coastline' ?
          <MapGuide
            header={'COASTLINE'}
            headerPicture={require('./images/Coastline.jpg')}
            floorNames={['1st', '2nd']}
            floorStart={[3]}
            pictures={[
              [require('./images/coastline/1st1_1.png'), require('./images/coastline/1st1_2.png')],
              [require('./images/coastline/1st2_1.png'), require('./images/coastline/1st2_2.png')],
              [require('./images/coastline/1st3_1.png'), require('./images/coastline/1st3_2.png')],
              [require('./images/coastline/2nd1_1.png'), require('./images/coastline/2nd1_2.png')],
              [require('./images/coastline/2nd2_1.png'), require('./images/coastline/2nd2_2.png')],
              [require('./images/coastline/2nd3_1.png'), require('./images/coastline/2nd3_2.png')]
            ]}
            text={['']}
          />
          : route === 'consulate' ?
          <MapGuide
            header={'CONSULATE'}
            headerPicture={require('./images/Consulate.jpg')}
            floorNames={['B', '1st', '2nd']}
            floorStart={[4,6]}
            pictures={[
              [require('./images/consulate/B1_1.png'), require('./images/consulate/B1_2.png')],
              [require('./images/consulate/B2_1.png'), require('./images/consulate/B2_2.png')],
              [require('./images/consulate/B3_1.png'), require('./images/consulate/B3_2.png')],
              [require('./images/consulate/B4_1.png'), require('./images/consulate/B4_2.png')],
              [require('./images/consulate/1st1_1.png'), require('./images/consulate/1st1_2.png')],
              [require('./images/consulate/1st2_1.png'), require('./images/consulate/1st2_2.png')],
              [require('./images/consulate/2nd1_1.png'), require('./images/consulate/2nd1_2.png')],
              [require('./images/consulate/2nd2_1.png'), require('./images/consulate/2nd2_2.png')],
              [require('./images/consulate/2nd3_1.png'), require('./images/consulate/2nd3_2.png')]
            ]}
            text={['']}
          />
          : route === 'hereford' ?
          <MapGuide
            header={'HEREFORD'}
            headerPicture={require('./images/Hereford.jpg')}
            floorNames={['B', '1st', '2nd', '3rd']}
            floorStart={[2,4,5]}
            pictures={[
              [require('./images/hereford/B1_1.png'), require('./images/hereford/B1_2.png')],
              [require('./images/hereford/B2_1.png'), require('./images/hereford/B2_2.png')],
              [require('./images/hereford/1st1_1.png'), require('./images/hereford/1st1_2.png')],
              [require('./images/hereford/1st2_1.png'), require('./images/hereford/1st2_2.png')],
              [require('./images/hereford/2nd1_1.png'), require('./images/hereford/2nd1_2.png')],
              [require('./images/hereford/3rd1_1.png'), require('./images/hereford/3rd1_2.png')],
            ]}
            text={['']}
          />
          : route === 'kafeDostoyevsky' ?
          <MapGuide
            header={'KAFE DOSTOYEVSKY'}
            headerPicture={require('./images/KafeDostoyevsky.jpg')}
            floorNames={['1st', '2nd', '3rd']}
            floorStart={[3,7]}
            pictures={[
              [require('./images/kafeDostoyevsky/1st1_1.png')],
              [require('./images/kafeDostoyevsky/1st2_1.png')],
              [require('./images/kafeDostoyevsky/1st3_1.png')],
              [require('./images/kafeDostoyevsky/2nd1_1.png')],
              [require('./images/kafeDostoyevsky/2nd2_1.png')],
              [require('./images/kafeDostoyevsky/2nd3_1.png')],
              [require('./images/kafeDostoyevsky/2nd4_1.png')],
              [require('./images/kafeDostoyevsky/3rd1_1.png')]
            ]}
            text={['']}
          />
          : route === 'oregon' ?
          <MapGuide
            header={'OREGON'}
            headerPicture={require('./images/Oregon.jpg')}
            floorNames={['B', '1st', '2nd']}
            floorStart={[1,4]}
            pictures={[
              [require('./images/oregon/B1_1.png')],
              [require('./images/oregon/1st1_1.png')],
              [require('./images/oregon/1st2_1.png')],
              [require('./images/oregon/1st3_1.png')],
              [require('./images/oregon/2nd1_1.png')],
              [require('./images/oregon/2nd2_1.png')],
            ]}
            text={['']}
          />
          : route === 'skyscraper' ?
          <MapGuide
            header={'SKYSCRAPER'}
            headerPicture={require('./images/Skyscraper.jpg')}
            floorNames={['1st', '2nd']}
            floorStart={[4]}
            pictures={[
              [require('./images/skyscraper/1st1_1.png')],
              [require('./images/skyscraper/1st2_1.png')],
              [require('./images/skyscraper/1st3_1.png')],
              [require('./images/skyscraper/1st4_1.png')],
              [require('./images/skyscraper/2nd1_1.png')],
            ]}
            text={['']}
          />
          : route === 'themePark' ?
          <MapGuide
            header={'THEME PARK'}
            headerPicture={require('./images/ThemePark.jpg')}
            floorNames={['1st', '2nd']}
            floorStart={[6]}
            pictures={[
              [require('./images/themePark/1st1_1.png')],
              [require('./images/themePark/1st2_1.png')],
              [require('./images/themePark/1st3_1.png')],
              [require('./images/themePark/1st4_1.png')],
              [require('./images/themePark/1st5_1.png')],
              [require('./images/themePark/1st6_1.png')],
              [require('./images/themePark/2nd1_1.png')],
              [require('./images/themePark/2nd2_1.png')]
            ]}
            text={['']}
          />
          : route === 'villa' ?
          <MapGuide
            header={'VILLA'}
            headerPicture={require('./images/Villa.jpg')}
            floorNames={['B', '1st', '2nd']}
            floorStart={[1,3]}
            pictures={[
              [require('./images/villa/B1_1.png')],
              [require('./images/villa/1st1_1.png')],
              [require('./images/villa/1st2_1.png')],
              [require('./images/villa/2nd1_1.png')],
              [require('./images/villa/2nd2_1.png')],
              [require('./images/villa/2nd3_1.png')]
            ]}
            text={['']}
          />
          : 'Something isn\'t working with state.'
        }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
