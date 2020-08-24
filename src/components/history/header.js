import React from "react";
import Menu from "../../img/menu.png"

 class Header extends React.Component{
  handleHumbMenu = () =>{
    this.props.ifClickHumbMenu();
}
     render(){
         return(
                <>
                <div className="row">
                <div className="col-12">
                  <nav className="nav header shadow bt">
                    <button  className="nav-item  mr-auto ml-1" ><img alt="pic" src={Menu}
                    onClick={this.handleHumbMenu}  /></button>
                    <h1>History</h1>
                    <button className="nav-item ml-auto mr-4" ></button>
                  </nav>
                </div>
              </div>
             </>
         )
     }
 }
 export default Header