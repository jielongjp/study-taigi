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
  action: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwrzcz8jup2uf00JAzmtL4EyOLFUISGCCfKYhsOHxgoI-L_clw3Puxku3YKPO4bKF2r549YE2Td6QB/pubhtml?gid=1508388282&single=true",
    description:
      "Phrases related to action words in Hokkien for intermediate to advanced learners.",
  },
  home: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwrzcz8jup2uf00JAzmtL4EyOLFUISGCCfKYhsOHxgoI-L_clw3Puxku3YKPO4bKF2r549YE2Td6QB/pubhtml?gid=1364435284&single=true",
    description:
      "Phrases related to home in Hokkien for intermediate to advanced learners.",
  },
  environment: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwrzcz8jup2uf00JAzmtL4EyOLFUISGCCfKYhsOHxgoI-L_clw3Puxku3YKPO4bKF2r549YE2Td6QB/pubhtml?gid=1816893528&single=true",
    description:
      "Phrases related to the environment in Hokkien for intermediate to advanced learners.",
  },
  interpersonal: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwrzcz8jup2uf00JAzmtL4EyOLFUISGCCfKYhsOHxgoI-L_clw3Puxku3YKPO4bKF2r549YE2Td6QB/pubhtml?gid=353478451&single=true",
    description:
      "Phrases related to relationships and communication between people.",
  },
};

export default PhraseTypes;
