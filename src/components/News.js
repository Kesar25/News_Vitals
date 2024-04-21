import React, { Component } from 'react'
import NewItems from './NewItems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(){
    super();
    console.log("Hi I am a constructor!");
    this.state={
      articles:[],
      page:1,
      loading:true,
      totalResults:0
    }
  }

 

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3ddfee9bf286413595b490c0fae359d0&category=${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json() 
    
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
       
    })

}
    async componentDidMount(){
      this.updateNews()
    }

 
  fetchMoreData = async () => {  
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3ddfee9bf286413595b490c0fae359d0&category=${this.props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
    })
  };
  
  render() {
    let {category} =this.props
    return (
      <>
      <div className='container my-3'>
        <h2>News Vitals- Get your daily dose of news here!</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
        <div className='row'>
          {
            this.state.articles.map((element)=>{
              return <div className='col-md-3' key={element.url}>
                <NewItems title={element.title} url={element.url} imgUrl={element.urlToImage} desc={element.description}/>
              </div>
            })
          }
        </div>
        </div>
        
        </InfiniteScroll>
      </div>
      
      </>
    )
  }
}
