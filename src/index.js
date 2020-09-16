import React from 'react'
import ReactDom from 'react-dom'
import { Route,BrowserRouter,Link,Switch,Redirect } from "react-router-dom"
import "./app.less"

import HomePage from "./pages/home"
import TestPage from "./pages/test"

class App extends React.Component {
    render(){
        console.log(process.env.APP_ENV)
        return (
            <div class="test">
                hello react-apps-template
                <BrowserRouter>
                    <ul>
                        <li>
                            <Link to="/">HomePage</Link>
                        </li>
                        <li>
                            <Link to="/test">TestPage</Link>
                        </li>
                    </ul>
                    <Switch>
                        {/* 登陆 */}
                        <Route path="/test" component={TestPage} />

                        {/* 路由 */}
                        <Route path="/" component={HomePage} />
                        
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("app"))
