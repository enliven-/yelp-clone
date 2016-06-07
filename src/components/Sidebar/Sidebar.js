import React, { PropTypes as T } from 'react';
import styles   from './styles.module.css';
import Listing  from 'components/Listing/Listing';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.heading}>
          <h1>{this.props.title}</h1>
        </div>
        <Listing places={this.props.places} />
      </div>
    )
  }
}
