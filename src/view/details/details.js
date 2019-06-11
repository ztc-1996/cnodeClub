import React,{ Component } from "react";
// import { connect } from "react-redux";
import TxtDetails from "./txtDetails";
import ReplyList from "./replyList";
import data from "./data";
// import axios from "axios";

class Details extends Component {
    // constructor(arg) {
    //     super(arg);
    //     let id = this.props.match.params.id;
    //     this.getData(id);
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }
    // getData(id) {
    //     // let id = this.props.match.params.id;
    //     this.props.dispatch( (dispatch) => {
    //         dispatch({
    //             type: "DETAILS_UPDATA"
    //         });
    //         axios.get(`http://cnodejs.org/api/v1/topic/${ id }`)
    //             .then( (res) => {
    //                 dispatch({
    //                     type: "DETAILS_UPDATA_SUCC",
    //                     data: res.data
    //                 });
    //             })
    //             .catch( (error) => {
    //                 dispatch({
    //                     type: "DETAILS_UPDATA_ERROR"
    //                 });
    //             })
    //     })
    // }

    render() {
        // let { loading, data } = this.props;
        return (
            <div className="wrap">
                <TxtDetails
                    loading = { false }
                    data = { data.data }
                />
                <ReplyList
                    loading = { false }
                    replies = { data.data.replies }
                    replyCount = { data.data.reply_count }
                />
            </div>
        );
    }
}

// export default connect(state => (state.details))(Details);
export default Details;