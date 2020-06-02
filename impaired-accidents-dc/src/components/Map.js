import * as d3 from 'd3'

const draw = (props) => {
    const projection = d3.geoEquirectangular();
    const pathGenerator = d3.geoPath().projection(projection);
    const color = d3.scaleQuantize([1, 10], d3.schemeGreens[9]);

    d3.select('.mapComponent > *').remove();
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var svg = d3.select('.mapComponent').append('svg')
        .attr('height', h)
        .attr('width', w)
        .attr('id', 'svg-map')

    svg.append('g')
        .selectAll('path')
        .data(props.mapData.features)
        .join('path')
            .attr('fill', d => color(d.properties.total))
            .attr('d', pathGenerator)
        .append('title')
            .text(d => `${d.properties.name}`)

    svg.selectAll('path')
        .data(props.mapData.features)
        .enter()
        .append('path')
        .attr('d', pathGenerator);

}

export default draw;

