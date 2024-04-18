import React, { Component } from 'react'
import NewItems from './NewItems'

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
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=3ddfee9bf286413595b490c0fae359d0";
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData)
    this.setState({
      articles:parsedData.articles
    })

  }
  render() {
    return (
      <>
      <div className='container my-5'>
        <h2>News Vitals- Get your daily dose of news here!</h2>
        <div className='row'>
          {
            this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
                <NewItems title={element.title} url={element.url} imgUrl={element.urlToImage} desc={element.description}/>
              </div>
            })
          }
        </div>
      </div>
      </>
    )
  }
}
