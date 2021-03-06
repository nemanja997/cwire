import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {isPropertyVisited} from '../helpers/localStorage';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        searchedProperties: [],
        detailedProperties: [],
        currentIndex: 0
    },
    mutations: {
        addSearchedProperties(state, properties) {
            state.filteredProperties = properties;
        },
        addDetailsOfProperty(state, details) {
            state.detailedProperties.push(details);
        },
        changeIndex(state, index) {
            state.currentIndex = index;
        },
        emptyDetailedProperties(state) {
            state.detailedProperties = [];
        }
    },
    actions: {
        addRandomProperties(context) {
            let promiseArr = [];
            return axios.get('https://veza.iapi.ch/esearch/vezarent3/_search?size=100')
                .then((response) => {
                    let searchedProperties = response.data.hits.hits;

                    context.commit('addSearchedProperties', searchedProperties);
                    searchedProperties.forEach((property) => {
                        if (!isPropertyVisited(property._id)) {
                            promiseArr.push(context.dispatch('getPropertyDetails', property._id));
                        }
                    });
                })
                .then((response) => {
                    return Promise.all(promiseArr);
                })
                .catch((error) => {
                    //handle error
                });
        },
        getPropertyDetails(context, propertyId) {
            let escapedId = propertyId.split('/').join('%2F');
            return axios.get(`https://veza.iapi.ch/veza_api/ads/${escapedId}`)
                .then((response) => {
                    context.commit('addDetailsOfProperty', response.data);
                })
                .catch((error) => {
                    //handle error
                });
        },
        addFilteredProperties(context, url) {
            context.commit('emptyDetailedProperties');
            let promiseArr = [];
            return axios.get(`${url}&size=100`)
                .then((response) => {
                    let searchedProperties = response.data.hits.hits;

                    context.commit('addSearchedProperties', searchedProperties);
                    searchedProperties.forEach((property) => {
                        if (!isPropertyVisited(property._id)) {
                            promiseArr.push(context.dispatch('getPropertyDetails', property._id));
                        }
                    });
                })
                .then((response) => {
                    return Promise.all(promiseArr);
                })
                .catch((error) => {

                });
        }
    }

})
