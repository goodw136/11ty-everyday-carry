
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("itemTitle", function(itemNumber, itemTitle) {
    return `<h1>Everyday Carry #${itemNumber}: ${itemTitle}</h1>`;
  });
};