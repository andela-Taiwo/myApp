import React from 'react';
import $ from 'jquery';
import Request from 'superagent';
import { Link } from 'react-router';

export  default class Latest extends React.Component{
    constructor() {
        super();
        this.state = { result: [] }
    }

    componentDidMount(){
    console.log('componentDidMount');

    const url= 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe';
    Request
    .get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end ((error, response)=>{
        const data=response.body
        console.log(data);
        const{ articles } = data;
        const{author} = articles;
        console.log(articles);
        const newsList = [];
        for(var i=0 ; i<articles.length; i++){
        newsList.push(<tr key={articles[i].url}><td>{articles[i].author}</td><td>{articles[i].description}</td><td><Link>{articles[i].url}</Link></td></tr>);

        this.setState({
          result: newsList
        })
        }

})
}
    render() {
        return (
            <div>
              <h1>Latest News</h1>
              <table className="table table-hover">
                <tbody>
                  {this.state.result}
                </tbody>
              </table>
            </div>
        );
    }
}
