/*
Theme file loosely based on System UI Theme Specification
https://system-ui.com/theme/
*/

const colorPrimitives = {
        black : '#000000',
        white : '#FFFFFF',
        gray100 : '#F7FAFC',
        gray200 : '#EDF2F7',
        gray300 : '#E2E8F0',
        gray400 : '#CBD5E0',
        gray500 : '#A0AEC0',
        gray600 : '#718096',
        gray700 : '#4A5568',
        gray800 : '#2D3748',
        gray900 : '#1A202C',
        red100 : '#FFF5F5',
        red200 : '#FED7D7',
        red300 : '#FEB2B2',
        red400 : '#FC8181',
        red500 : '#F56565',
        red600 : '#E53E3E',
        red700 : '#C53030',
        red800 : '#9B2C2C',
        red900 : '#742A2A',
        orange100 : '#FFFAF0',
        orange200 : '#FEEBC8',
        orange300 : '#FBD38D',
        orange400 : '#F6AD55',
        orange500 : '#ED8936',
        orange600 : '#DD6B20',
        orange700 : '#C05621',
        orange800 : '#9C4221',
        orange900 : '#7B341E',
        yellow100 : '#FFFFF0',
        yellow200 : '#FEFCBF',
        yellow300 : '#FAF089',
        yellow400 : '#F6E05E',
        yellow500 : '#ECC94B',
        yellow600 : '#D69E2E',
        yellow700 : '#B7791F',
        yellow800 : '#975A16',
        yellow900 : '#744210',
        green100 : '#F0FFF4',
        green200 : '#C6F6D5',
        green300 : '#9AE6B4',
        green400 : '#68D391',
        green500 : '#48BB78',
        green600 : '#38A169',
        green700 : '#2F855A',
        green800 : '#276749',
        green900 : '#22543D',
        teal100 : '#E6FFFA',
        teal200 : '#B2F5EA',
        teal300 : '#81E6D9',
        teal400 : '#4FD1C5',
        teal500 : '#38B2AC',
        teal600 : '#319795',
        teal700 : '#2C7A7B',
        teal800 : '#285E61',
        teal900 : '#234E52',
        blue100 : '#EBF8FF',
        blue200 : '#BEE3F8',
        blue300 : '#90CDF4',
        blue400 : '#63B3ED',
        blue500 : '#4299E1',
        blue600 : '#3182CE',
        blue700 : '#2B6CB0',
        blue800 : '#2C5282',
        blue900 : '#2A4365',
        indigo100 : '#EBF4FF',
        indigo200 : '#C3DAFE',
        indigo300 : '#A3BFFA',
        indigo400 : '#7F9CF5',
        indigo500 : '#667EEA',
        indigo600 : '#5A67D8',
        indigo700 : '#4C51BF',
        indigo800 : '#434190',
        indigo900 : '#3C366B',
        purple100 : '#FAF5FF',
        purple200 : '#E9D8FD',
        purple300 : '#D6BCFA',
        purple400 : '#B794F4',
        purple500 : '#9F7AEA',
        purple600 : '#805AD5',
        purple700 : '#6B46C1',
        purple800 : '#553C9A',
        purple900 : '#44337A',
        pink100 : '#FFF5F7',
        pink200 : '#FED7E2',
        pink300 : '#FBB6CE',
        pink400 : '#F687B3',
        pink500 : '#ED64A6',
        pink600 : '#D53F8C',
        pink700 : '#B83280',
        pink800 : '#97266D',
        pink900 : '#702459',
}

const colors = {
    ...colorPrimitives,
    text: colorPrimitives.gray800,
    textSecondary: colorPrimitives.gray600,
    textTertiary: colorPrimitives.gray500,
    invertedText: colorPrimitives.white,
    invertedTextSecondary: colorPrimitives.gray500,
    invertedTextTertiary:

}

const fonts = {
    text: `"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    display: `"Montserrat", Georgia, Cambria, "Times New Roman", Times, serif`,
    mono: `"Jetbrains Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
}

const baseFontSizes = {
    12 : '.75rem',
    14 : '.875rem',
    16 : '1rem',
    18 : '1.125rem',
    20 : '1.25rem',
    24 : '1.5rem',
    28 : '1.75rem',
    30 : '1.875rem',
    32 : '2rem',
    36 : '2.25rem',
    40 : '2.5rem',
    48 : '3rem',
    64 : '4rem',
}

const fontSizes = {
    ...baseFontSizes,
    body: baseFontSizes[16]
}

const baseSpace = {
    0 : '0rem',
    1 : '1px',
    2 : '0.125rem',
    4 : '0.25rem',
    8 : '0.5rem',
    12 : '0.75rem',
    14 : '0.875rem',
    16 : '1rem',
    20 : '1.25rem',
    24 : '1.5rem',
    32 : '2rem',
    40 : '2.5rem',
    48 : '3rem',
    64 : '4rem',
    80 : '5rem',
    96 : '6rem',
    128 : '8rem',
    160 : '10rem',
    192 : '12rem',
    224 : '14rem',
    256 : '16rem',
}

const space = {
    ...baseSpace,
    none: baseSpace[0],
    one: baseSpace[1],
    small: baseSpace[8],
    medium: baseSpace[12],
    large: baseSpace[20]
}

const breakpoints = {
    phone: '640px',
    tablet: '767px'
}

const transitions = {
    standard: '0.1s ease-in'
}

const theme = {
    colors,
    fonts,
    fontSizes,
    space,
    breakpoints,
    transitions
}

export default theme