import React, { Component } from 'react'

export default class NewItems extends Component {
  

  render() {
    let {title, url, imgUrl, desc}=this.props

    return (
      <>
        <div className="card my-3" style={{width: "18rem"}}>
          <img src={imgUrl?imgUrl:"./random.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <a href={url} className="btn btn-dark">Read Article</a>
            </div>
        </div>
      </>
    )
  }
}
