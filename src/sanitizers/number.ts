interface IOptions {
    min?: number,
    max?: number,
}
const defaultOptions = {
    min: -Infinity,
    max: Infinity
}
const number = (value: any, options: IOptions = {}): number => {
    const { min, max } = { ...defaultOptions, ...options }

    const v = parseInt(typeof value === 'string' ? value.replace(/^0+/, '') : value, 10)
    if (!Number.isNaN(v)) {
        if (v >= min && v <= max) {
            return v
        }
        if (v < min) {
            return min
        }
        if (v > max) {
            return max
        }
    }
    return 0
}
export default number