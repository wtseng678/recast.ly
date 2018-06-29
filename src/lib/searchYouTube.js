var searchYouTube = (options, callback) => {
  var obj = {
    'key': options.key,
    'q': options.query,
    'maxResults': options.max,
    'part': 'snippet',
    'embeddable': true,
    'type': 'video',
  };
  
  $.get('https://www.googleapis.com/youtube/v3/search', obj, function(data) {
    callback(data.items);
  });
};

window.searchYouTube = searchYouTube;
