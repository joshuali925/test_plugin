
const sampleData = {
  airports_idx: {
    children: ["address", "IATA identifier"]
  },
  flights_idx: {
    children: ["number"]
  },
  Cargo: {
    children: []
  },
  Passengers: {
    children: ["name"]
  },
}

for (const index in sampleData) {
  sampleData[index].y = Array.from({ length: 10 }, () => Math.floor(Math.random() * 40));
  sampleData[index].x = Array.from({ length: sampleData[index].y.length }, (x, i) => i + 1);
  const data = sampleData[index].y;
  const sum = data.reduce((a, b) => a + b, 0);
  const avg = sum / data.length;
  sampleData[index].insights = [];
  sampleData[index].insights.push(`Min: ${Math.min(...sampleData[index].y)}`)
  sampleData[index].insights.push(`Max: ${Math.max(...sampleData[index].y)}`)
  sampleData[index].insights.push(`Sum: ${sum}`)
  sampleData[index].insights.push(`Average: ${avg}`)
  sampleData[index].insights.push(`Std. Dev.: ${Math.sqrt(data.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b) / data.length)}`)
}

export default sampleData;