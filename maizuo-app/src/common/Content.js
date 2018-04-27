import React, {Component} from 'react';
export default class Content extends Component{
    render(){
        return(
            <div id='content' >
                {this.props.children}
            </div>
        )
    }
}