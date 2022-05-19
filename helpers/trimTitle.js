export const trimTitle = (str) => {
    if (str.length > 14) {
        const trim = str.slice(0, 15);
        return trim + '...'
    } else {
        return str;
    }
}