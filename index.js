var fs = require('fs');
hexo.extend.filter.register('before_post_render', function(data){
    var file_content = fs.readFileSync('./push.js');
        data.content += file_content;
    return data;
});