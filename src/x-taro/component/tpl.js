import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
// import './index.less';

export default class AppComponent extends Component {

  // 原生组件生命周期 https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html
  // 在微信小程序中这一生命周期方法对应 created
  // https://github.com/NervJS/taro/blob/master/docs/taroize.md
  componentWillMount () { }

  // 在微信小程序中这一生命周期方法对应 onReady attached
  componentDidMount () { }

  // 在微信小程序中这一生命周期方法对应 detached
  componentWillUnmout () { }

  // 表示当父组件（或页面）发生更新时将带动子组件进行更新时调用的方法。
  componentWillReceiveProps () { }

  render () {
    return (
      <View>

      </View>
    )
  }
}

// PropTypes https://nervjs.github.io/taro/docs/props.html
AppComponent.defaultProps = {

}