import React, {Component} from 'react';
import Header from '../common/Header';
import Content from '../common/Content';
export default class Mine extends Component{
    render(){
        return(
            <div id='mine' className='pages'>
                <Header title='我的'/>
                <Content/>
            </div>
        )
    }
}