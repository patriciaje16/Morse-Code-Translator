import { words } from "lodash";
import { letters } from "./data.js";

export const convertToMorse = (str) => {
  const upperCaseArray =  str.toUpperCase().split("");
  return upperCaseArray.map((letter) => {
    return letters[letter]
  }).join(" ");
  
};

export const convertToSentence = (str) => {
  const words = convertToMorse(str).split("  ")
return words.join(" / ")
}


  



 

