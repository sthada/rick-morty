import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import './App.css';
import { onClickGetDetails, onClickApplyFilter } from './redux/action/service';
import { bindActionCreators } from 'redux';

const optionsSpecies = [
    { key: 'Species', text: 'Species', itemType: DropdownMenuItemType.Header },
    { key: 'human', text: 'Human'},
    { key: 'mythology', text: 'Mythology' },
    { key: 'other species', text: 'Other Species' },
    { key: 'other', text: 'Other' },
];
const optionsSpeciesSet = new Set([optionsSpecies.forEach(item=>{
return item.text;
})]
);

const optionsGender = [
    { key: 'Gender', text: 'Gender', itemType: DropdownMenuItemType.Header },
    { key: 'Male', text: 'Male' },
    { key: 'Female', text: 'Female' },
    { key: 'Unknown', text: 'unknown' }
];

const optionsOrigin = [
    { key: 'Origin', text: 'Origin', itemType: DropdownMenuItemType.Header },
    { key: 'Unknown', text: 'unknown' },
    { key: 'Post-Apocalyptic Earth', text: 'Post-Apocalyptic Earth' },
    { key: 'Nuptia 4', text: 'Nuptia 4' },
    { key: 'Other Origins', text: 'Other Origins...' },
];


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myFilterObj: {
                species: new Set(),
                gender: new Set(),
                origin: new Set()
            },
         myFilterObjEmpty: {
             species: new Set(),
             gender: new Set(),
             origin: new Set()
            }
        };

    }
    componentDidMount(){
        console.log("optionsSpeciesSet:::" + JSON.stringify(optionsSpeciesSet));
        // this.props.onClickGetDetails();
    }

    render() {
        
        return (
            <div className="content-left-pane">
            <h2>Filters</h2>
                <Dropdown
                    placeholder="Select species"
                    label="Species"
                    defaultSelectedKeys={this.state.myFilterObj.species}
                    multiSelect
                    options={optionsSpecies}
                    onChange={(event, item) => {
                        console.log(item);
                        let myObj = { ...this.state.myFilterObj };
                        let mySet = new Set([...this.state.myFilterObj.species]);
                        mySet.add(item.text);
                        myObj.species = mySet;
                        this.setState({
                            myFilterObj:myObj
                        });
                    }}                    
                />
                <Dropdown
                    placeholder="Select Gender"
                    label="Gender"
                    defaultSelectedKeys={this.state.myFilterObj.gender}
                    multiSelect
                    options={optionsGender}
                    onChange={(event, item) => {
                         
                        console.log(item);
                        let myObj1 = { ...this.state.myFilterObj };
                        let mySet1 = new Set([...this.state.myFilterObj.gender]);
                        mySet1.add(item.text);
                        myObj1.gender = mySet1;
                        this.setState({
                            myFilterObj:{...myObj1}
                        });
                    }}
                    
                />
                <Dropdown
                    placeholder="Select Origin"
                    label="Origin"
                    defaultSelectedKeys={this.state.myFilterObj.origin}
                    multiSelect
                    options={optionsOrigin}
                    onChange={(event, item) => {
                         
                        console.log(item);
                        let myObj = { ...this.state.myFilterObj };
                        let mySet11 = new Set([...this.state.myFilterObj.origin]);
                        mySet11.add(item.text);
                        myObj.origin = mySet11;
                        this.setState({
                            myFilterObj:{...myObj}
                        });
                    }}
                    
                />
                <br />
                <DefaultButton text="Reset Filters" checked={true} onClick={()=>{
                    this.props.onClickGetDetails();
                    this.setState({
                    myFilterObj: {}
                })}
            }
                />
                <br />
                <br />
                <PrimaryButton text="Apply Filters" checked={true} onClick={()=>{console.log(this.state.myFilterObj); this.props.onClickApplyFilter(this.state.myFilterObj)}}
                />

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
    onClickGetDetails,onClickApplyFilter
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter)