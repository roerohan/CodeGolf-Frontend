import React from 'react';

import './leaderboard.css';

const Leaderboard = () => (
  <div className="leaderboard">
    <div className="leaderboard-heading heading">Global Leaderboard</div>
    <div className="leaderboard">
      <table className="leaderboard-table">
        <tr>
          <th className="position-heading">#</th>
          <th className="name-heading">Name</th>
          <th className="score-heading">Score</th>
        </tr>
        <tr>
          <td className="position">1</td>
          <td className="name">Name1</td>
          <td className="score">6969</td>
        </tr>
        <tr>
          <td className="position">2</td>
          <td className="name">Name2</td>
          <td className="score">6969</td>
        </tr>
        <tr>
          <td className="position">3</td>
          <td className="name">Name3</td>
          <td className="score">6969</td>
        </tr>
      </table>
    </div>
  </div>
);

export default Leaderboard;
