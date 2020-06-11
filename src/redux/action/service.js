/**
 * Created by Shivam on  -4 Jan,2020.
 */

import axios from 'axios';

export const onClickGetDetails = (eid) => {
    return (dispatch) => {

        return axios.get("http://rickandmortyapi.com/api/character/").then( (res) => {
            dispatch({
                type: 'GET_DETAILS',
                value: res.data,
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