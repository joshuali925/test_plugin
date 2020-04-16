
const sampleData = {
  airports_idx: {
  },
  flights_idx: {
  },
  Cargo: {
  },
  Passengers: {
  },
}

for (const index in sampleData) {
  sampleData[index].y = Array.from({length: 10}, () => Math.floor(Math.random() * 40));
  sampleData[index].x = Array.from({ length: sampleData[index].y.length }, (x, i) => i + 1);
}

export default sampleData;