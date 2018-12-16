const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomColor = () => {
    const R = getRandomInt(0, 250)
    const V = getRandomInt(0, 250)
    const B = getRandomInt(0, 250)
    return  'rgba(' + R + ',' + V + ',' + B + ')'
}

export const getGradient = (primary, secondary) => {
    return  'linear-gradient(45deg, ' + primary + ' , ' + secondary + ')'
}

export const getRandomUserTheme = () => {
    const primary = getRandomColor()
    const secondary = getRandomColor()
    const gradient = getGradient(primary, secondary)
    const userPalette = {
        primary: primary,
        secondary: secondary,
        gradient: gradient
    }
    return userPalette
}
