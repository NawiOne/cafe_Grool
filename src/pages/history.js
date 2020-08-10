import React from "react";
import Header from "../components/history/header";
import LeftBar from "../components/history/leftbar";
import Main from "../components/history/main"
import "../asset/history.css"

class History extends React.Component{

    render(){
        return(
            <>
                <div >
                    <Header/>
                    <div className="container-css">
                        <LeftBar/>
                        <Main/>
                    </div>
                    
                </div>

            </>
        )
    }
}

export default History