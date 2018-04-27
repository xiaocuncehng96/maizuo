import React, {Component} from 'react';
import Header from '../common/Header';
import Content from '../common/Content';
export default class Film extends Component{
    render(){
        return(
            <div id='film' className='pages'>
                <Header title='影片'/>
                <Content/>
            </div>
        )
    }
}