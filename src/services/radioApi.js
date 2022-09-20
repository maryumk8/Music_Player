const handleCategoryTabs = () => {
  return fetch("/https://api.deezer.com/radio");
};

const handleSearchArtist = (data) => {
  return fetch(`https://api.deezer.com/search?q=${data}`);
};
const handleTracklist = (data) => {
  return fetch(`https://api.deezer.com/radio/${data}/tracks`);
};
export { handleCategoryTabs, handleSearchArtist, handleTracklist };
