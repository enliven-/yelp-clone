import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import {searchNearby} from 'utils/googleApiHelpers';

import Header   from 'components/Header/Header';
import Sidebar  from 'components/Sidebar/Sidebar';

import styles from './styles.module.css';

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }

  onReady(mapProps, map) {
    const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        // We got some results and a pagination object
        console.log(results);
        this.setState({
          places: results,
          pagination
        });
      }).catch((status, result) => {
        // There was an error
      })
  }

  render() {

    let children = null;
    if (this.props.children) {
      children = React.cloneElement(
        this.props.children,
        {
          google: this.props.google,
          places: this.state.places,
          loaded: this.props.loaded
        });
    }

    return (
        <Map
          google={this.props.google}
          onReady={this.onReady.bind(this)}
          visible={false}
          className={styles.wrapper}>
          
          <Header />

          <Sidebar
              title={'Restaurants'}
              places={this.state.places} />

          <div className={styles.content}>
            {children}
          </div>

        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(Container);