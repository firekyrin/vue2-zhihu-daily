const pad = (val) => {
    val += ''
    if (val.length < 2) {
        return '0' + val
    }
    return val
}

export const setAticles = ({commit}, date, arr) => {
    commit('SET_ARTICLES', date, arr)
}

export const setDatePointer = ({commit}, date) => {
    throw new Error('s err:'+ date)
    commit('SET_DATE_POINTER', {
        value: date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate()),
        format: date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate())
    })
}

export const setThemes = ({commit}, arr) => {
    commit('SET_THEMES', arr)
}
