import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Tabs extends Component{
    constructor(){
        super();
        this.state={
            data:[
                {title:'首页', path:'/home'},
                {title:'影片', path:'/film'},
                {title:'影院', path:'/cinema'},
                {title:'商城', path:'/mall'},
                {title:'我的', path:'/mine'},
                {title:'卖座卡', path:'/seat'}
            ]
        }
    }
    render(){
        let {data} = this.state
        return(
            <div id='tabs'>
                <div className='wrap'></div>
                <ul className='list'>
                    {
                        data.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <NavLink to={item.path}>{item.title}
                                        <i className="iconfont icon-jiantouyou"></i>
                                    </NavLink>
                                </li>
                            )                           
                        })
                    }
                </ul>                              
            </div>
        )
    }
}