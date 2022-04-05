import {convertToMorse} from "./app"
import {convertToSentence} from "./app"

describe('Tests to see if string of English words converts to Morse Code', () => {


  it('Converts letter into Morse-Code', () => {

   const result = convertToMorse  ("A")

   expect(result).toBe(".-")


  })

  it('Converts single word into Morse-Code', () => {
    const result = convertToMorse  ("Hello")

    expect(result).toBe(".... . .-.. .-.. ---")

  })

  it('Converts a single sentece into Morse-Code', () => {

    const result = convertToSentence ("hello how are you")
    
    expect(result).toBe(".... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-")

  })
})

