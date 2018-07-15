import React, { Component } from 'react';
import EventLise from '../events/EventList';

export default class EventsPage extends Component {
  render() {
    return (
      <div>
        <h1>Events page</h1>
        <EventLise />
      </div>
    );
  }
}
