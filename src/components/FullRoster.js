import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
  <div>
      {
        PlayerAPI.all().map(p => (
          <div key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </div>
        ))
      }
  </div>
)

export default FullRoster
