import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// import { redirect, store, URI } from '@src/utils/index';
// import http from '@src/models/index';
// import './detail.less'


export default class App extends Component {

  config = {
    // enablePullDownRefresh: true,
    // navigationBarTitleText: '首页',
    // usingComponents: {
    // }
  }

  state = {
    list: [],
  }

//   onPullDownRefresh() {
//     this.fetchData();
//   }

  // 在微信小程序中这一生命周期方法对应 onLoad
  componentWillMount() {
    // const id = this.\$router.params.id;

    // this.setState({
    //   id
    // });
  }

  onShareAppMessage() {
    // let title = '';
    // let imageUrl = '';
    // let path = URI['vipDetail'] + '?id=' + this.state.id;
    // const share = this.state.share;
    // if (isObject(share)) {
    //   title = share['title'] || title;
    //   imageUrl = share['imageUrl'] || imageUrl;
    //   path = share['path'] || path;
    // }
    // return {
    //   title,
    //   path,
    //   imageUrl,
    //   success() {

    //   },
    //   fail() {

    //   }
    // };
  }

  fetchData() {
    // const params = {
    //   id: this.state.id
    // };
    // http.run('vipDetail', params)
    //   .then((data) => {
    //     const list = data.data.list;

    //     this.setState({
    //       list,
    //     });
    //   })
    //   .catch(() => {
    //     // TODO: 数据不存在，页面为空
    //   });
  }

  // 在微信小程序中这一生命周期方法对应 onReady
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    // this.fetchData();
  }

  componentDidHide () { }

  render () {
    return (
      <View>

      </View>
    )
  }
}