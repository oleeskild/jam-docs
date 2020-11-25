module.exports = function(eleventyConfig) {

    eleventyConfig.addShortcode("resourcecard", function(resource) {
        return `
        <div class="card background-texture">
            <img class="logo" src="${resource.data.logo || ''}" />
            <h2>${resource.data.title}</h2>
            <h3>${resource.data.description}</h3>
            <div>${resource.templateContent}</div>
            <a href= "${resource.data.link}">Link</a>
        </div>`
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