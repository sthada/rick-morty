/**
 * Created by Shivam on  -4 Jan,2020.
 */

import axios from 'axios';

export const onClickGetDetails = (eid) => {
    return (dispatch) => {

        return axios.get("http://rickandmortyapi.com/api/character/").then((res) => {
            dispatch({
                type: 'GET_DETAILS',
                value: res.data.results,
            })
            return false;
        }).catch((error) => {
            alert("There was an error in uploading the event. Kindly try again in sometime");
            dispatch({
                type: "global/STOP_LOADING"
            })

        });
    }
}

export const onClickChangeSort = (characterList, sort) => {
    return (dispatch) => {
        dispatch({
            type: 'SORT_BY_CHANGE',
            value: characterList.reverse()
        })
    }
}

export const onClickApplyFilter = (filterObj) => {
    return (dispatch) => {
        return axios.get("http://rickandmortyapi.com/api/character/").then((res) => {
            console.log(filterObj +"----filterObj");
            let myFilteredArray = new Array();
            res.data.results.forEach(item=>{
                console.log("filterObj.origin::" + filterObj.origin);
                console.log("item.origin::" + item.origin);
                if (filterObj.gender.has(item.gender) && filterObj.species.has(item.species)){
                myFilteredArray.push(item);
            }
            })
            console.log(myFilteredArray + "----myFilteredArray");

            // let myFiltredArr = JSON.parse(JSON.stringify(res.data.results));
            // let myFiltredArr = res.data.results.filter(item => {
            //     if (filterObj.gender.size !== 0) {
            //         if (filterObj.gender.has(item.gender)) { return item }
            //     } else {return item}    
            // });

            //     let myFiltredArr1 = myFiltredArr.filter(item => {
            //         console.log("chkPt1----" + item.origin);
            //         console.log("chkPt2----" + filterObj.origin);
            //         if (filterObj.origin.size !== 0) {
            //             if (filterObj.origin.has(item.origin)) { return item }
            //         } else { return item }
            //     });
            // let myFiltredArr2 = myFiltredArr1.filter(item => {
            //     if (filterObj.species.size !== 0) {
            //         if (filterObj.species.has(item.species)) { return item }
            //     } else { return item }
            // });
            dispatch({
                type: 'FILTER',
                value: { ...myFilteredArray}
            })
            return false;
        }).catch((error) => {
            alert("There was an error in uploading the event. Kindly try again in sometime");
            dispatch({
                type: "global/STOP_LOADING"
            })

        });
    }
}
