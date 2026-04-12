export const DRIVER_IMAGES = {
  // 2025 Current Grid
  VER: "https://media.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png",
  NOR: "https://media.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png",
  PIA: "https://media.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png",
  LEC: "https://media.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png",
  HAM: "https://media.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png",
  RUS: "https://media.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png",
  SAI: "https://media.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png",
  ALO: "https://media.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png",
  STR: "https://media.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png",
  OCO: "https://media.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png",
  GAS: "https://media.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png",
  TSU: "https://media.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png",
  ALB: "https://media.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png",
  HUL: "https://media.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png",
  MAG: "https://media.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png",
  BOT: "https://media.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png",
  ANT: "https://media.formula1.com/content/dam/fom-website/drivers/A/ANDANT01_Andrea_Kimi_Antonelli/andant01.png",
  BEA: "https://media.formula1.com/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png",
  LAW: "https://media.formula1.com/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png",
  DOO: "https://media.formula1.com/content/dam/fom-website/drivers/J/JACDOO01_Jack_Doohan/jacdoo01.png",
  HAD: "https://media.formula1.com/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png",
  COL: "https://media.formula1.com/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png",

  // F1 Legends
  MSC: "https://media.formula1.com/content/dam/fom-website/drivers/M/MIKSCH01_Michael_Schumacher/miksch01.png",
  VET: "https://media.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png",
  RAI: "https://media.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_Raikkonen/kimrai01.png",
  ROS: "https://media.formula1.com/content/dam/fom-website/drivers/N/NICROS01_Nico_Rosberg/nicros01.png",
  BUT: "https://media.formula1.com/content/dam/fom-website/drivers/J/JENBUT01_Jenson_Button/jenbut01.png",
  SEN: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Ayrton_Senna_1991_Canada.jpg/400px-Ayrton_Senna_1991_Canada.jpg",
  PRO: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Alain_Prost_1990_Canada.jpg/400px-Alain_Prost_1990_Canada.jpg",
};

export const getDriverImage = (code) => DRIVER_IMAGES[code] || null;

