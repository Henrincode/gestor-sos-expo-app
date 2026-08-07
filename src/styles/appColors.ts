import tw from "./tailwindColors";

const app = {
  bg: tw.blue[50],
  text: tw.neutral[900],
  textMuted: tw.gray[400],
}

const container = {
  bg: tw.white,
  border: tw.neutral[300],
  text: app.text
}

const input = {
  border: container.border,
  placeholder: app.textMuted
}

const appColors = {
  ...app,
  container,
  input
}

export default appColors