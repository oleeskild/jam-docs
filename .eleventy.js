module.exports = function(eleventyConfig) {

    eleventyConfig.addShortcode("button", function(text) {
        return `<button>${text}</button>`
    });
 
      // make the seed target act like prod
      return {
        dir: {
          input: "src/site",
          output: "dist",
          data: `_data`
        },
        templateFormats : ["njk", "md", "11ty.js"],
        htmlTemplateEngine : "njk",
        markdownTemplateEngine : "njk"
      };
    
    };