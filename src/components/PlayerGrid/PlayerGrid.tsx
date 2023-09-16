import React, { FC } from 'react';
import PlayerBox from '../PlayerBox/PlayerBox';
import PlayerCondition from '../PlayerCondition/PlayerCondition';


interface PlayerGridProps { }

const gameGrid = [
  <div></div>, // empty
  // first row
  <PlayerCondition />,
  <PlayerCondition />,
  <PlayerCondition />,
  // row
  <PlayerCondition />,
  <PlayerBox />,
  <PlayerBox />,
  <PlayerBox />,
  // row
  <PlayerCondition />,
  <PlayerBox />,
  <PlayerBox />,
  <PlayerBox />,
  // row
  <PlayerCondition />,
  <PlayerBox />,
  <PlayerBox />,
  <PlayerBox />
];

const PlayerGrid: FC<PlayerGridProps> = () => (

  <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow grid grid-cols-4 sm:gap-px sm:divide-y-0">

    {
      gameGrid
    }

  </div>
);

export default PlayerGrid;
