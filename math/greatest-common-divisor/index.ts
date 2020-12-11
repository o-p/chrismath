/**
 * 輾轉相除法，又稱歐幾里得算法
 */
const euclidean = (a: number, b: number): number => a === 0 ? b : euclidean(b % a, a);

export default euclidean;
