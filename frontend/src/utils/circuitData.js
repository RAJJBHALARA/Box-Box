export const CIRCUIT_DATA = {
  "BAHRAIN GP": {
    country: "BHR",
    gpName: "Bahrain Grand Prix",
    circuitName: "BAHRAIN INTERNATIONAL CIRCUIT",
    speedScale: "HIGH",
    topSpeed: "323",
    length: "5.412",
    corners: "15",
    drsZones: "3",
    lapRecord: { time: "1:31.447", driver: "P. DE LA ROSA", year: "2005" },
    winners: [
      { year: "2024", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:31:44.742", teamColor: "#3671C6" },
      { year: "2023", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:33:56.736", teamColor: "#3671C6" },
      { year: "2022", driver: "C. Leclerc", team: "Ferrari", time: "1:37:33.584", teamColor: "#E8002D" },
      { year: "2021", driver: "L. Hamilton", team: "Mercedes", time: "1:32:03.897", teamColor: "#27F4D2" },
      { year: "2020", driver: "L. Hamilton", team: "Mercedes", time: "2:59:47.515", teamColor: "#27F4D2" }
    ],
    environment: { airTemp: "28.5", trackTemp: "33.2", humidity: "45", wind: "14.2" },
    svgPath: "M50,150 L100,50 L200,80 L250,30 L300,100 L350,150 L300,200 L150,180 Z"
  },
  "SAUDI ARABIAN GP": null, // Will use generic placeholder
  "AUSTRALIAN GP": {
    country: "AUS",
    gpName: "Australian Grand Prix",
    circuitName: "ALBERT PARK CIRCUIT",
    speedScale: "HIGH",
    topSpeed: "321",
    length: "5.278",
    corners: "14",
    drsZones: "4",
    lapRecord: { time: "1:19.813", driver: "C. LECLERC", year: "2024" },
    winners: [
      { year: "2024", driver: "C. Sainz", team: "Ferrari", time: "1:20:26.843", teamColor: "#E8002D" },
      { year: "2023", driver: "M. Verstappen", team: "Red Bull Racing", time: "2:32:38.371", teamColor: "#3671C6" },
      { year: "2022", driver: "C. Leclerc", team: "Ferrari", time: "1:27:46.548", teamColor: "#E8002D" },
      { year: "2019", driver: "V. Bottas", team: "Mercedes", time: "1:25:27.325", teamColor: "#27F4D2" },
      { year: "2018", driver: "S. Vettel", team: "Ferrari", time: "1:29:33.283", teamColor: "#E8002D" }
    ],
    environment: { airTemp: "24.2", trackTemp: "38.6", humidity: "42", wind: "12.4" },
    svgPath: "M100,100 C150,50 200,80 250,50 C300,20 350,100 300,150 C250,200 150,220 100,150 Z"
  },
  "JAPANESE GP": {
    country: "JPN",
    gpName: "Japanese Grand Prix",
    circuitName: "SUZUKA INTERNATIONAL RACING COURSE",
    speedScale: "HIGH",
    topSpeed: "315",
    length: "5.807",
    corners: "18",
    drsZones: "1",
    lapRecord: { time: "1:30.983", driver: "L. HAMILTON", year: "2019" },
    winners: [
      { year: "2024", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:54:23.566", teamColor: "#3671C6" },
      { year: "2023", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:30:58.421", teamColor: "#3671C6" },
      { year: "2022", driver: "M. Verstappen", team: "Red Bull Racing", time: "3:01:44.004", teamColor: "#3671C6" },
      { year: "2019", driver: "V. Bottas", team: "Mercedes", time: "1:21:46.755", teamColor: "#27F4D2" },
      { year: "2018", driver: "L. Hamilton", team: "Mercedes", time: "1:27:22.062", teamColor: "#27F4D2" }
    ],
    environment: { airTemp: "21.6", trackTemp: "29.4", humidity: "65", wind: "8.1" },
    svgPath: "M100,100 C150,80 200,50 250,100 C280,130 350,50 300,180 C250,150 150,200 100,150 Z" // figure 8 roughly
  },
  "MONACO GP": {
    country: "MCO",
    gpName: "Monaco Grand Prix",
    circuitName: "CIRCUIT DE MONACO",
    speedScale: "LOW",
    topSpeed: "295",
    length: "3.337",
    corners: "19",
    drsZones: "1",
    lapRecord: { time: "1:12.909", driver: "L. HAMILTON", year: "2021" },
    winners: [
      { year: "2024", driver: "C. Leclerc", team: "Ferrari", time: "2:23:15.554", teamColor: "#E8002D" },
      { year: "2023", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:48:51.980", teamColor: "#3671C6" },
      { year: "2022", driver: "S. Perez", team: "Red Bull Racing", time: "1:56:30.265", teamColor: "#3671C6" },
      { year: "2021", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:38:56.820", teamColor: "#3671C6" },
      { year: "2019", driver: "L. Hamilton", team: "Mercedes", time: "1:43:28.437", teamColor: "#27F4D2" }
    ],
    environment: { airTemp: "23.8", trackTemp: "45.1", humidity: "55", wind: "5.4" },
    svgPath: "M150,50 L250,50 C300,50 320,100 280,150 L200,180 C150,200 100,150 100,100 Z"
  },
  "BRITISH GP": {
    country: "GBR",
    gpName: "British Grand Prix",
    circuitName: "SILVERSTONE CIRCUIT",
    speedScale: "HIGH",
    topSpeed: "330",
    length: "5.891",
    corners: "18",
    drsZones: "2",
    lapRecord: { time: "1:27.097", driver: "M. VERSTAPPEN", year: "2020" },
    winners: [
      { year: "2024", driver: "L. Hamilton", team: "Mercedes", time: "1:22:27.059", teamColor: "#27F4D2" },
      { year: "2023", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:25:16.938", teamColor: "#3671C6" },
      { year: "2022", driver: "C. Sainz", team: "Ferrari", time: "2:17:50.311", teamColor: "#E8002D" },
      { year: "2021", driver: "L. Hamilton", team: "Mercedes", time: "1:58:23.284", teamColor: "#27F4D2" },
      { year: "2020", driver: "L. Hamilton", team: "Mercedes", time: "1:28:01.283", teamColor: "#27F4D2" }
    ],
    environment: { airTemp: "19.5", trackTemp: "26.3", humidity: "72", wind: "18.5" },
    svgPath: "M100,150 L120,80 L200,50 L280,100 L320,180 L250,220 L150,200 Z"
  },
  "ITALIAN GP": {
    country: "ITA",
    gpName: "Italian Grand Prix",
    circuitName: "AUTODROMO NAZIONALE MONZA",
    speedScale: "HIGH",
    topSpeed: "355",
    length: "5.793",
    corners: "11",
    drsZones: "2",
    lapRecord: { time: "1:21.046", driver: "R. BARRICHELLO", year: "2004" },
    winners: [
      { year: "2024", driver: "C. Leclerc", team: "Ferrari", time: "1:14:40.727", teamColor: "#E8002D" },
      { year: "2023", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:13:41.143", teamColor: "#3671C6" },
      { year: "2022", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:20:27.511", teamColor: "#3671C6" },
      { year: "2021", driver: "D. Ricciardo", team: "McLaren", time: "1:21:54.365", teamColor: "#FF8000" },
      { year: "2020", driver: "P. Gasly", team: "AlphaTauri", time: "1:47:06.056", teamColor: "#2B4562" }
    ],
    environment: { airTemp: "27.1", trackTemp: "40.5", humidity: "38", wind: "9.2" },
    svgPath: "M50,150 L100,50 L300,50 L350,150 Z" // simple fast shape
  },
  "BELGIAN GP": {
    country: "BEL",
    gpName: "Belgian Grand Prix",
    circuitName: "SPA-FRANCORCHAMPS",
    speedScale: "HIGH",
    topSpeed: "340",
    length: "7.004",
    corners: "19",
    drsZones: "2",
    lapRecord: { time: "1:46.286", driver: "V. BOTTAS", year: "2018" },
    winners: [
      { year: "2024", driver: "L. Hamilton", team: "Mercedes", time: "1:19:57.566", teamColor: "#27F4D2" },
      { year: "2023", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:22:30.450", teamColor: "#3671C6" },
      { year: "2022", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:25:52.894", teamColor: "#3671C6" },
      { year: "2021", driver: "M. Verstappen", team: "Red Bull Racing", time: "0:03:27.071", teamColor: "#3671C6" },
      { year: "2020", driver: "L. Hamilton", team: "Mercedes", time: "1:24:08.761", teamColor: "#27F4D2" }
    ],
    environment: { airTemp: "18.2", trackTemp: "24.1", humidity: "60", wind: "11.0" },
    svgPath: "M80,100 L150,50 L300,80 L350,200 L200,180 L100,200 Z"
  },
  "SINGAPORE GP": {
    country: "SGP",
    gpName: "Singapore Grand Prix",
    circuitName: "MARINA BAY STREET CIRCUIT",
    speedScale: "LOW",
    topSpeed: "305",
    length: "4.940",
    corners: "19",
    drsZones: "4",
    lapRecord: { time: "1:34.908", driver: "L. HAMILTON", year: "2025" },
    winners: [
      { year: "2024", driver: "L. Norris", team: "McLaren", time: "1:40:52.571", teamColor: "#FF8000" },
      { year: "2023", driver: "C. Sainz", team: "Ferrari", time: "1:46:12.154", teamColor: "#E8002D" },
      { year: "2022", driver: "S. Perez", team: "Red Bull Racing", time: "2:02:20.238", teamColor: "#3671C6" },
      { year: "2019", driver: "S. Vettel", team: "Ferrari", time: "1:58:33.667", teamColor: "#E8002D" },
      { year: "2018", driver: "L. Hamilton", team: "Mercedes", time: "1:51:11.611", teamColor: "#27F4D2" }
    ],
    environment: { airTemp: "31.4", trackTemp: "36.2", humidity: "82", wind: "7.5" },
    svgPath: "M100,150 L200,100 L250,50 L350,150 L200,220 Z"
  }
};

export const getCircuitInfo = (gpName) => {
  // Try to find an exact match first
  for (const [key, value] of Object.entries(CIRCUIT_DATA)) {
    if (value && (gpName.toUpperCase().includes(key) || key === gpName.toUpperCase() || value.gpName.toUpperCase().includes(gpName.toUpperCase()))) {
      return value;
    }
  }

  // Generic fallback if not matched
  return {
    country: "UN", // UN flag generic
    gpName: gpName,
    circuitName: `${gpName.toUpperCase()} CIRCUIT`,
    speedScale: "MEDIUM",
    topSpeed: "315",
    length: "5.025",
    corners: "15",
    drsZones: "2",
    lapRecord: { time: "1:18.992", driver: "M. VERSTAPPEN", year: "2022" },
    winners: [
      { year: "2024", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:30:11.123", teamColor: "#3671C6" },
      { year: "2023", driver: "M. Verstappen", team: "Red Bull Racing", time: "1:28:44.221", teamColor: "#3671C6" },
      { year: "2022", driver: "C. Leclerc", team: "Ferrari", time: "1:32:05.111", teamColor: "#E8002D" },
      { year: "2021", driver: "L. Hamilton", team: "Mercedes", time: "1:33:14.232", teamColor: "#27F4D2" },
      { year: "2020", driver: "V. Bottas", team: "Mercedes", time: "1:31:05.212", teamColor: "#27F4D2" }
    ],
    environment: { airTemp: "25.0", trackTemp: "35.0", humidity: "50", wind: "10.0" },
    svgPath: "M100,100 C150,50 250,50 300,100 C350,150 250,200 200,200 C150,200 50,150 100,100 Z" // simple generic oval
  };
};
