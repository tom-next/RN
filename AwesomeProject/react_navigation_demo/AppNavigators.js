import {createStackNavigator} from 'react-navigation'
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Platform} from 'react-native'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Page4 from '../pages/Page4'
// import Page5 from '../pages/Page5'
import HomePage from '../pages/HomePage'

export const MaterialTopTabNavigator = createMaterialTopTabNavigator({//在这里配置页面的路由
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: 'Page10',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            }
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: 'Page4',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-people'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: 'Page3',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-chatboxes'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            }
        },
    },
    {
        tabBarOptions: {
            tabStyle: {
                minWidth: 50
            },
            upperCaseLabel: false,//是否使标签大写，默认为true
            scrollEnabled: true,//是否支持 选项卡滚动，默认false
            // activeTintColor: 'white',//label和icon的前景色 活跃状态下（选中）
            // inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
            style: {
                backgroundColor: '#678',//TabBar 的背景颜色
            },
            indicatorStyle: {
                height: 2,
                backgroundColor: 'white',
            },//标签指示器的样式
            labelStyle: {
                fontSize: 13,
                marginTop: 6,
                marginBottom: 6,
            },//文字的样式
        },
    }
)

export const BottomTabNavigator = createBottomTabNavigator({//在这里配置页面的路由
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: 'Page10',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'Page2',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-people'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: 'Page3',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-chatboxes'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    }
})

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
    Bottom: {
        screen: BottomTabNavigator,
        navigationOptions: ({navigation}) => {
            // 在这里定义每个页面的导航数据，静态配置
            title: `This is BottomTabNavigator`
        }
    },
    Top: {
        screen: MaterialTopTabNavigator,
        navigationOptions: ({navigation}) => {
            // 在这里定义每个页面的导航数据，静态配置
            title: `This is MaterialTopTabNavigator`
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