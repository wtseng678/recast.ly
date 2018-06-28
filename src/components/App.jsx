class App extends React.Component {
  constructor(props) {
    super(props);
    // props.searchYouTube;
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData,
      value: '',
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
    this.onButtonClick(this.state['value']);
  }
  
  onButtonClick(event) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: event,
    };
    var that = this;
    searchYouTube(options, function(data) { that.setState({currentVideo: data[0], videoList: data}); });
  }
  
  changeVideo(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onClick={this.onButtonClick} value={this.state.value} onChange={this.handleChange}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onClick={this.changeVideo} />
          </div>
        </div>
      </div>
    );
  }
  
  componentDidMount() {
    var that = this;
    that.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: ' ',
    }, function(data) {
      that.setState({currentVideo: data[0], videoList: data});
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;