import React, { Component } from 'react';
import { Typography } from '@material-ui/core'
import MapComponent from './MapComponent'
import geoData from '../annotatedData.js'
import './App.css'

class App extends Component{

    

    render() {
        return(
            <div className='App'>
                <Typography align='center' variant='h4' paragraph>
                    Impaired Car Crashes in Washington, DC by neighborhood (2010-2014)
                </Typography>
                <MapComponent mapData={geoData}/>
            </div>
        )
    }
}

export default App;