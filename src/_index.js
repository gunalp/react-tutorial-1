//search yapmadan önceki hali

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from  'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCG5kHMcUimpTWYjJLhPaDb6XgI037DZW0';

class App extends Component {

  // Bu şekilde yazılınca ilk önce  0 sayısı görülüyor.
  // sonra length geliyor.

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo : null
     };

    YTSearch({key:API_KEY,term:'surfboards'}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      })
      //this.setState({ videos: videos}) yukarı ile aynı
    })

  }

  render() {
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );

  }
}

/* İlk Yaptığım
//Create a new component. This component should produce some HTML
const App =  () => {
  return (<div>
      <SearchBar />
    </div>)
}
*/

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
