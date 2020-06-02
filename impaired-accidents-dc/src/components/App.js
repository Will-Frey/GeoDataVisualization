import React, { Component } from 'react';
import MapComponent from './MapComponent'
import geoData from '../annotatedData.js'
import './App.css'

class App extends Component{

    

    render() {
        return(
            <div className='App'>
                <h2>
                    Impaired Car Crashes in Washington, DC by neighborhood (2010-2014)
                </h2>
                <MapComponent mapData={geoData}/>
            </div>
        )
    }
}

export default App;