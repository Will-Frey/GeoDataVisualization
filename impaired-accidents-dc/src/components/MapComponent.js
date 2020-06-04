import React, { Component } from 'react';
import {Slider, Typography} from '@material-ui/core'
import draw from './Map.js'

export default class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yearRange: [2010, 2014]
        }
    }

    componentDidMount() {
        draw(this.props, this.state.yearRange);
    }

    componentDidUpdate() {
        draw(this.props, this.state.yearRange);
    }

    render() {
        const handleChange = (event, newValue) => {
            this.setState({ yearRange: newValue})
          };

        const marks = [
        { value: 2010, label: '2010' },
        { value: 2011, label: '2011' },
        { value: 2012, label: '2012' },
        { value: 2013, label: '2013' },
        { value: 2014, label: '2014' }
        ];

        return(
            <>
                <div className="mapSlider">
                    <Typography id="range-slider" gutterBottom>
                        Year Range
                    </Typography>
                    <Slider
                        min={2010}
                        max={2014}
                        step={null}
                        marks={marks}
                        value={this.state.yearRange}
                        onChange={handleChange}
                    />
                </div>
                <div className="mapComponent" />
            </>
        )
    }
}