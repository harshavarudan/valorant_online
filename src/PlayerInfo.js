import React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'

let style={

    width: 25,
    backgroundColor:"green" ,
    borderRadius: "100%",
    display: "inline-block"

}
let style2={

    width: 25,
    backgroundColor:"red" ,
    borderRadius: "100%",
    display: "inline-block"

}
let active=<p1 style={style}>g</p1>
let inactive=<p1 style={style2}>r</p1>
class PlayerInfo extends React.Component{
    constructor(props) {
        super(props);
        let players=[]
        this.state={
            playerInfo:players
        }
    }
//https://harsha-cors.herokuapp.com/https://valorant-online.herokuapp.com
    componentDidMount() {
        axios.get("https://harsha-cors.herokuapp.com/https://valorant-online.herokuapp.com/playerinfo").then( (response)=>{
            this.setState({playerInfo:response.data})
        })

    }

    render() {
        if(this.state.playerInfo.players===undefined){
            return(<div1>
                    <p1>
                        <Spinner animation="border" variant="danger" />
                    </p1>

                    <p1 style={{fontSize:60}}>
                          loading
         </p1>
            <p1>
                <Spinner animation="border" variant="success"  />
            </p1>
                </div1>
                )
        }
        let head=<thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th >
                {active}/{inactive}
            </th>
            <th>Online/Last active</th>

        </tr>
        </thead>;
        let info=this.state.playerInfo.players;
        let temp=[]
        for(let i=0;i<info.length;i++){
            let display=
                <tr>
                    <td>{i+1}</td>
                    <td>{info[i].username}</td>
                    <td>{info[i].state==="ONLINE"?active:inactive}</td>
                    <td>{info[i].state==="ONLINE"?"ONLINE":info[i].lastSeen}</td>

                </tr>;
            temp.push(display)
        }

    return( <Table striped bordered hover variant="dark">
        {head}
        <tbody>
        {temp}
        </tbody>

    </Table>)
    }

}
export default PlayerInfo;
