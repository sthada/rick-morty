import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import './App.css';
import { onClickGetDetails } from './redux/action/service';
import { bindActionCreators } from 'redux'

class SelectedFilters extends Component {
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
            <div className="content-filter-pane">
   
                <PrimaryButton text="Reset Filters" checked={true} onClick={this.props.onClickGetDetails} 
                    // allowDisabledFocus 
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters)