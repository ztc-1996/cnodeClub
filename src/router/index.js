import React, {Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Index from "../view/index/index"
import Book from "../view/book/book"
import About from "../view/about/about"
import Details from "../view/details/details"
import User from "../view/user/user"

class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact render={()=>(
                    <Redirect to="/index/all" />
                )} />
                <Route path="/index/:id" component={Index} />
                <Route path="/book" component={Book} />
                <Route path="/about" component={About} />
                <Route path="/user" component={User} />
                <Route path="/details/:id" component={Details} />
            </Switch>
        )
    }
}

export default RouterIndex;