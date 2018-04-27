import React, {Component} from 'react';
import Header from '../common/Header';
import Content from '../common/Content';
export default class Cinema extends Component{
    render(){
        return(
            <div id='cinema' className='pages'>
                <Header title='影院'/>
                <Content/>
            </div>
        )
    }
}