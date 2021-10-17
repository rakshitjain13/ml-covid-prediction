import "zingchart/es6";
import ZingChart from "zingchart-react";
import "zingchart/modules-es6/zingchart-maps.min.js";
import "zingchart/modules-es6/zingchart-maps-ind.min.js";
import "zingchart/modules-es6/zingchart-maps-world-countries.min.js";
import { useEffect, useRef } from "react";

function MapComponent() {
	const chartRef = useRef();
	let chartConfig = {
		shapes: [
			{
				type: "zingchart.maps",
				options: {
					bbox: [67.177, 36.494, 98.403, 6.965], // get bbox from zingchart.maps.getItemInfo('world-countries','ind');
					ignore: ["IND"], // ignore India because we are rendering a more specific India map below
					name: "world.countries",
					panning: false, // turn of zooming. Doesn't work with bounding box
					style: {
						tooltip: {
							borderColor: "#000",
							borderWidth: "2px",
							fontSize: "18px",
						},
						controls: {
							visible: false, // turn of zooming. Doesn't work with bounding box
						},
						hoverState: {
							alpha: 0.28,
						},
					},
					zooming: true, // turn of zooming. Doesn't work with bounding box
				},
			},
			{
				type: "zingchart.maps",
				options: {
					name: "ind",
					panning: false, // turn of zooming. Doesn't work with bounding box
					zooming: false,
					scrolling: false,
					style: {
						tooltip: {
							borderColor: "#000",
							borderWidth: "2px",
							fontSize: "18px",
						},
						borderColor: "#000",
						borderWidth: "2px",
						controls: {
							visible: false, // turn of zooming. Doesn't work with bounding box
						},
						hoverState: {
							alpha: 0.28,
						},
						items: {
							KA: {
								tooltip: {
									text: "Karnataka has 2,851 monthly users total",
									backgroundColor: "#ff5722",
								},
								backgroundColor: "#ff5722",
								label: {
									visible: true,
								},
							},
							MH: {
								tooltip: {
									text: "Maharashtra has 2,683 monthly users total",
									backgroundColor: "#ff9800",
								},
								backgroundColor: "#ff9800",
								label: {
									visible: true,
								},
							},
							TL: {
								tooltip: {
									text: "Telangana has 1,494 monthly users total",
									backgroundColor: "#00AE4D",
								},
								backgroundColor: "#00AE4D",
								label: {
									visible: true,
								},
							},
							TN: {
								tooltip: {
									text: "Tamil Nadu has 1,968 monthly users total",
									backgroundColor: "#00bcd4",
								},
								backgroundColor: "#00bcd4",
								label: {
									visible: true,
								},
							},
						},
						label: {
							// text displaying. Like valueBox
							fontSize: "15px",
							visible: false,
						},
					},
					// eslint-disable-next-line no-dupe-keys
					zooming: true, // turn of zooming. Doesn't work with bounding box
				},
			},
		],
	};
	useEffect(() => {
		//  chartRef.current.loadModules("maps,maps-ind,maps-world-countries");
		// eslint-disable-next-line no-undef
		// zingchart.loadModules("maps,maps-ind,maps-world-countries");
		// eslint-disable-next-line no-undef
	}, []);
	const chartLoaded = () => {
		console.log("Chart Loaded");
		// eslint-disable-next-line no-undef
		//  zingchart.exec("covid", "reload", { graphid: 1 });
	};
	return (
		<div className="w-full relative h-screen">
			<ZingChart
				id="covid"
				data={chartConfig}
				ref={chartRef}
				heigth="800px"
				complete={chartLoaded}
			/>
            <div className="flex flex-row mt-16 ml-auto ">
                Covid Future Prediction
            </div>
		</div>
	);
}

export default MapComponent;
