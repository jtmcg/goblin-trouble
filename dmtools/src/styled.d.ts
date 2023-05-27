// import original module declarations
import 'styled-components';

interface Border {
    thin: "2px";
    normal: "4px";
    thick: "8px";
}

interface BorderRadius {
    hard: "2px";
    soft: "4px";
}

interface Color {
    black: '#000000';
    white: '#FFFFFF';
    lightgray: '#CCCCCC';
}

interface Margin {
    tight: "0.25rem";
    small: "0.5rem";
    normal: "1rem";
    large: "2rem";
}

interface Padding {
    thin: "2px";
    normal: "4px";
    thick: "8px";
}
declare module 'styled-components' {
  export interface DefaultTheme {
    border: Border;
    borderRadius: BorderRadius;
    borderStyle: {[key: string]: string};
    color: Color;
    margin: Margin;
    padding: Padding;
  }
}