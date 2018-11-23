import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import moment from 'moment';
import banner from './assets/images/banner.jpg';
import 'normalize.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

const musicList = [
  {
    name: 'let it go!',
    url: '',
    signer: ['小A','小B','测试','测试','测试','测试'],
    date: +new Date()
  },
  {
    name: 'let it go!',
    url: '',
    signer: ['小A','小B','测试','测试','测试','测试'],
    date: +new Date()
  },
  {
    name: 'let it go!',
    url: '',
    signer: ['小A','小B','测试','测试','测试','测试'],
    date: +new Date()
  },
  {
    name: 'let it go!',
    url: '',
    signer: ['小A','小B','测试','测试','测试','测试'],
    date: +new Date()
  },
];

const partnerList = [
  {
    name: '小c',
    avatar: 'https://wx1.sinaimg.cn/square/a620c821ly1fxi1c9yambj20g50a375o.jpg',
    intro: '这是小c的具体介绍，这是小c的具体介绍，这是小c的具体介绍，这是小c的具体介绍',
    musicList: [
      {
        name: '测试歌曲一',
        url: '',
        signer: ['测试','测试','测试','测试','测试','测试'],
        date: +new Date()
      },
      {
        name: '测试歌曲一',
        url: '',
        signer: ['测试','测试','测试','测试','测试','测试'],
        date: +new Date()
      }
    ]
  },
  {
    name: '小c',
    avatar: 'https://wx1.sinaimg.cn/square/a620c821ly1fxi1c9yambj20g50a375o.jpg',
    intro: '这是小c的具体介绍，这是小c的具体介绍，这是小c的具体介绍，这是小c的具体介绍',
    musicList: [
      {
        name: '测试歌曲一',
        url: '',
        signer: ['测试','测试','测试','测试','测试','测试'],
        date: +new Date()
      },
      {
        name: '测试歌曲一',
        url: '',
        signer: ['测试','测试','测试','测试','测试','测试'],
        date: +new Date()
      }
    ]
  },
  {
    name: '小c',
    avatar: 'https://wx1.sinaimg.cn/square/a620c821ly1fxi1c9yambj20g50a375o.jpg',
    intro: '这是小c的具体介绍，这是小c的具体介绍，这是小c的具体介绍，这是小c的具体介绍',
    musicList: [
      {
        name: '测试',
        url: '',
        signer: ['测试','测试','测试','测试','测试','测试'],
        date: +new Date()
      },
      {
        name: '测试',
        url: '',
        signer: ['测试','测试','测试','测试','测试','测试'],
        date: +new Date()
      }
    ]
  },
  {
    name: '小c',
    avatar: 'https://wx1.sinaimg.cn/square/a620c821ly1fxi1c9yambj20g50a375o.jpg',
    intro: '这是小c的具体介绍，这是小c的具体介绍，这是小c的具体介绍，这是小c的具体介绍',
    musicList: [
      {
        name: '测试',
        url: '',
      },
      {
        name: '测试',
        url: '',
      }
    ]
  }
]

const planList = [
  {
    name: '计划合唱歌曲',
    url: '',
    signer: ['计划合唱歌曲','计划合唱歌曲','计划合唱歌曲','计划合唱歌曲','计划合唱歌曲','计划合唱歌曲'],
    date: +new Date()
  },
  {
    name: '计划合唱歌曲',
    url: '',
    signer: ['计划合唱歌曲','计划合唱歌曲','计划合唱歌曲','计划合唱歌曲','计划合唱歌曲','计划合唱歌曲'],
    date: +new Date()
  },
];

const timeLineList = [
  {
    date: +new Date(),
    brief: '小a加入',
  },
  {
    date: +new Date(),
    brief: '第一次约歌',
    content: '第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌'
  },
  {
    date: +new Date(),
    brief: '第一次约歌',
    content: '第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌'
  },
  {
    date: +new Date(),
    brief: '小a加入',
  },
  {
    date: +new Date(),
    brief: '第一次约歌',
    content: '第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌'
  },
  {
    date: +new Date(),
    brief: '小a加入',
  },
  {
    date: +new Date(),
    brief: '第一次约歌',
    content: '第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌'
  },
  {
    date: +new Date(),
    brief: '第一次约歌',
    content: '第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌'
  },
  {
    date: +new Date(),
    brief: '第一次约歌',
    content: '第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌'
  },
  {
    date: +new Date(),
    brief: '第一次约歌',
    content: '第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌'
  },
  {
    date: +new Date(),
    brief: '小a加入',
  },
  {
    date: +new Date(),
    brief: '第一次约歌',
    content: '第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌'
  },
  {
    date: +new Date(),
    brief: '第一次约歌',
    content: '第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌,第一次约歌'
  },
]
class App extends Component {
  play() {
    toast.warn('播放器正在制造中...');
  }
  render() {
    return (
      <div className="app">
        <div className="app__banner">
          <img src={banner} alt="banner"/>
        </div>
        <div className="app__introduce">
          <p>Mohouse. 介绍. 音乐和小伙伴～</p>
        </div>
        <ul className="app__musicList">
          {musicList.map((item, index) => (
            <li key={index} className="app__musicList-item">
              <div className="app__musicList-item__name">作品名：{item.name}</div>
              <div className="app__musicList-item__content">
                <p>参与小伙伴：{item.signer.join(',')}</p>
                <p>{moment(item.date).format('YYYY-MM-DD')}</p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="app__partnerList">
          {partnerList.map((item, index) => (
            <li key={index} className="app__partnerList-item">
              <div className="app__partnerList-item__intro">
                <img src={item.avatar} alt=""/>
                <p className="app__partnerList-item__intro-name">{item.name}</p>
                <p className="app__partnerList-item__intro-content">{item.intro}</p>
              </div>
              <ul className="app__partnerList-item__musicList">
                {item.musicList.map((item, index) => <li key={index} className="app__partnerList-item__musicList-item">{item.name}</li>)}
              </ul>
            </li>
          ))}
        </ul>
        <ul className="app__planList">
          {planList.map((item, index) => (
            <li key={index} className="app__planList-item">
              <div className="app__planList-item__name">{item.name}</div>
              <div className="app__planList-item__content">
                <p>{item.signer.join(',')}</p>
                <p>{moment(item.date).format('YYYY-MM-DD')}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="app__timeLine">
          <ul className="app__timeLine-left">
            {timeLineList.filter((item, index) => index % 2 === 0).map((item, index) => (
              <li key={index} className="app__timeLine-item">
                <p>{item.brief}</p>
                {item.content ? <p>{item.content}</p> : null}
              </li>
            ))}
          </ul>
          <div className="app__timeLine-mid">
            <div className="app__timeLine-mid__line"></div>
          </div>
          <ul className="app__timeLine-right">
            {timeLineList.filter((item, index) => index % 2 !== 0).map((item, index) => (
              <li key={index} className="app__timeLine-item">
                <p>{item.brief}</p>
                {item.content ? <p>{item.content}</p> : null}
              </li>
            ))}
          </ul>
        </div>
        <ToastContainer/>
      </div>
    );
  }
}

export default App;
