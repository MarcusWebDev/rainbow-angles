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
            text={[]}
          /> 
          : route === 'border' ? 
          <MapGuide
            header={'Border'}
            headerPicture={require('./images/Border.jpg')}
            floorNames={['1st', '2nd']}
            floorStart={[4]}
            pictures={[
              [require('./images/border/1st1_1.png'), require('./images/border/1st1_2.png'), require('./images/border/1st1_3.png')],
              [require('./images/border/1st2_1.png'),require('./images/border/1st2_2.png')],
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
              [require('./images/clubHouse/B1_1.png'), require('./images/clubHouse/B1_2.png'), require('./images/clubHouse/B1_3.png')],
              [require('./images/clubHouse/B2_1.png'), require('./images/clubHouse/B2_2.png'), require('./images/clubHouse/B2_3.png')],
              [require('./images/clubHouse/B3_1.png'), require('./images/clubHouse/B3_2.png'), require('./images/clubHouse/B3_3.png')],
              [require('./images/clubHouse/1st1_1.png'), require('./images/clubHouse/1st1_2.png'), require('./images/clubHouse/1st1_3.png')],
              [require('./images/clubHouse/1st2_1.png'), require('./images/clubHouse/1st2_2.png'), require('./images/clubHouse/1st2_3.png')],
              [require('./images/clubHouse/1st3_1.png'), require('./images/clubHouse/1st3_2.png'), require('./images/clubHouse/1st3_3.png')],
              [require('./images/clubHouse/1st4_1.png'), require('./images/clubHouse/1st4_2.png'), require('./images/clubHouse/1st4_3.png')],
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
              [require('./images/coastline/1st1_1.png'), require('./images/coastline/1st1_2.png'), require('./images/coastline/1st1_3.png')],
              [require('./images/coastline/1st2_1.png'), require('./images/coastline/1st2_2.png'), require('./images/coastline/1st2_3.png')],
              [require('./images/coastline/1st3_1.png'), require('./images/coastline/1st3_2.png'), require('./images/coastline/1st3_3.png')],
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
              [require('./images/consulate/1st1_1.png'), require('./images/consulate/1st1_2.png'), require('./images/consulate/1st1_3.png')],
              [require('./images/consulate/1st2_1.png'), require('./images/consulate/1st2_2.png'), require('./images/consulate/1st2_3.png')],
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
              [require('./images/kafeDostoyevsky/1st1_1.png'), require('./images/kafeDostoyevsky/1st1_2.png')],
              [require('./images/kafeDostoyevsky/1st2_1.png'), require('./images/kafeDostoyevsky/1st2_2.png')],
              [require('./images/kafeDostoyevsky/1st3_1.png'), require('./images/kafeDostoyevsky/1st3_2.png')],
              [require('./images/kafeDostoyevsky/2nd1_1.png'), require('./images/kafeDostoyevsky/2nd1_2.png')],
              [require('./images/kafeDostoyevsky/2nd2_1.png'), require('./images/kafeDostoyevsky/2nd2_2.png')],
              [require('./images/kafeDostoyevsky/2nd3_1.png'), require('./images/kafeDostoyevsky/2nd3_2.png')],
              [require('./images/kafeDostoyevsky/2nd4_1.png'), require('./images/kafeDostoyevsky/2nd4_2.png')],
              [require('./images/kafeDostoyevsky/3rd1_1.png'), require('./images/kafeDostoyevsky/3rd1_2.png')]
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
              [require('./images/oregon/B1_1.png'), require('./images/oregon/B1_2.png')],
              [require('./images/oregon/1st1_1.png'), require('./images/oregon/1st1_2.png')],
              [require('./images/oregon/1st2_1.png'), require('./images/oregon/1st2_2.png')],
              [require('./images/oregon/1st3_1.png'), require('./images/oregon/1st3_2.png')],
              [require('./images/oregon/2nd1_1.png'), require('./images/oregon/2nd1_2.png')],
              [require('./images/oregon/2nd2_1.png'), require('./images/oregon/2nd2_2.png')],
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
              [require('./images/skyscraper/1st1_1.png'), require('./images/skyscraper/1st1_2.png')],
              [require('./images/skyscraper/1st2_1.png'), require('./images/skyscraper/1st2_2.png')],
              [require('./images/skyscraper/1st3_1.png'), require('./images/skyscraper/1st3_2.png')],
              [require('./images/skyscraper/1st4_1.png'), require('./images/skyscraper/1st4_2.png')],
              [require('./images/skyscraper/2nd1_1.png'), require('./images/skyscraper/2nd1_2.png')],
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
              [require('./images/themePark/1st1_1.png'), require('./images/themePark/1st1_2.png')],
              [require('./images/themePark/1st2_1.png'), require('./images/themePark/1st2_2.png')],
              [require('./images/themePark/1st3_1.png'), require('./images/themePark/1st3_2.png')],
              [require('./images/themePark/1st4_1.png'), require('./images/themePark/1st4_2.png')],
              [require('./images/themePark/1st5_1.png'), require('./images/themePark/1st5_2.png')],
              [require('./images/themePark/1st6_1.png'), require('./images/themePark/1st6_2.png')],
              [require('./images/themePark/2nd1_1.png'), require('./images/themePark/2nd1_2.png')],
              [require('./images/themePark/2nd2_1.png'), require('./images/themePark/2nd2_2.png')]
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
              [require('./images/villa/B1_1.png'), require('./images/villa/B1_2.png'),
              [require('./images/villa/1st1_1.png'), require('./images/villa/1st1_2.png')],
              [require('./images/villa/1st2_1.png'), require('./images/villa/1st2_2.png')],
              [require('./images/villa/2nd1_1.png'), require('./images/villa/2nd1_2.png')],
              [require('./images/villa/2nd2_1.png'), require('./images/villa/2nd2_2.png')],
              [require('./images/villa/2nd3_1.png'), require('./images/villa/2nd3_2.png')]
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
