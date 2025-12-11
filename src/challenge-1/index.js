function filterGifts(gifts) {
    if (!Array.isArray(gifts)) {
        return [];
    }
    
    return gifts.filter(gif => !gif.includes('#'))
}

module.exports = filterGifts;