const sortByDisplayOrder=require('./src/utils/sort-by-display-order.js')
// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
module.exports=config=>{
    // Add filters
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);
    config.addPassthroughCopy('./src/images/')
    config.addCollection('blog',collection=>{
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    })

    config.addCollection('work', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'))
      });
    config.addCollection('featuredWork',collection=>{
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'))
            .filter(x=>x.data.featured)
    })
    return{
        markdownTemplateEngine:'njk',
        dataTemplateEngine:'njk',
        htmlTemplateEngine:'njk',
        dir:{
            input:'src',
            output:'dist'
        }
    }
}