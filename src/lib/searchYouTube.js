var searchYouTube = (options, callback) => {
  var obj = {
    'key': options.key,
    'q': options.query,
    'maxResults': options.max,
    'part': 'snippet',
    'videoEmbeddable': true,
    'type': 'video',
    'dataType': 'json',
  };
  
  $.get('https://www.googleapis.com/youtube/v3/search', obj, function(data) {
    callback(data.items);
  });
};

window.searchYouTube = searchYouTube;
