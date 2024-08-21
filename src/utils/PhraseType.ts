interface Phrase {
  url: string;
  description?: string;
}

interface PhraseType {
  [phrasetype: string]: Phrase;
}

const PhraseTypes: PhraseType = {
  food: {
    url: "https://docs.google.com/spreadsheets/d/1NiN_AS9emnaHlvtnc83jhiBQwXij1OfmiaHT3MVFAQA/pubhtml?gid=116269086&single=true",
    description:
      "Phrases related to food in Hokkien for intermediate to advanced learners.",
  },
  transport: {
    url: "https://docs.google.com/spreadsheets/d/1NiN_AS9emnaHlvtnc83jhiBQwXij1OfmiaHT3MVFAQA/pubhtml?gid=1982340161&single=true",
    description:
      "Phrases related to transport in Hokkien for intermediate to advanced learners.",
  },
};

export default PhraseTypes;
