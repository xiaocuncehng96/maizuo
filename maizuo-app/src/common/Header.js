import React, {Component} from 'react';
import propTypes from 'prop-types';
import Observer from '../content/observer'
export default class Header extends Component{
    render(){
        return(
            <header id='header'>
                <div className='header-left'>
                    <div className='menu' onClick={this.showMenu.bind(this)}>
                        <span className="iconfont icon-caidan"></span>
                    </div>
                    <div className="title">
                        <span>{this.props.title}</span>
                    </div>
                </div>
                <div className='header-right'>
                    <div className='addres'>
                        <i>深圳</i>
                        <span>此处修改</span>
                        <span className="iconfont icon-jiantouxia"></span>
                    </div>
                    <div className="name">
                        <span className="iconfont icon-wode"></span>
                    </div>
                </div>
            </header>
        )
    }
    showMenu(){
        Observer.$emit('menu-show')
    }
}
Header.propTypes={
    title:propTypes.string
}