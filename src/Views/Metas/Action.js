import axios from 'axios'
import {APP_URL} from '../../Consts'

export function getDistricts(){
    return axios.get(APP_URL+'districts')
        .then(resp =>  resp.data.districts)
}

export function getMetasByDistrict(id){
    return axios.get(APP_URL+'goals?region_id='+id)
    .then(resp =>  resp.data.goals)
}