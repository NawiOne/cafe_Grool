import React from "react";
import Card from "../history/card";
import Table from "../history/table";


class Main extends React.Component {
    render() {
        return (
            <>
                <main className="content">
                    <div className="row">
                        <Card/>
                    </div>
                    <Table/>
                    
                </main>
            </>
        );
    }
}
export default Main;