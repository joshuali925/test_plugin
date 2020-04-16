
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
  sampleData[index].y = Array.from({ length: 10 }, () => Math.floor(Math.random() * 40));
  sampleData[index].x = Array.from({ length: sampleData[index].y.length }, (x, i) => i + 1);
  sampleData[index].insights = [];
  sampleData[index].insights.push(`Max: ${Math.max(...sampleData[index].y)}`)
  sampleData[index].insights.push(`Min: ${Math.min(...sampleData[index].y)}`)
  sampleData[index].insights.push(`Sum: ${sampleData[index].y.reduce((a, b) => a + b, 0)}`)
  sampleData[index].insights.push(`Average: ${sampleData[index].y.reduce((a, b) => a + b, 0) / sampleData[index].y.length}`)
}

export default sampleData;