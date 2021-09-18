import React, {Component} from 'react';
import {HashRouter,Route, Redirect} from 'react-router-dom';
import Observer from './content/observer'

import Home from './pages/home'
import Film from './pages/film'
import Cinema from './pages/cinema'
import Mine from './pages/mine'
import Tabs from './common/Tabs'
import Mall from './pages/mall'
import Seat from './pages/seat'
export default class App extends Component{
  constructor(){
    super();
    this.state={
      menuShow:false
    }
  }
  componentWillMount(){
    Observer.$on('menu-show',()=>{
      this.setState({menuShow:!this.state.menuShow})
    })
  }
  render(){
    let menu = this.state.menuShow?<Tabs/>:null
    return(
      <HashRouter>
        <div className='app'>
          <Route path='/' exact render={()=>{
            return <Redirect to='/home'/>
          }}/>
          <Route path='/home' component={Home}/>
          <Route path='/film' component={Film}/>
          <Route path='/cinema' component={Cinema}/>
          <Route path='/mine' component={Mine}/>
          <Route path='/mall' component={Mall}/>
          <Route path='/seat' component={Seat}/>

          {menu}
        </div>
      </HashRouter>
    )
  }
}