class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    console.log(event.target.value);
    this.onButtonClick(event.target.value);
  }
  
  onButtonClick(query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: query,
    };
    this.props.searchYouTube(options, function(data) { 
      this.setState({currentVideo: data[0], videoList: data}); 
    }.bind(this));
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
            <Search onChange={_.throttle(this.handleChange, 500)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onClick={this.changeVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
  
  componentDidMount() {
    this.onButtonClick();
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;