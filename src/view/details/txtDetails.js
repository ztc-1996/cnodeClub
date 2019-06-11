import React,{ Component } from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
import TxtTag from "../txtTag";

class TxtDetails extends Component {
    render() {
        let { loading, data } = this.props;
        //页面的标题部分，包括title,TxtTag,Avatar,loginname和时间create_at
        const title = (
            <div>
                <h1>{ data.title }</h1>
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <TxtTag data = { data }></TxtTag>
                    <Avatar src={ data.author.avatar_url }></Avatar>
                    <Link to={ "/user/" + data.author.loginname }>
                        { data.author.loginname }</Link>
                    发表于：{ data.create_at.split("T")[0] }
                </div>
            </div>)
        return (
            <Card
                loading = { loading }
                title = { title }
            >
                {/*文章详情内容content部分*/}
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.content
                    }}
                >

                </div>
            </Card>
        )
    }
}

export default TxtDetails;