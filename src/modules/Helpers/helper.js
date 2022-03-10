const countryToPath = (country) => country.toLowerCase().replace(/[,()]/g, '').split(' ').join('');

export const searchFunc = (link, item) => (
  link.text.toLowerCase().includes(item.toLowerCase().trim()));

export default countryToPath;
