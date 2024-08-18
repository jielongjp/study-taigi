interface Phrase {
  url: string;
}

interface PhraseType {
  [phrasetype: string]: Phrase;
}

const PhraseTypes: PhraseType = {
  food: {
    url: "https://docs.google.com/spreadsheets/d/1NiN_AS9emnaHlvtnc83jhiBQwXij1OfmiaHT3MVFAQA/pubhtml?gid=116269086&single=true",
  },
  transport: {
    url: "https://docs.google.com/spreadsheets/d/1NiN_AS9emnaHlvtnc83jhiBQwXij1OfmiaHT3MVFAQA/pubhtml?gid=1982340161&single=true",
  },
};

export default PhraseTypes;
