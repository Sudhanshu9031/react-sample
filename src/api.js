// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "Course1", position: "2 Hrs" },
    { number: 2, name: "Course2", position: "4 Hrs" },
    { number: 3, name: "Course3", position: "1 Hrs" },
    { number: 4, name: "Course4", position: "5 Hrs" },
    { number: 5, name: "Course5", position: "2 Hrs" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI
