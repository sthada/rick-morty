import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import './App.css';
import { onClickGetDetails } from './redux/action/service';
import { bindActionCreators } from 'redux'

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
         

        };

    }
    componentDidMount(){
        this.props.onClickGetDetails();
    }

    render() {
        
        return (
            <div >
                <div className="App" >

                    {/* <DefaultButton
                        primary={true}
                        data-automation-id="test"
                        text="GET DETAILS"
                        onClick={() => this.props.onClickGetDetails()}
                        allowDisabledFocus={true} /> */}
                  
                {this.props.characterDetail &&<>
                {this.props.characterDetail.results.map((testChar, index) => {
                     return <div id={index.toString()}>
                        <div className="edetails">
                            <div className='characterBlock'>
                                <img src={testChar.image} alt="" />


                                <div style={{ marginTop: '-40px', background: 'rgba(255,255,0,0.5);' }}>
                                    <div style={{ fontSize: "18px", color: "white" }}>{testChar.name}</div></div>
                                <div style={{ fontSize: "10px", color: "white" }}>id: {testChar.id} - created 2 years ago</div>
                            </div>
                            <div style={{ fontSize: "12px", border: 'solid 1px #ddd', background: "black", margin: "5px", width: '220px' }}>
                                <div style={{ fontSize: "12px", color: "white", left: "0", width: "30px", align: "left" }}>STATUS</div>
                                <div style={{ fontSize: "12px", color: "orange", right: "0", textAlign: "right", align: "right" }}>{testChar.status}</div>
                            </div>
                            <div style={{ fontSize: "12px", border: 'solid 1px #ddd', background: "black", margin: "5px", width: '220px' }}>
                                <div style={{ fontSize: "12px", color: "white", left: "0", width: "30px", align: "left" }}>SPECIES</div>
                                <div style={{ fontSize: "12px", color: "orange", right: "0", textAlign: "right", align: "right" }}>{testChar.species}</div>
                            </div>
                            <div style={{ fontSize: "12px", border: 'solid 1px #ddd', background: "black", margin: "5px", width: '220px' }}>
                                <div style={{ fontSize: "12px", color: "white", left: "0", width: "30px", align: "left" }}>GENDER</div>
                                <div style={{ fontSize: "12px", color: "orange", right: "0", textAlign: "right", align: "right" }}>{testChar.gender}</div>
                            </div>
                            <div style={{ fontSize: "12px", border: 'solid 1px #ddd', background: "black", margin: "5px", width: '220px' }}>
                                <div style={{ fontSize: "12px", color: "white", left: "0", width: "30px", align: "left" }}>ORIGIN</div>
                                <div style={{ fontSize: "12px", color: "orange", right: "0", textAlign: "right", align: "right" }}>{testChar.origin.name}</div>
                            </div>
                            <div style={{ fontSize: "12px", border: 'solid 1px #ddd', background: "black", margin: "5px", width: '220px' }}>
                                <div style={{ fontSize: "12px", color: "white", left: "0", width: "30px", align: "left" }}>LAST LOCATION</div>
                                <div style={{ fontSize: "12px", color: "orange", right: "0", textAlign: "right", align: "right" }}>{testChar.location.name}</div>
                            </div>

                        </div>
                    </div>
                }
                )}</>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        characterDetail: state.characterDetail
    };
}
const mapDispatchToProps = dispatch => bindActionCreators({
    onClickGetDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Character)