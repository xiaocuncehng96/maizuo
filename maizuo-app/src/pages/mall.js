import React, {Component} from 'react';
import Header from '../common/Header';
import Content from '../common/Content';
export default class Mall extends Component{
    render(){
        return(
            <div id='mall' className='pages'>
                <Header title='商城'/>
                <Content/>
            </div>
        )
    }
}