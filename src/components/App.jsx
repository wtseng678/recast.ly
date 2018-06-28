class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData,
    };
  }
  
  onButtonClick(query) {
    var options = {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      type: 'video',
      max: 5,
      videoEmbeddable: true,
      q: query,
    };
    searchYouTube(options, function(data) { console.log(data); });
  }
  
  onClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  render() {
    // searchYouTube({ key: window.YOUTUBE_API_KEY, query: 'cats', max: 10}, function() {});
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onClick={this.onButtonClick.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onClick={this.onClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;