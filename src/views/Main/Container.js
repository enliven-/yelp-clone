import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';

class Container extends React.Component {
  render() {
    return (
      <div>
        Hello from the container
        <Map
          google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(Container);