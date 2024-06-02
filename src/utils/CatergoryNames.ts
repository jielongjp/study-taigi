interface Category {
  url: string;
  is_freq?: boolean;
  vocab_description?: string;
}

interface CategoryName {
  [category: string]: Category;
}

const CategoryNames: CategoryName = {
  taiwan_food: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1814397280&single=true",
  },
  colors: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=70370957&single=true",
  },
  fruit_and_veg: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1626957566&single=true",
  },
  hobbies: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1225906239&single=true",
  },
  family: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=0&single=true",
  },
  animals: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=934038451&single=true",
  },
  numbers: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=74349032&single=true",
  },
  places: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1557824374&single=true",
  },
  taste: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=610825890&single=true",
  },
  home: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1530419016&single=true",
  },
  weather: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1054642637&single=true",
  },
  body: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1899740434&single=true",
  },
  clothes: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1167911748&single=true",
  },
  emotions: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1312510160&single=true",
  },
  transport: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=702917173&single=true",
  },
  school: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=213711171&single=true",
  },
  travel: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1043842277&single=true",
  },
  adjectives: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=531229956&single=true",
  },
  christmas: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=312614104&single=true",
  },
  days_of_the_week: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1757834596&single=true",
  },
  technology: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=173773526&single=true",
  },
  sports: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1028551617&single=true",
  },
  top_4000: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1084627403&single=true",
    is_freq: true,
  },
  top_500: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=311547712&single=true",
    is_freq: true,
  },
  top_500_to_1000: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=787094167&single=true",
    is_freq: true,
  },
  top_1000_to_1500: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1647092263&single=true",
    is_freq: true,
  },
  top_1500_to_2000: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1599019213&single=true",
    is_freq: true,
  },
  top_2000_to_3000: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=93796143&single=true",
    is_freq: true,
  },
  top_3000_to_4000: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=84457090&single=true",
    is_freq: true,
  },
  taiwanese_made_easier_book_one: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=835144357&single=true",
    vocab_description:
      "Basic Taiwanese Hokkien Vocabulary from the Taiwanese Made Easier series book one.",
  },
  taiwanese_made_easier_book_two: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=282438743&single=true",
    vocab_description:
      "Basic Taiwanese Hokkien Vocabulary from the Taiwanese Made Easier series book two.",
  },
};

export default CategoryNames;
