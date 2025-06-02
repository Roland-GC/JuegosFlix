// Get your api key from rawg.io 

const RAWG_API_KEY = 'your key'
const RAWG_ENDPOINT = `https://api.rawg.io/api/games?key=yourkey`
const RAWG_GAME_DETAILS_ENDPOINT = `https://api.rawg.io/api/games`

//Petición datos de la busqueda de videojuego
export const searchVideogames = async ({ search }) => {
  if (search === '') return

  try {
    const res = await fetch(
      `${RAWG_ENDPOINT}&search=${search}&search_precise=true&ordering=-metacritic&page_size=25`
    )
    const json = await res.json()

    const videogames = json.results

    return videogames?.map((videogame) => ({
      id: videogame.id,
      title: videogame.name,
      year: videogame.released
        ? new Date(videogame.released).getFullYear()
        : videogame.released,
      poster: videogame.background_image
    }))
  } catch (e) {
    throw new Error('Error searching videogames')
  }
}

//Petición datos de los videojuegos favoritos
export const searchFavorites = async ({ favoriteIds }) => {
  const promises = favoriteIds.map((id) =>
    fetch(
      `${RAWG_GAME_DETAILS_ENDPOINT}/${id}?key=${RAWG_API_KEY}&language=es`
    ).then((res) => res.json())
  )
  try {
    const favorites = await Promise.all(promises)
    console.log(favorites)
    return favorites?.map((favorite) => {
      return {
        id: favorite.id,
        title: favorite.name,
        year: favorite.released
          ? new Date(favorite.released).getFullYear()
          : favorite.released,
        poster: favorite.background_image
      }
    })
  } catch (e) {
    throw new Error('Error getting favorite games')
  }
}

//Petición datos del videojuego seleccionado
export const searchSelected = async ({ id }) => {
  try {
    const gameDetailsPromise = fetch(
      `${RAWG_GAME_DETAILS_ENDPOINT}/${id}?key=${RAWG_API_KEY}&language=es`
    ).then((res) => res.json())
    const gameMoviesPromise = fetch(
      `${RAWG_GAME_DETAILS_ENDPOINT}/${id}/movies?key=${RAWG_API_KEY}&language=es`
    ).then((res) => res.json())
    const gameScreenshotsPromise = fetch(
      `${RAWG_GAME_DETAILS_ENDPOINT}/${id}/screenshots?key=${RAWG_API_KEY}&language=es`
    ).then((res) => res.json())

    const [gameDetails, gameMovies, gameScreenshots] = await Promise.all([
      gameDetailsPromise,
      gameMoviesPromise,
      gameScreenshotsPromise
    ])

    console.log(gameDetails)
    console.log(gameMovies)
    console.log(gameScreenshots)

    const trailer =
      gameMovies.results && gameMovies.results.length > 0
        ? gameMovies.results[0].data.max
        : null
    const screenshots =
      gameScreenshots &&
      gameScreenshots.results &&
      gameScreenshots.results.length > 0
        ? gameScreenshots.results.map((screenshot) => screenshot.image)
        : []

    return {
      id: gameDetails.id,
      title: gameDetails.name,
      year: gameDetails.released
        ? new Date(gameDetails.released).getFullYear()
        : gameDetails.released,
      poster: gameDetails.background_image,
      description: gameDetails.description_raw,
      trailer,
      rating: gameDetails.metacritic,
      screenshots
    }
  } catch (e) {
    throw new Error('Error getting selected game')
  }
}

//Peticióm mejores juegos por rating
export const searchBest = async () => {
  try {
    const res = await fetch(
      `${RAWG_ENDPOINT}&ordering=-metacritic&page_size=25`
    )
    const json = await res.json()

    const videogames = json.results

    return videogames?.map((videogame) => ({
      id: videogame.id,
      title: videogame.name,
      year: videogame.released
        ? new Date(videogame.released).getFullYear()
        : videogame.released,
      poster: videogame.background_image
    }))
  } catch (e) {
    throw new Error('Error searching videogames')
  }
}

//Petición de juegos por género
export const searchGamesByGenre = async (genre) => {
  try {
    const res = await fetch(
      `${RAWG_ENDPOINT}&genres=${genre}&ordering=-metacritic&page_size=25`
    )
    const json = await res.json()

    const videogames = json.results

    return videogames?.map((videogame) => ({
      id: videogame.id,
      title: videogame.name,
      year: videogame.released
        ? new Date(videogame.released).getFullYear()
        : videogame.released,
      poster: videogame.background_image
    }))
  } catch (e) {
    throw new Error('Error searching games by genre')
  }
}

// Petición de los 10 videojuegos más esperados del 2025
export const searchMostAnticipatedGames = async () => {
  try {
    const res = await fetch(
      `${RAWG_ENDPOINT}&dates=2025-01-01,2025-12-31&ordering=-added&page_size=10`
    )
    const json = await res.json()

    const videogames = json.results

    return videogames?.map((videogame) => ({
      id: videogame.id,
      title: videogame.name,
      year: videogame.released
        ? new Date(videogame.released).getFullYear()
        : videogame.released,
      poster: videogame.background_image
    }))
  } catch (e) {
    throw new Error('Error searching most anticipated games for 2025')
  }
}


// Petición de los mejores videojuegos del 2024
export const searchBestGamesOf2024 = async () => {
  try {
    const res = await fetch(
      `${RAWG_ENDPOINT}&dates=2024-01-01,2024-12-31&ordering=-metacritic&page_size=10`
    )
    const json = await res.json()

    const videogames = json.results

    return videogames?.map((videogame) => ({
      id: videogame.id,
      title: videogame.name,
      year: videogame.released
        ? new Date(videogame.released).getFullYear()
        : videogame.released,
      poster: videogame.background_image
    }))
  } catch (e) {
    throw new Error('Error searching best games of 2024')
  }
}
