import React from 'react';
import CartHeader from './cartHeader';
import CartList from './cartList';

class RightBar extends React.Component {
    handleCancel = () =>{
        this.props.cancel()
    }
    
    render() {
        
        return (
            <>
                {console.log(this.props.arrCart)}
                <div className={this.props.displayed
                    ? "col-md-4 cartBar show"
                    : "col-md-4 cartBar"}>
                    <CartHeader click={this.props.ifClickMenu} 
                    arrCart={this.props.arrCart}/>
                    <CartList
                        arrCart={this.props.arrCart}
                        cancel = {() => this.handleCancel()}
                    />
                </div>
            </>
        );
    }
}

export default RightBar;