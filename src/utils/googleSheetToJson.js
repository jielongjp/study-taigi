const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");
const CategoryNames = require("./CatergoryNames");

async function fetchVocab() {
  try {
    for (const category in CategoryNames) {
      const { url } = CategoryNames[category];

      if (!url) {
        console.error(`No URL found for category: ${category}`);
        continue;
      }

      const jsonFileName = `${category}.json`;
      const jsonFilePath = __dirname + `/data/vocab/${jsonFileName}`;

      const response = await axios.get(url);
      const htmlData = response.data;
      const $ = cheerio.load(htmlData);

      const tableRows = $("tbody tr");

      const sheetRows = tableRows
        .map((_, row) => {
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

      await fs.promises.writeFile(jsonFilePath, vocabData);

      console.log(`Data for '${category}' saved`);
    }

    console.log("All data saved");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchVocab();
