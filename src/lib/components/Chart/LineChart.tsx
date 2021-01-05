import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// export interface IBaseChartProps {
// 	data: ChartData;
// 	options?: ChartOptions
// }

export const LineChart = () => {
	const myDiv = useRef<HTMLDivElement>();

	const data = [8, 5, 13, 9, 12];

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		const canvasHeight = 400;
		const canvasWidth = 600;
		const scale = 20;

		const svgCanvas = d3.select(myDiv.current)
			.append("svg")
			.attr("viewBox", `0 0 ${canvasWidth} ${canvasHeight}`)
			// .attr("width", canvasWidth)
			// .attr("height", canvasHeight)
			.style("border", "1px solid black");

		svgCanvas.selectAll("rect")
			.data(data).enter()
			.append("rect")
			.attr("width", 40)
			.attr("height", (datapoint) => datapoint * scale)
			.attr("fill", "orange")
			.attr("x", (datapoint, iteration) => iteration * 45)
			.attr("y", (datapoint) => canvasHeight - datapoint * scale);

		svgCanvas.selectAll("text")
			.data(data).enter()
			.append("text")
			.attr("x", (dataPoint, i) => i * 45 + 10)
			.attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
			.text(dataPoint => dataPoint)
	}

	return <div ref={myDiv}>some test</div>;
}
