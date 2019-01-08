import {createStackNavigator} from 'react-navigation'
import React from 'react'
import {Button} from 'react-native'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Page4 from '../pages/Page4'
// import Page5 from '../pages/Page5'
import HomePage from '../pages/HomePage'

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => {
            // 动态配置
            title: `${navigation.state.params.name}页面名`
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: ({navigation}) => {
            // 在这里定义每个页面的导航数据，静态配置
            title: `This is Page2`
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const {navigation} = props
            const {state, setParams} = navigation
            const {params} = state
            return {
                title: params.title ? params.title : 'This is page3',
                headerRight: (
                    <Button title={params.mode === 'edit' ? '保存' : '编辑'}
                            onPress={() => {
                                setParams({mode: params.mode === 'edit' ? '' : 'edit'})
                            }}
                    />
                )
            }
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: ({navigation}) => {
            // 在这里定义每个页面的导航数据，静态配置
            title: `This is Page4`
        }
    },
}, {
    // 这里可以分别为路由提供配置，以及对视图样式进行配置
    mode: 'modal', // modal: 上下切换; card: 左右切换
    headerMode: 'screen', // 导航栏的显示模式. float:无透明，screen:有渐变透明，none:隐藏
    onTransitionStart: () => {
        console.log("切换开始")
    }, // 页面切换开始时的回调函数 (我们可以在这里注册一些通知，告知我们切面切换的状态，方便后面处理页面切换事件)
    onTransitionEnd: () => {
        console.log("切换结束")
    }//页面切换结束时的回调函数
})