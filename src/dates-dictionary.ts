export type WordsDictT = {
  lastWeek: string;
  nextWeek: string;
  other: string;
  tomorrow: string;
  yesterday: string;
  today: string;
};

export const datesDictionary = {
  enUS: {
    tomorrow: "'tomorrow'",
    today: "'today'",
    yesterday: "'yesterday'",
    nextWeek: "d MMM yyyy",
    lastWeek: "d MMM yyyy",
    other: "d MMM yyyy",
  },

  ru: {
    tomorrow: "'завтра'",
    today: "'сегодня'",
    yesterday: "'вчера'",
    nextWeek: "d MMMM yyyy",
    lastWeek: "d MMMM yyyy",
    other: "d MMMM yyyy",
  },

  es: {
    tomorrow: "'mañana'",
    today: "'hoy'",
    yesterday: "'ayer'",
    nextWeek: "d MMM yyyy",
    lastWeek: "d MMM yyyy",
    other: "d MMM yyyy",
  },

  tr: {
    tomorrow: "'yarın'",
    today: "'bugün'",
    yesterday: "'dün'",
    nextWeek: "d MMM yyyy",
    lastWeek: "d MMM yyyy",
    other: "d MMM yyyy",
  },
};

export type DatesDictionaryKeysT = keyof typeof datesDictionary;
