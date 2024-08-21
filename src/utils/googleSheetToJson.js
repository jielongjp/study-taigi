const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");
const CategoryNames = require("./CatergoryNames"); // Ensure the path and name are correct

async function fetchVocab() {
  try {
    // Debugging: Log the imported CategoryNames
    console.log("CategoryNames:", CategoryNames);

    for (const category in CategoryNames) {
      const { url, vocab_description } = CategoryNames[category];

      if (!url) {
        console.error(`No URL found for category: ${category}`);
        continue;
      }

      console.log(`Processing category: ${category}`);
      console.log(`URL for ${category}: ${url}`);

      const jsonFileName = `${category}.json`;
      const jsonFilePath = __dirname + `/data/vocab/${jsonFileName}`;

      // Fetch data
      const response = await axios.get(url);
      const htmlData = response.data;

      // Debugging: Log the HTML content
      console.log(`HTML content for ${category}:`, htmlData.slice(0, 500)); // Log first 500 chars

      const $ = cheerio.load(htmlData);

      // Extract table rows
      const tableRows = $("tbody tr");

      // Debugging: Log number of rows found
      console.log(`Number of rows found for ${category}:`, tableRows.length);

      const sheetRows = tableRows
        .map((_, row) => {
          const cells = $(row).find("td");

          // Debugging: Log number of cells in the row
          console.log(`Number of cells found in row:`, cells.length);

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

      // Debugging: Log the JSON data
      console.log(`Data for '${category}':`, vocabData);

      await fs.promises.writeFile(jsonFilePath, vocabData); // Use fs.promises for async/await

      console.log(`Data for '${category}' saved`);
    }

    console.log("All data saved");
  } catch (error) {
    console.error("Error:", error.message);
    console.error("Stack Trace:", error.stack);
  }
}

fetchVocab();
