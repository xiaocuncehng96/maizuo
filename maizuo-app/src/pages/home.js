import React, {Component} from 'react';
import Header from '../common/Header';
import Content from '../common/Content';
export default class Home extends Component{
    render(){
        return(
            <div id='home' className='pages'>
                <Header title='卖座电影'/>
                <Content/>
            </div>
        )
    }
}