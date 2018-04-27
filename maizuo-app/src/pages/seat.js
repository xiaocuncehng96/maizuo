import React, {Component} from 'react';
import Header from '../common/Header';
import Content from '../common/Content';
export default class Seat extends Component{
    render(){
        return(
            <div id='seat' className='pages'>
                <Header title='卖座卡'/>
                <Content/>
            </div>
        )
    }
}