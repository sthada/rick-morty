import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import './App.css';
import { onClickGetDetails } from './redux/action/service';
import { bindActionCreators } from 'redux';

const optionsSpecies = [
    { key: 'Species', text: 'Species', itemType: DropdownMenuItemType.Header },
    { key: 'human', text: 'human' },
    { key: 'mythology', text: 'mythology' },
    { key: 'other species', text: 'other species', disabled: true },
    { key: 'other', text: 'other' },
];

const optionsGender = [
    { key: 'Gender', text: 'Gender', itemType: DropdownMenuItemType.Header },
    { key: 'male', text: 'Male' },
    { key: 'female', text: 'Female' }
];

const optionsOrigin = [
    { key: 'Origin', text: 'Origin', itemType: DropdownMenuItemType.Header },
    { key: 'Unknown', text: 'Unknown' },
    { key: 'Post-Apocalyptic Earth', text: 'Post-Apocalyptic Earth' },
    { key: 'Nuptia 4', text: 'Nuptia 4' },
    { key: 'Other Origins', text: 'Other Origins...' },
];

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
         

        };

    }
    componentDidMount(){
        // this.props.onClickGetDetails();
    }

    render() {
        
        return (
            <div className="content-left-pane">

                <Dropdown
                    placeholder="Select species"
                    label="Species"
                    defaultSelectedKeys={['human']}
                    multiSelect
                    options={optionsSpecies}
                    
                />
                <Dropdown
                    placeholder="Select Gender"
                    label="Gender"
                    defaultSelectedKeys={[]}
                    multiSelect
                    options={optionsGender}
                    
                />
                <Dropdown
                    placeholder="Select species"
                    label="Origin"
                    defaultSelectedKeys={[]}
                    multiSelect
                    options={optionsOrigin}
                    
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
    onClickGetDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter)