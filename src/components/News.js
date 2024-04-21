import React, { Component } from 'react'
import NewItems from './NewItems'
import Spinner from './Spinner';

export default class News extends Component {
  constructor(){
    super();
    console.log("Hi I am a constructor!");
    this.state={
      articles:[],
      page:1,
      loading:false
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3ddfee9bf286413595b490c0fae359d0&category=${this.props.category}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData)
    this.setState({
      articles:parsedData.articles,
      loading:false
    })

  }

  handleNextClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3ddfee9bf286413595b490c0fae359d0&page=${this.state.page+1}&category=${this.props.category}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page+1,
      loading:false
    })
  }
  handlePrevClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3ddfee9bf286413595b490c0fae359d0&page=${this.state.page-1}&category=${this.props.category}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page-1,
      loading:false
    })
  }
  render() {
    let {category} =this.props
    return (
      <>
      {this.state.loading && <Spinner/>}
      <div className='container my-3'>
        <h2>News Vitals- Get your daily dose of news here!</h2>
        
        <div className='row'>
          {!this.state.loading && 
            this.state.articles.map((element)=>{
              return <div className='col-md-3' key={element.url}>
                <NewItems title={element.title} url={element.url} imgUrl={element.urlToImage} desc={element.description}/>
              </div>
            })
          }
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark "> &larr; Previous</button>
        <button type="button"  onClick={this.handleNextClick} className="btn btn-dark ">Next &rarr;</button>
        </div>
      </div>
      
      </>
    )
  }
}
