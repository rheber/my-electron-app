import React from 'react';
import {Link} from 'react-router-dom';

export default class extends React.Component {
  render() {
    return (
      <Link className='next' to='/screen2'>Next</Link>
    );
  }
}
