let mutations = {
  increment(state) {
    state.count++
  },
  others(state) {
    state.others = "others change"
  }
}

export default mutations
