import { DefaultTheme } from 'styled-components';

const border: DefaultTheme["border"] = {
    thin: "2px",
    normal: "4px",
    thick: "8px",
}

const borderRadius: DefaultTheme["borderRadius"] = {
    hard: "2px",
    soft: "4px",
}

const color: DefaultTheme["color"] = {
    black: '#000000',
    white: '#FFFFFF',
    lightgray: '#CCCCCC',
}

const margin: DefaultTheme["margin"] = {
    tight: "0.25rem",
    small: "0.5rem",
    normal: "1rem",
    large: "2rem",
}

const padding: DefaultTheme["padding"] = {
    thin: "2px",
    normal: "4px",
    thick: "8px",
}

const theme: DefaultTheme = {
  border: border,
  borderRadius: borderRadius,
  borderStyle: {
    solidblackheavy: `solid ${color.black} ${border.thick}`,
    solidblacknormal: `solid ${color.black} ${border.normal}`,
    solidblackthin: `solid ${color.black} ${border.thin}`,
  },
  color: color,
  margin: margin,
  padding: padding,
};


export { theme };