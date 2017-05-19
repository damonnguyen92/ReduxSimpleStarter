import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar.js';

import VideoDetail from './components/video_detail.js';
import VideoList from './components/video_list.js';
import YTsearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCJjNOMPIhm1L1wmTqUpqsLm3MwSWElxAI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }

    YTsearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      console.log('data: ', videos);
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

ReactDom.render(<App />, document.getElementById('app'));