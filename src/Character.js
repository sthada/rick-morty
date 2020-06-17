import React, { Component } from 'react';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterDetailList: this.props.characterDetail
        };
    }
    static getDerivedStateFromProps(props, state){
        return { characterDetailList: props.characterDetail}
    }

    componentDidMount(){
    }

    render() {
        
        return (
            <div className="content-container" >
                {this.state.characterDetailList && this.state.characterDetailList.map((testChar, index) => {
                    return <div key={testChar.id.toString()} style={{
                        border: "solid #777 1px", marginBottom:"10px"}}>
                        <div className="edetails">
                            <div className='characterBlock'>
                                <img src={testChar.image} alt="" />

                                <div className="translucent-bg">
                                    <div style={{ fontSize: "18px", color: "white" }}>{testChar.name}</div>
                                <div style={{ fontSize: "10px", color: "white" }}>id: {testChar.id} - created 2 years ago</div>
                                </div></div>
                            <div style={{ fontSize: "18px", color: "white", border:"1px"}}>
                            <div className="char-attbr-row">
                                <div className="char-attbr-row-left">STATUS</div>
                                <div className="char-attbr-row-right">{testChar.status}</div>
                            </div>
                            <div className="char-attbr-row">
                                <div className="char-attbr-row-left">SPECIES</div>
                                <div className="char-attbr-row-right">{testChar.species}</div>
                            </div>
                            <div className="char-attbr-row">
                                <div className="char-attbr-row-left">GENDER</div>
                                <div className="char-attbr-row-right">{testChar.gender}</div>
                            </div>
                            <div className="char-attbr-row">
                                <div className="char-attbr-row-left">ORIGIN</div>
                                <div className="char-attbr-row-right">{testChar.origin.name}</div>
                            </div>
                            <div className="char-attbr-row">
                                <div className="char-attbr-row-left">LAST LOCATION</div>
                                <div className="char-attbr-row-right">{testChar.location.name}</div>
                            </div>
                            </div>

                        </div>
                    </div>
                }
                )}
            </div>
        );
    }
}

export default Character;
