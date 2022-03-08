const countryToPath = (country) => country.toLowerCase().replace(/[,()]/g, '').split(' ').join('');

export default countryToPath;
