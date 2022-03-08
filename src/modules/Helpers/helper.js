export const countryToPath = (country) => country.toLowerCase().replace(/[,()]/g, '').split(' ').join('');

export const continentToCamelCase = (continent) => continent[0].toLowerCase() + continent.slice(1).split(' ').join('');
