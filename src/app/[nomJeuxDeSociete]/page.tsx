import Image from 'next/image';

import { detailsGame } from '../../assets/detailsGame';

export default function BoardGame() {
  console.log(detailsGame);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 text-black ">
      <section className="w-full flex justify-between mb-1">
        <div className="w-1/2 text-center bg-orange-300 py-2">
          {detailsGame.game.name}
        </div>
        <div className="w-1/4 text-center bg-orange-300 py-2">
          {detailsGame.game.rating}
        </div>
      </section>
      <div className="w-full bg-orange-300 py-4 text-center mb-1">
        {detailsGame.game.picture}
      </div>
      <section className="w-full bg-orange-300 py-8 text-center mb-4">
        {detailsGame.game.description}
      </section>
      <section className="w-full flex flex-col items-center space-y-4">
        <div className="w-full flex justify-around space-x-4">
          <button className="bg-orange-300 p-2">
            AJOUTER A MA BIBLIOTHEQUE
          </button>
          <button className="bg-orange-300 p-2">
            AJOUTER UN JEU A MA LISTE
          </button>
        </div>
        <div className="w-full flex justify-around space-x-4">
          <button className="w-1/4 bg-orange-300 py-2 px-2">
            DONNEZ VOTRE AVIS
          </button>
          <div className="w-3/4 bg-orange-300 p-4 overflow-y-auto h-32">
            {detailsGame.opinions.map((opinion) => (
              <div className="p-2 mb-2 last:mb-0" key={opinion.id}>
                <div className="flex justify-between mb-2">
                  <div>{opinion.pseudo}</div>
                  <div>{opinion.rating}</div>
                </div>
                <div>{opinion.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
