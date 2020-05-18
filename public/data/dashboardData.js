
const propx = Array.from({ length: 450 }, (x, i) => i),
  propy = Array.from({ length: 450 }, () => Math.random() * 15 + 100),
  propy2 = Array.from({ length: 120 }, () => Math.random() * 1),
  now = Date.now()
export const datalist = [
  {
    data: [
      {
        x: propx,
        y: propy,
        line: {
          color: 'rgb(132, 207, 228)',
          width: 1,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'web_server_01',
        displayModeBar: false,
        fill: 'tonexty',  // tozeroy
      },
      {
        x: propx,
        y: propy.map(y => y * 2),
        line: {
          color: 'rgb(82, 133, 189)',
          width: 1,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'web_server_02',
        displayModeBar: false,
        fill: 'tonexty',
      },
      {
        x: propx,
        y: propy.map(y => y * 3),
        line: {
          color: 'rgb(31, 77, 145)',
          width: 1,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'web_server_03',
        displayModeBar: false,
        fill: 'tonexty',
      },
      {
        x: propx,
        y: propy.map(y => y * 4),
        line: {
          color: 'rgb(27, 61, 108)',
          width: 1,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'web_server_04',
        displayModeBar: false,
        fill: 'tonexty',
      },
    ],
    title: 'Server Requests',
  },
  {
    data: [
      {
        x: Array.from({ length: 30 }, (x, i) => i),
        y: Array.from({ length: 30 }, (x, i) => (Math.random() * 1) / 40),
        marker: {
          color: 'rgb(172, 158, 148)',
        },
        width: 0.65,
        type: 'bar',
        name: 'upper_25',
        displayModeBar: false,
      },
      {
        x: Array.from({ length: 30 }, (x, i) => i),
        y: Array.from({ length: 30 }, (x, i) => (Math.random() * 1 + 5) / 40),
        marker: {
          color: 'rgb(242, 200, 110)',
        },
        width: 0.65,
        type: 'bar',
        name: 'upper_50',
        displayModeBar: false,
      },
      {
        x: Array.from({ length: 30 }, (x, i) => i),
        y: Array.from({ length: 30 }, (x, i) => (Math.random() * 4 + 20) / 40),
        marker: {
          color: 'rgb(234, 184, 57)',
        },
        width: 0.65,
        type: 'bar',
        name: 'upper_75',
        displayModeBar: false,
      },
      {
        x: Array.from({ length: 30 }, (x, i) => i),
        y: Array.from({ length: 30 }, (x, i) => (Math.random() * 11 + 55) / 40),
        marker: {
          color: 'rgb(239, 133, 60)',
        },
        width: 0.65,
        type: 'bar',
        name: 'upper_90',
        displayModeBar: false,
      },
      {
        x: Array.from({ length: 30 }, (x, i) => i),
        y: Array.from({ length: 30 }, (x, i) => (Math.random() * 16 + 80) / 40),
        marker: {
          color: 'rgb(226, 76, 66)',
        },
        width: 0.65,
        type: 'bar',
        name: 'upper_95',
        displayModeBar: false,
      }
    ],
    title: 'Client Side Full Page Load',
    layout: {
      yaxis:
      {
          ticksuffix: " s"
      }
    }
  },
  {
    data: [
      {
        x: Array.from({ length: 120 }, (x, i) => i),
        y: Array.from({ length: 120 }, (x, i) => (Math.random() * 1) / 10),
        line: {
          color: 'rgb(101, 157, 86)',
          width: 2.2,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'upper_25',
        displayModeBar: false,
        fill: 'tozeroy',  // tozeroy
        fillcolor: 'rgba(101, 157, 86, 0.25)',
      },
      {
        x: Array.from({ length: 120 }, (x, i) => i),
        y: Array.from({ length: 120 }, (x, i) => (propy2[i] * 1 + Math.random() * 1 + 1) / 10),
        line: {
          color: 'rgb(101, 157, 86)',
          width: 2.2,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'upper_50',
        displayModeBar: false,
        fill: 'tozeroy',  // tozeroy
        fillcolor: 'rgba(101, 157, 86, 0.25)',
      },
      {
        x: Array.from({ length: 120 }, (x, i) => i),
        y: Array.from({ length: 120 }, (x, i) => (propy2[i] * 1 + Math.random() * 1 + 8) / 10),
        line: {
          color: 'rgb(91, 150, 77)',
          width: 2.2,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'upper_75',
        displayModeBar: false,
        fill: 'tozeroy',
        fillcolor: 'rgba(91, 150, 77, 0.25)',
      },
      {
        x: Array.from({ length: 120 }, (x, i) => i),
        y: Array.from({ length: 120 }, (x, i) => (propy2[i] * 9 + Math.random() * 3 + 13) / 10),
        line: {
          color: 'rgb(91, 150, 77)',
          width: 2.2,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'upper_90',
        displayModeBar: false,
        fill: 'tozeroy',
        fillcolor: 'rgba(91, 150, 77, 0.25)',
      },
      {
        x: Array.from({ length: 120 }, (x, i) => i),
        y: Array.from({ length: 120 }, (x, i) => (propy2[i] * 18 + Math.random() * 3 + 18) / 10),
        line: {
          color: 'rgb(80, 134, 66)',
          width: 2.2,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'upper_95',
        displayModeBar: false,
        fill: 'tozeroy',
        fillcolor: 'rgba(80, 134, 66, 0.25)',
      },
      {
        x: Array.from({ length: 120 }, (x, i) => i),
        y: Array.from({ length: 120 }, (x, i) => (-(propy2[i] * 1 + Math.random() * 1 + 8)) / 10),
        line: {
          color: 'rgb(30, 120, 193)',
          width: 2.2,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'cpu1',
        displayModeBar: false,
        fill: 'tozeroy',
        fillcolor: 'rgba(30, 120, 193, 0.25)',
      },
      {
        x: Array.from({ length: 120 }, (x, i) => i),
        y: Array.from({ length: 120 }, (x, i) => (-(propy2[i] * 18 + Math.random() * 3 + 18)) / 10),
        line: {
          color: 'rgb(130, 181, 216)',
          width: 2.2,
          dash: 'solid',
          shape: 'linear',
        },
        type: 'scatter',
        name: 'cpu2',
        displayModeBar: false,
        fill: 'tozeroy',
        fillcolor: 'rgba(130, 181, 216, 0.25)',
      },
    ],
    title: 'Traffic In/Out',
    layout: {
      yaxis:
      {
          ticksuffix: " kB"
      }
    }
  },
];