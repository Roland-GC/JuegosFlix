import { useState, useEffect } from 'react'
import { VideogamesCard } from '../components/VideogamesCard'
import { useMostAnticipatedGames } from '../hooks/useMostAnticipatedGames'
import { useBestGames } from '../hooks/useBestGames'
import { RaceBy } from '@uiball/loaders'
import { Link } from 'react-router-dom';

export function Home() {
  const {
    isError,
    isLoading,
    fetchMostAnticipatedGames,
    mostAnticipatedGames
  } = useMostAnticipatedGames()
  const { fetchBestGames, bestGames, isErrorBestGames, isLoadingBestGames } =
    useBestGames()

  useEffect(() => {
    fetchMostAnticipatedGames()
  }, [])
  useEffect(() => {
    fetchBestGames()
  }, [])

  return (
    <>
      <h2>The most anticipated games of 2025</h2>
      <div className="separator">
        <hr></hr>
      </div>
      {isLoading ? (
        <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      ) : (
        <ul className='videogames-list'>
          {mostAnticipatedGames.length > 0 ? (
            mostAnticipatedGames.map((game) => (
              <VideogamesCard key={game.id} videogame={game} />
            ))
          ) : (
            <p>{isError}</p>
          )}
        </ul>
      )}
      <h2>The best video games of 2024</h2>
      <div className="separator">
        <hr></hr>
      </div>
      {isLoadingBestGames ? (
        <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      ) : (
        <ul className='videogames-list'>
          {bestGames.length > 0 ? (
            bestGames.map((game) => (
              <VideogamesCard key={game.id} videogame={game} />
            ))
          ) : (
            <p>{isErrorBestGames}</p>
          )}
        </ul>
      )}

    </>
  )
}
