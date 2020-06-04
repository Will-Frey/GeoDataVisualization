import * as d3 from 'd3'
import legend from './legend'

const draw = (props) => {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const projection = d3.geoAlbers()
        .fitExtent([[0, 0], [w, h]], props.mapData);
    const pathGenerator = d3.geoPath().projection(projection);
    const totalsColor = d3.scaleQuantile([0, 40], d3.schemeBlues[9]);

    d3.select('.mapComponent > *').remove();
    var svg = d3.select('.mapComponent').append('svg')
        .attr('height', h)
        .attr('width', w)
        .call(responsivefy);

    // svg.append("g")
    //     .attr("transform", "translate(610,20)")
    //     .append(() => legend({ color: totalsColor, title: "data.title", width: 260 }));

    svg.append('g')
        .selectAll('path')
        .data(props.mapData.features)
        .join('path')
        .attr('fill', d => totalsColor(sumFeatureData(d, props.yearRange)))
        .attr('d', pathGenerator)
        .append('title')
        .text(d => `${d.properties.name}: ${d.properties.total}`);

}

const sumFeatureData = (feature, yearRange) => {
    // Create Array of years to display
    const filledYearRange = Array(yearRange[1] - yearRange[0] + 1).fill().map((_, idx) => String(yearRange[0] + idx));

    // Sum values of only selected years from given feature
    return Object.keys(feature.properties)
        .filter(key => filledYearRange.includes(key))
        .reduce((sum, key) => {
            if (feature.properties[key] != null) {
                sum = sum + feature.properties[key];
            }
            return sum;
        }, 0);
}

// Function to responsively resize an svg based on screen size
// Sourced from https://brendansudol.com/writing/responsive-d3
function responsivefy(svg) {
    // get container + svg aspect ratio
    var container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width")),
        height = parseInt(svg.style("height")),
        aspect = width / height;

    // add viewBox and preserveAspectRatio properties,
    // and call resize so that svg resizes on inital page load
    svg.attr("viewBox", "0 0 " + width + " " + height)
        .attr("perserveAspectRatio", "xMinYMid")
        .call(resize);

    // to register multiple listeners for same event type, 
    // you need to add namespace, i.e., 'click.foo'
    // necessary if you call invoke this function for multiple svgs
    // api docs: https://github.com/mbostock/d3/wiki/Selections#on
    d3.select(window).on("resize." + container.attr("id"), resize);

    // get width of container and resize svg to fit it
    function resize() {
        var targetWidth = parseInt(container.style("width"));
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
    }
}

export default draw;

