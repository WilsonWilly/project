import Miniature from "./Miniature";

import { boardGames } from '../../assets/data' ;

function CardsGroup() {
    return (
        <div className="flex flex-1 flex-wrap justify-around">
            {boardGames.map((boardGame) => (
                <Miniature key={boardGame.id} name={boardGame.name} description={boardGame.description} picture={boardGame.picture}/>
            ))}


        </div>
    )
}

export default CardsGroup;