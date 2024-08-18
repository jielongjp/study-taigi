interface Category {
  url: string;
  is_freq?: boolean;
  en?: string;
  zh?: string;
}

interface CategoryName {
  [category: string]: Category;
}

const CategoryNames: CategoryName = {
  taiwan_food: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1814397280&single=true",
    en: "Taiwan Food",
    zh: "",
  },
  colors: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=70370957&single=true",
    en: "Colors",
    zh: "",
  },
  fruit_and_veg: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1626957566&single=true",
    en: "Fruit and Veg",
    zh: "",
  },
  hobbies: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1225906239&single=true",
    en: "Hobbies",
    zh: "",
  },
  family: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=0&single=true",
    en: "Family",
    zh: "",
  },
  animals: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=934038451&single=true",
    en: "Animals",
    zh: "",
  },
  numbers: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=74349032&single=true",
    en: "Numbers",
    zh: "",
  },
  places: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1557824374&single=true",
    en: "Places",
    zh: "",
  },
  taste: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=610825890&single=true",
    en: "Taste",
    zh: "",
  },
  home: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1530419016&single=true",
    en: "Home",
    zh: "",
  },
  weather: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1054642637&single=true",
    en: "Weather",
    zh: "",
  },
  body: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1899740434&single=true",
    en: "Body",
    zh: "",
  },
  clothes: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1167911748&single=true",
    en: "Clothes",
    zh: "",
  },
  emotions: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1312510160&single=true",
    en: "Emotions",
    zh: "",
  },
  transport: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=702917173&single=true",
    en: "Transport",
    zh: "",
  },
  school: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=213711171&single=true",
    en: "School",
    zh: "",
  },
  travel: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1043842277&single=true",
    en: "Travel",
    zh: "",
  },
  adjectives: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=531229956&single=true",
    en: "Adjectives",
    zh: "",
  },
  christmas: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=312614104&single=true",
    en: "Christmas",
    zh: "",
  },
  days_of_the_week: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1757834596&single=true",
    en: "Days of the Week",
    zh: "",
  },
  technology: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=173773526&single=true",
    en: "Technology",
    zh: "",
  },
  sports: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1028551617&single=true",
    en: "Sports",
    zh: "",
  },
  top_4000: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1084627403&single=true",
    is_freq: true,
    en: "Top 4000",
    zh: "",
  },
  top_500: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=311547712&single=true",
    is_freq: true,
    en: "Top 500",
    zh: "",
  },
  top_500_to_1000: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=787094167&single=true",
    is_freq: true,
    en: "Top 500 to 1000",
    zh: "",
  },
  top_1000_to_1500: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1647092263&single=true",
    is_freq: true,
    en: "Top 1000 to 1500",
    zh: "",
  },
  top_1500_to_2000: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1599019213&single=true",
    is_freq: true,
    en: "Top 1500 to 2000",
    zh: "",
  },
  top_2000_to_3000: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=93796143&single=true",
    is_freq: true,
    en: "Top 2000 to 3000",
    zh: "",
  },
  top_3000_to_4000: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=84457090&single=true",
    is_freq: true,
    en: "Top 3000 to 4000",
    zh: "",
  },
};

export default CategoryNames;
