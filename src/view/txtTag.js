import React, {Component} from "react";
import {Tag} from "antd";

//定义一个tab对象
const tab = {
    good:{
        color: "geekblue",
        txt: "精华"
    },
    top:{
        color: "magenta",
        txt:"置顶"
    },
    job:{
        color: "cyan",
        txt:"招聘"
    },
    ask:{
        color: "green",
        txt:"问答"
    },
    share:{
        color: "purple",
        txt:"分享"
    },
    dev:{
        color: "red",
        txt:"测试"
    }
};
//定义一个getTab方法进行判断data.top和data.good是否为true
function getTab(data) {
    return (
        data.top ?
            "top" :
            data.good ?
                "good" : data.tab
    )
}
class TxtTag extends Component {
    render() {
        let nowTab = tab[getTab(this.props.data)];//定义nowTag来接收tab的getTab方法
        return (
            <Tag color={nowTab.color}>{nowTab.txt}</Tag>
        )
    }
}

export default TxtTag;