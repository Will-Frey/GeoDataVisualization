import React, { Component } from 'react';
import { Slider, Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MapComponent from './MapComponent'
import geoData from '../annotatedData.js'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yearRange: [2010, 2014]
        }
    }
    render() {
        const handleChange = (event, newValue) => {
            this.setState({ yearRange: newValue })
        };

        const marks = [
            { value: 2010, label: '2010' },
            { value: 2011, label: '2011' },
            { value: 2012, label: '2012' },
            { value: 2013, label: '2013' },
            { value: 2014, label: '2014' }
        ];

        return (
            <div className='App'>
                <div className="header">
                    <Typography align='center' variant='h4' paragraph>
                        Impaired Car Crashes in Washington, DC by neighborhood (2010-2014)
                    </Typography>
                </div>
                <MapComponent mapData={geoData} yearRange={this.state.yearRange} />
                <Typography align='right' variant="body2" className="mapLabel">
                    Map of Washington, DC
                </Typography>
                <div className="mapSliderContainer">
                    <div className="mapSlider">
                        <Typography id="range-slider" gutterBottom>
                            Data Range Filter (year)
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
                </div>
                <div className="spacer" />
                <div className="dataTable">
                    <Typography align="center" variant="h5">
                        Table Data
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table size="small" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Neighborhood</TableCell>
                                    <TableCell align="right">Total&nbsp;(2010-14)</TableCell>
                                    <TableCell align="right">2010</TableCell>
                                    <TableCell align="right">2011</TableCell>
                                    <TableCell align="right">2012</TableCell>
                                    <TableCell align="right">2013</TableCell>
                                    <TableCell align="right">2014</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {geoData.features.map((feature) => (
                                    <TableRow key={feature.id}>
                                        <TableCell component="th" scope="row">{feature.properties.name}</TableCell>
                                        <TableCell align="right">{feature.properties.total || 0}</TableCell>
                                        <TableCell align="right">{feature.properties['2010'] || 0}</TableCell>
                                        <TableCell align="right">{feature.properties['2011'] || 0}</TableCell>
                                        <TableCell align="right">{feature.properties['2012'] || 0}</TableCell>
                                        <TableCell align="right">{feature.properties['2013'] || 0}</TableCell>
                                        <TableCell align="right">{feature.properties['2014'] || 0}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }
}

export default App;