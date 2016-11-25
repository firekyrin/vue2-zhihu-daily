import Vue from 'vue'
import Vuex from 'vuex'

// import actions from './action'

Vue.use(Vuex)

const state = {
    datePointer: {
        value: '',
        format: ''
    },
    days: [],
    themes: []
}

const mutations = {
    ['SET_ARTICLES'](state, {date, arr}) {
        // throw new Error('date='+date+' arr='+arr)
        state.days.push({
            date: date,
            articles: arr
        })
    },
    ['SET_DATE_POINTER'](state, date) {
        // throw new Error('d err:'+date)
        state.datePointer = date
    },
    ['SET_THEMES'](state, arr) {
        state.themes = arr
    }
}

const getters = {
    datePointer: state => state.datePointer,
    days: state => state.days,
    themes: state => state.themes
}

const pad = (val) => {
    val += ''
    if (val.length < 2) {
        return '0' + val
    }
    return val
}

const actions = {
    setAticles ({commit}, {date, arr}) {
        // throw new Error('date:'+da.date+' arr:'+da.arr)
        commit('SET_ARTICLES', {date, arr})
    },
    setDatePointer ({commit}, date) {
        // throw new Error('s err:'+ date)
        commit('SET_DATE_POINTER', {
            value: date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate()),
            format: date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate())
        })
    },
    setThemes ({commit}, arr) {
        commit('SET_THEMES', arr)
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: true
})
