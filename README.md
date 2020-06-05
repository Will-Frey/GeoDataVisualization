# GeoDataVisualization
### A short project to visualize car accident data from Washington, DC (2010-2014)

This React app that can be run locally with `npm start`

#### Thoughts
My approach to this project began with looking at the data I was given. I had never seen or used a geojson file before, and I wanted to know more about what it is, how I can use it with d3, and what the actual data points given represent. After some research and examining the file, I started to brainstorm how I could visualize the data in a meaningful way. I decided on creating a Choropleth map, and I wanted to have the ability to specify which year(s) to show. I also wanted a table to display the raw values for each neighborhood. 

This project challenged my javascript skills more than I expected. I was lacking in syntax knowledge and got caught by some issues I created for myself. I spent a lot of time in [CodePen](https://codepen.io/) using the JS sandbox as a testing ground, which was an invaluble tool. I also frequented the React, JS and D3 Documentation pages.

I spent about 16 hours on this project.

#### Implementation
* Started new React project using `create-react-app`
  * Developed in VSCode, versioned with Git and Github
* Research on [D3.js](https://d3js.org/) and how to work it together with React
* Created the Choropleth map displaying the total crashes for each neighborhood
* Integrated [Material-UI](https://material-ui.com/) for the slider and table components
* Filter displayed data according to slider selection
* Table for displaying raw data

#### Potential Issues
I would not expect parts of this project to scale well. The filtering methods for the range slider could likely be more efficient, and there is some code duplication that is not an issue for the current size of the project. The map itself also seems very plain.

#### Future Additions
Given unlimited time, there are a few features that I would have liked to add:
* Map legend that would change as the dataset is filtered
* Map context (labels, map of surrounding area)
* Table sorting, filtering, pagination
* Chart to display another facet of the data (bar chart, scatterplot, etc.)
* Style refinments