const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");
const CategoryNames = require("./CatergoryNames");

async function fetchVocab() {
  try {
    for (const category in CategoryNames) {
      const spreadsheetUrl = CategoryNames[category];
      const jsonFileName = `${category}.json`;
      const jsonFilePath = __dirname + `/data/vocab/${jsonFileName}`;

      const response = await axios.get(spreadsheetUrl);
      const $ = cheerio.load(response.data);

      const tableRows = $("tbody tr");

      const sheetRows = tableRows
        .map((row) => {
          const cells = $(row).find("td");
          let rowData = {
            columnA: $(cells[0]).text() || "",
            columnB: $(cells[1]).text() || "",
            columnC: $(cells[2]).text() || "",
            columnD: $(cells[3]).text() || "",
            columnE: $(cells[4]).text() || "",
            columnF: $(cells[5]).text() || "",
            columnG: $(cells[6]).text() || "",
            columnL: $(cells[11]).text() || "",
          };

          if (rowData.columnG && rowData.columnG.includes("Example sentence")) {
            rowData = {
              ...rowData,
              columnH: $(cells[7]).text() || "",
              columnI: $(cells[8]).text() || "",
              columnJ: $(cells[9]).text() || "",
              columnK: $(cells[10]).text() || "",
            };
          }

          if (rowData.columnL && rowData.columnL.includes("Example sentence")) {
            rowData = {
              ...rowData,
              columnM: $(cells[12]).text() || "",
              columnN: $(cells[13]).text() || "",
              columnO: $(cells[14]).text() || "",
              columnP: $(cells[15]).text() || "",
            };
          }

          return rowData;
        })
        .get();

      const vocabData = JSON.stringify(sheetRows, null, 2);

      console.log(vocabData);

      await fs.writeFile(jsonFilePath, vocabData, (err) => {
        if (err) {
          console.error("Error: ", err);
        } else {
          console.log("Data written with fs");
        }
      });

      console.log(`Data for '${category}' saved`);
    }

    console.log("Data saved");
  } catch (error) {
    console.error("Error: ", error);
  }
}
fetchVocab();
