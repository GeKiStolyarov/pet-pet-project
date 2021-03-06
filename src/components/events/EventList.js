import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moduleName, fetchAll, eventListSelector } from '../../ducks/events';
import Loader from '../common/Loader';

class EventList extends Component {
  static propTypes = {
    // from connect
    events: PropTypes.array,
    fetchAll: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.fetchAll();
  }

  getRows = () => this.props.events.map(this.getRow)

  getRow = event => (
    <tr key={event.uid}>
      <td>{event.title}</td>
      <td>{event.where}</td>
      <td>{event.month}</td>
    </tr>
  )

  render() {
    if (this.props.loading) return <Loader />;
    return (
      <div>
        <table>
          <tbody>
            {this.getRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(state => ({
  events: eventListSelector(state),
  loading: state[moduleName].loading,
}), { fetchAll })(EventList);
