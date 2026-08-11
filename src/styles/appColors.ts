import { default as tailwindColors, default as tw } from "./tailwindColors";

const app = {
  bg: tw.blue['50'],
  text: tw.neutral['900'],
  textMuted: tw.gray['400'],
}

const logo = {
  text: tailwindColors.blue['700']
}

const container = {
  bg: tw.white,
  border: tw.neutral['300'],
  text: app.text
}

const input = {
  border: container.border,
  placeholder: app.textMuted
}

const button = {
  text: tailwindColors.white,
  bg: tailwindColors.blue['600'],
  bgSuccess: tailwindColors.green['600'],
  bgWarning: tailwindColors.yellow['600'],
  bgDanger: tailwindColors.red['600'],
  bgNeutral: tailwindColors.neutral['600']
}

const appColors = {
  ...app,
  logo,
  container,
  input,
  button
}

export default appColors