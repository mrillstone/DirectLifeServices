import React from "react"
import { Link } from "gatsby"
import "./layout.css"

class Nav extends React.Component {
    render() {
        return (
        <div >
        <div style={{display: `flow-root`}}>
            <div style={{float: `left`, marginLeft: `5px`}}>
                <Link to={`/`} >
                  <img style={{ height: "5rem" }} src="../logo.png" alt="Direct Life Services" />
                </Link>
            </div>
            <div style={{float: `right`, marginTop: `15px`, marginRight: `5px`}}>
                  <h3 style={{margin: 0}}>Call Us Today!</h3>
                  <p style={{marginLeft: `25px`}}>(912) 307-4450</p>
            </div>
        </div>
            <div className={"bg-green-900 p-6"}>
                <ul className={`flex`}>
                    <li className={"mr-6"}>
                    <Link className={"text-gray-400 hover:text-gray-900"} to={`/medicare/beginnersGuide`}>New To Medicare</Link>
                    </li>
                    <li className={"mr-6"}>
                    <Link className={"text-gray-400 hover:text-gray-900"} to={`/supplements`}>Supplements</Link>
                    </li>
                    <li className={"mr-6"}>
                    <Link className={"text-gray-400 hover:text-gray-900"} to={`/medicare/partD`}>Medicare Part D</Link>
                    </li>
                    <li className={"mr-6"}>
                    <Link className={"text-gray-400 hover:text-gray-900"} to={`/blog`}>Blog</Link>
                    </li>
                    <li className={"mr-6"}>
                    <Link className={"text-grey-400 hover:text-grey-900"} to={`/aboutUs`}>About Us</Link>
                    </li>
                </ul>
            </div>
            </div>
        )
    }
}

export default Nav