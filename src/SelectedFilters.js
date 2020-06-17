import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import './App.css';
import { onClickGetDetails, onClickChangeSort } from './redux/action/service';
import { bindActionCreators } from 'redux';

import { CompactPeoplePicker, IBasePickerSuggestionsProps, ValidationState } from 'office-ui-fabric-react/lib/Pickers';

const dropdownStyles = { maxWidth: 300, marginTop: '10px', top: 0, right: 0, display: 'inline' };

class SelectedFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: { key: 'Ascending', text: 'Ascending' }
        };
    }

    render() {
        return (
            <div className="content-filter-pane">
                <h2 style={{ display: "inline" }}>Selected Filters</h2>
                <span style={{ float: "right", clear: "both", margin: '10px' }}>
                    <Dropdown
                        placeholder="Sort by ID:"
                        label="Sort By ID"
                        options={[
                            { key: 'Sort By ID', text: 'Sort By ID', itemType: DropdownMenuItemType.Header },
                            { key: 'Ascending', text: 'Ascending' },
                            { key: 'Descending', text: 'Descending' },
                        ]}
                        styles={dropdownStyles}
                        selectedKey={this.state.selectedItem.key}
                        onChange={(event, item) => {
                            this.setState({
                                selectedItem:item
                            });
                            this.props.onClickChangeSort(this.props.characterDetail,item.key)
                        
                        }}
                    />
                </span>
                <br />
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
    onClickGetDetails, onClickChangeSort
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters)