import React from "react";
import { formatRelative } from "date-fns";
import * as dictionary from "date-fns/esm/locale";

import {
  datesDictionary,
  DatesDictionaryKeysT,
  WordsDictT,
} from "./dates-dictionary";

import "./App.css";

const isLocaleDictExist = <T,>(language: unknown): language is T =>
  typeof language === "string" &&
  Object.keys(datesDictionary).includes(language);

const App = () => {
  const date = new Date();
  const languageFromProps: string = "enUS";
  const defaultLanguage: DatesDictionaryKeysT = "ru";

  const language = isLocaleDictExist<DatesDictionaryKeysT>(languageFromProps)
    ? languageFromProps
    : defaultLanguage;

  const dict: WordsDictT = datesDictionary[language];

  const locale = {
    ...dictionary[language],
    formatRelative: (token: keyof WordsDictT) => dict[token],
  };

  const dateString = formatRelative(date, new Date(), { locale });

  return (
    <div className="App">
      <div>{dateString}</div>
    </div>
  );
};

export default App;
