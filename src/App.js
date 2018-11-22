import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import banner from './assets/images/banner.jpg';
import 'normalize.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
class App extends Component {
  click() {
    toast.warn("敬请期待，你期待的总会发生～");
  }
  render() {
    return (
      <div className="App">
        <img src={banner} alt=""/>
        <div className="content">
          {['了解 Mohouse', '了解成员', '了解作品', '一起约歌'].map((item, index) => (
            <div key={index} onClick={this.click.bind(this)}>{item}</div>
          ))}
        </div>
        <ToastContainer/>
      </div>
    );
  }
}

export default App;
