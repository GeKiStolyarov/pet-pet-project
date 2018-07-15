import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moduleName, fetchAll } from '../../ducks/events';

class EventList extends Component {
  static propTypes = {
    // from connect
    events: PropTypes.array,
    fetchAll: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    console.log('---', this.props.events);

    return (
      <div>

      </div>
    );
  }
}

export default connect(state => ({
  events: state[moduleName].entities,
}), { fetchAll })(EventList);
