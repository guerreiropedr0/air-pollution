const countryToPath = (country) => country.toLowerCase().replace(/[,()]/g, '').split(' ').join('');

export const searchFunc = (c, item) => c.common.toLowerCase().includes(item.toLowerCase().trim());

export default countryToPath;
