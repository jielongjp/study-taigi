interface CategoryName {
  [category: string]: string; // spreadsheets are publicly posted so no need for env
}

const CategoryNames: CategoryName = {
  food: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1814397280&single=true',
  colors:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=70370957&single=true',
  hobbies:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1225906239&single=true',
  family:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=0&single=true',
  animals:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=934038451&single=true',
  places:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1557824374&single=true',
  taste:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=610825890&single=true',
};

export default CategoryNames;
