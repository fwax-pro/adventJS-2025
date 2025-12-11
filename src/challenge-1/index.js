function filterGifts(gifts) {
  if (!Array.isArray(gifts)) {
    return [];
  }

  return gifts.filter((gif) => !gif.includes("#"));
}

export default filterGifts;
