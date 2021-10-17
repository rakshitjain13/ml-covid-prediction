import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import 'zingchart/modules-es6/zingchart-maps.min.js';
import 'zingchart/modules-es6/zingchart-maps-ind.min.js';
import 'zingchart/modules-es6/zingchart-maps-world-countries.min.js';
import { useEffect, useRef } from 'react';

function MapComponent() {
  const chartRef = useRef();
  let chartConfig = {
    shapes: [
      {
        type: 'zingchart.maps',
        options: {
          bbox: [67.177, 36.494, 98.403, 6.965], // get bbox from zingchart.maps.getItemInfo('world-countries','ind');
          ignore: ['IND'], // ignore India because we are rendering a more specific India map below
          name: 'world.countries',
          panning: false, // turn of zooming. Doesn't work with bounding box
          style: {
            tooltip: {
              borderColor: '#000',
              borderWidth: '2px',
              fontSize: '18px',
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
        type: 'zingchart.maps',
        options: {
          name: 'ind',
          panning: false, // turn of zooming. Doesn't work with bounding box
          zooming: false,
          scrolling: false,
          style: {
            tooltip: {
              borderColor: '#000',
              borderWidth: '2px',
              fontSize: '18px',
            },
            borderColor: '#000',
            borderWidth: '2px',
            controls: {
              visible: false, // turn of zooming. Doesn't work with bounding box
            },
            hoverState: {
              alpha: 0.28,
            },
            items: {
              KL: {
                tooltip: {
                  text: 'Kerala will have a total of 3261921 cases by 8/12/2021',
                  backgroundColor: '#ff5722',
                },
                backgroundColor: '#ff5722',
                label: {
                  visible: true,
                },
              },
              TL: {
                tooltip: {
                  text: 'Telangana will have a total of 1042621.0 cases by 8/12/2021',
                  backgroundColor: '#4287f5',
                },
                backgroundColor: '#4287f5',
                label: {
                  visible: true,
                },
              },
              DL: {
                tooltip: {
                  text: 'Delhi will have a total of 2249181 cases by 8/12/2021',
                  backgroundColor: '#55fa5a',
                },
                backgroundColor: '#55fa5a',
                label: {
                  visible: true,
                },
              },
              RJ: {
                tooltip: {
                  text: 'Rajasthan will have a total of 1227046 cases by 8/12/2021',
                  backgroundColor: '#e04655',
                },
                backgroundColor: '#e04655',
                label: {
                  visible: true,
                },
              },
              UP: {
                tooltip: {
                  text: 'Uttar Pradesh will have a total of 2351539 cases by 8/12/2021',
                  backgroundColor: '#eda724',
                },
                backgroundColor: '#eda724',
                label: {
                  visible: true,
                },
              },
              HR: {
                tooltip: {
                  text: 'Haryana will have a total of 1034831 cases by 8/12/2021',
                  backgroundColor: '#0bb00b',
                },
                backgroundColor: '#0bb00b',
                label: {
                  visible: true,
                },
              },
              JK: {
                tooltip: {
                  text: 'Jammu and Kashmir will have a total of 468361 cases by 8/12/2021',
                  backgroundColor: '#1caaba',
                },
                backgroundColor: '#1caaba',
                label: {
                  visible: true,
                },
              },
              TN: {
                tooltip: {
                  text: 'Tamil Nadu will have a total of 2911785 cases by 8/12/2021',
                  backgroundColor: '#e04658',
                },
                backgroundColor: '#e04658',
                label: {
                  visible: true,
                },
              },
              KA: {
                tooltip: {
                  text: 'Karnataka will have a total of 3655387 cases by 8/12/2021',
                  backgroundColor: '#b5ba11',
                },
                backgroundColor: '#b5ba11',
                label: {
                  visible: true,
                },
              },
              MH: {
                tooltip: {
                  text: 'Maharashtra will have a total of 7347271 cases by 8/12/2021',
                  backgroundColor: '#04943b',
                },
                backgroundColor: '#04943b',
                label: {
                  visible: true,
                },
              },
              PB: {
                tooltip: {
                  text: 'Punjab will have a total of 680093 cases by 8/12/2021',
                  backgroundColor: '#21ebbf',
                },
                backgroundColor: '#21ebbf',
                label: {
                  visible: true,
                },
              },
              AP: {
                tooltip: {
                  text: 'Andhra Pradesh will have a total of 3460364 cases by 8/12/2021',
                  backgroundColor: '#983eed',
                },
                backgroundColor: '#983eed',
                label: {
                  visible: true,
                },
              },
              UT: {
                tooltip: {
                  text: 'Uttarakhand will have a total of 376489 cases by 8/12/2021',
                  backgroundColor: '#d8b4fa',
                },
                backgroundColor: '#d8b4fa',
                label: {
                  visible: true,
                },
              },
              OR: {
                tooltip: {
                  text: 'Orissa will have a total of 1305858 cases by 8/12/2021',
                  backgroundColor: '#e6f589',
                },
                backgroundColor: '#e6f589',
                label: {
                  visible: true,
                },
              },
              PY: {
                tooltip: {
                  text: 'Puducherry will have a total of 152430 cases by 8/12/2021',
                  backgroundColor: '#3c8f9e',
                },
                backgroundColor: '#3c8f9e',
                label: {
                  visible: true,
                },
              },
              WB: {
                tooltip: {
                  text: 'West Bengal will have a total of 2158031 cases by 8/12/2021',
                  backgroundColor: '#eb9752',
                },
                backgroundColor: '#eb9752',
                label: {
                  visible: true,
                },
              },
              CT: {
                tooltip: {
                  text: 'Chhattisgarh will have a total of 1166287 cases by 8/12/2021',
                  backgroundColor: '#3061f2',
                },
                backgroundColor: '#3061f2',
                label: {
                  visible: true,
                },
              },
              CH: {
                tooltip: {
                  text: 'Chandigarh will have a total of 81329 cases by 8/12/2021',
                  backgroundColor: '#A9FF33',
                },
                backgroundColor: '#A9FF33',
                label: {
                  visible: true,
                },
              },
              GJ: {
                tooltip: {
                  text: 'Gujarat will have a total of 905719 cases by 8/12/2021',
                  backgroundColor: '#33C9FF',
                },
                backgroundColor: '#33C9FF',
                label: {
                  visible: true,
                },
              },
              HP: {
                tooltip: {
                  text: 'Himachal Pradesh will have a total of 217875 cases by 8/12/2021',
                  backgroundColor: '#33C9FF',
                },
                backgroundColor: '#33C9FF',
                label: {
                  visible: true,
                },
              },
              MP: {
                tooltip: {
                  text: 'Madhya Pradesh will have a total of 966075 cases by 8/12/2021',
                  backgroundColor: '#FF3333',
                },
                backgroundColor: '#FF3333',
                label: {
                  visible: true,
                },
              },
              BR: {
                tooltip: {
                  text: 'Bihar will have a total of 921068 cases by 8/12/2021',
                  backgroundColor: '#FF3333',
                },
                backgroundColor: '#FF3333',
                label: {
                  visible: true,
                },
              },
              MN: {
                tooltip: {
                  text: 'Manipur will have a total of 111206 cases by 8/12/2021',
                  backgroundColor: '#DB33FF',
                },
                backgroundColor: '#DB33FF',
                label: {
                  visible: true,
                },
              },
              MZ: {
                tooltip: {
                  text: 'Mizoram will have a total of 16734 cases by 8/12/2021',
                  backgroundColor: '#DB33FF',
                },
                backgroundColor: '#DB33FF',
                label: {
                  visible: true,
                },
              },
              AN: {
                tooltip: {
                  text: 'Andaman and Nicobar Islands will have a total of 17659 cases by 8/12/2021',
                  backgroundColor: '#DB33FF',
                },
                backgroundColor: '#DB33FF',
                label: {
                  visible: true,
                },
              },
              GA: {
                tooltip: {
                  text: 'Goa will have a total of 199844 cases by 8/12/2021',
                  backgroundColor: '#33FF98',
                },
                backgroundColor: '#33FF98',
                label: {
                  visible: true,
                },
              },
              AS: {
                tooltip: {
                  text: 'Assam will have a total of 729479 cases by 8/12/2021',
                  backgroundColor: '#33FF98',
                },
                backgroundColor: '#33FF98',
                label: {
                  visible: true,
                },
              },
              JH: {
                tooltip: {
                  text: 'Jharkhand will have a total of 444017 cases by 8/12/2021',
                  backgroundColor: '#33FF4E',
                },
                backgroundColor: '#33FF4E',
                label: {
                  visible: true,
                },
              },
              AR: {
                tooltip: {
                  text: 'Arunachal Pradesh will have a total of 62377 cases by 8/12/2021',
                  backgroundColor: '#33FF4E',
                },
                backgroundColor: '#33FF4E',
                label: {
                  visible: true,
                },
              },
              TR: {
                tooltip: {
                  text: 'Tripura will have a total of 115940 cases by 8/12/2021',
                  backgroundColor: '#C5FF33',
                },
                backgroundColor: '#C5FF33',
                label: {
                  visible: true,
                },
              },
              NL: {
                tooltip: {
                  text: 'Nagaland will have a total of 35571 cases by 8/12/2021',
                  backgroundColor: '#C5FF33',
                },
                backgroundColor: '#C5FF33',
                label: {
                  visible: true,
                },
              },
              ML: {
                tooltip: {
                  text: 'Meghalaya will have a total of 52748 cases by 8/12/2021',
                  backgroundColor: '#FFCA33',
                },
                backgroundColor: '#FFCA33',
                label: {
                  visible: true,
                },
              },
              SK: {
                tooltip: {
                  text: 'Sikkim will have a total of 18498 cases by 8/12/2021',
                  backgroundColor: '#FFCA33',
                },
                backgroundColor: '#FFCA33',
                label: {
                  visible: true,
                },
              },
              DD: {
                tooltip: {
                  text: 'Dadra and Nagar Haveli will have a total of 10345 cases by 8/12/2021',
                  backgroundColor: '#FFCA33',
                },
                backgroundColor: '#FFCA33',
                label: {
                  visible: true,
                },
              },
            },
            label: {
              // text displaying. Like valueBox
              fontSize: '15px',
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
    console.log('Chart Loaded');
    // eslint-disable-next-line no-undef
    //  zingchart.exec("covid", "reload", { graphid: 1 });
  };
  return (
    <div className='w-full  h-screen bg-red-100 overflow-auto'>
      <ZingChart
        id='covid'
        data={chartConfig}
        ref={chartRef}
        height='680px'
        complete={chartLoaded}
      />
    </div>
  );
}

export default MapComponent;
