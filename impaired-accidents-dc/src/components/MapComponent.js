import React, { Component } from 'react';
import draw from '../scripts/Map.js'

export default class MapComponent extends Component {

    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate() {
        draw(this.props);
    }

    render() {
        return (
            <div className="mapComponent" />
        )
    }
}