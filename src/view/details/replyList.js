import React,{ Component } from "react";
import { Card, List, Avatar } from "antd";
import { Link } from "react-router-dom";

class ReplyList extends Component {
    render() {

        let { replies, replyCount, loading } = this.props;
        console.log(replies);
        return (
            <Card
                loading = { loading }
                title = { replyCount + "条回复" }
                type = "inner"
            >
                <List
                    itemLayout = { "vertical" }
                    className = { "replyList" }
                    dataSource = { replies }
                    renderItem = { (item) => (
                        <List.Item
                            key = { item.id }
                            extra = { item.ups.length > 0 ?
                                <span>有人{ item.ups.length }觉得这个回复很赞</span> : "" }
                        >
                            <List.Item.Meta
                                avatar = { <Avatar src={ item.author.avatar_url } /> }
                                description = {
                                        <p>
                                        <Link to={ "/user/" + item.author.loginname }>
                                            { item.author.loginname }</Link>
                                            <span style={{ marginLeft:'5px' }} >发表于：{ item.create_at.split('T')[0] }</span>
                                        </p>
                                }/>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.content
                                    }}
                                >

                                </div>
                        </List.Item>
                    ) }
                >

                </List>
            </Card>
        )
    }
}

export default ReplyList;