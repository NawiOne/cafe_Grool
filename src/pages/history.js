import React from "react";
import Header from "../components/history/header";
import LeftBar from "../components/history/leftbar";
import Main from "../components/history/main";
import ModalAdd from '../components/history/modalAdd'
import "../asset/history.css"

class History extends React.Component{
    state ={
        leftBarDisplay: true,
    }
    handleClickLeftBar = () => {
        this.setState({
            leftBarDisplay: !this.state.leftBarDisplay
        });
    };

    render(){
        return(
            <>
                <div >
                    <Header
                    ifClickHumbMenu={this.handleClickLeftBar}/>
                    <div className="container-css">
                        <LeftBar
                        displayed={this.state.leftBarDisplay}/>
                        <Main/>
                        <ModalAdd/>
                    </div>
                    
                </div>

            </>
        )
    }
}

export default History