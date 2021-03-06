import { createProperty, createVariable } from './cssCalculationFunctions'

export interface CSSProperties {
  [key: string]: number|undefined|string
  smaller?: number
  default?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  unit?: string
}

// Everything is calculated automatically from these values
const height: CSSProperties = {
  smaller: 150,
  default: 350,
  xs: 250,
  sm: 300,
  md: 350,
  lg: 350,
  xl: 350
}
const titleTextSize: CSSProperties = {
  smaller: 60,
  default: 60,
  xs: 25,
  sm: 30,
  md: 40,
  lg: 50,
  xl: 60
}
const bgTextSize: CSSProperties = {
  smaller: 210,
  default: 370,
  xs: 280,
  sm: 370,
  md: 370,
  lg: 370,
  xl: 370
}
const laptopFromRight: CSSProperties = {
  smaller: 20,
  default: 20,
  xs: 20,
  sm: 20,
  md: 20,
  lg: 20,
  xl: 20
}
const characterFromLeft: CSSProperties = {
  default: 10,
  xs: 2,
  sm: 5,
  md: 10,
  lg: 10,
  xl: 10
}

interface Calculations {
  [key: string]: CustomFunction
}

export interface CustomFunctionValues {
  titleTextSize?: CSSProperties
  titleTextFromTop?: CSSProperties
  characterFromLeft?: CSSProperties
  characterWidth?: CSSProperties
  height?: CSSProperties
}

interface CustomFunctionWithScreenSize extends CustomFunctionValues {
  screenSize: string
}

export type CustomFunction = (values: CustomFunctionWithScreenSize) => number

const calculations: Calculations = {
  characterWidth: ({ height = {}, screenSize }) => height[screenSize] as number / 2.25,
  characterFromTop: ({ height = {} , screenSize }) => height[screenSize] as number * 0.014,
  titleTextFromLeft: ({ characterWidth = {}, characterFromLeft = {}, screenSize }) => characterWidth[screenSize] as number + (characterFromLeft[screenSize] as number) * 5,
  titleTextFromTop: ({ height = {}, titleTextSize = {}, screenSize }) => height[screenSize] as number / 2.1 - (titleTextSize[screenSize] as number * 0.35),
  laptopWidth: ({ height = {}, screenSize }) => height[screenSize] as number * 1.6,
  laptopFromTop: ({ height = {}, screenSize }) => height[screenSize] as number * 0.042,
  lineFromTop: ({ titleTextSize = {}, titleTextFromTop = {}, screenSize }) => titleTextSize[screenSize] as number * 0.75 + (titleTextFromTop[screenSize] as number),
  lineHeight: ({ titleTextSize = {}, screenSize }) => titleTextSize[screenSize] as number / 20
}

const characterWidth = createVariable({ height }, calculations.characterWidth)
const characterFromTop = createVariable({ height }, calculations.characterFromTop)
const titleTextFromLeft = createVariable({ characterWidth, characterFromLeft }, calculations.titleTextFromLeft)
const titleTextFromTop = createVariable({ height, titleTextSize }, calculations.titleTextFromTop)
const laptopWidth = createVariable({ height }, calculations.laptopWidth)
const laptopFromTop = createVariable({ height }, calculations.laptopFromTop)
const lineFromTop = createVariable({ titleTextSize, titleTextFromTop }, calculations.lineFromTop)
const lineHeight = createVariable({ titleTextSize }, calculations.lineHeight)

const settings = {
  height: createProperty(height),
  titleTextSize: createProperty(titleTextSize),
  bgTextSize: createProperty(bgTextSize),
  laptopFromRight: createProperty(laptopFromRight),
  characterWidth: createProperty(characterWidth),
  characterFromLeft: createProperty(characterFromLeft),
  characterFromTop: createProperty(characterFromTop),
  titleTextFromLeft: createProperty(titleTextFromLeft),
  titleTextFromTop: createProperty(titleTextFromTop),
  laptopWidth: createProperty(laptopWidth),
  laptopFromTop: createProperty(laptopFromTop),
  lineFromTop: createProperty(lineFromTop),
  lineHeight: createProperty(lineHeight),
}

export default settings
