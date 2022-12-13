  const getDataFromAPI = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((character) => {
          return {
            name: character.name,
            species: character.species,
            image: character.image,
            id: character.id,
            status:character.status,
            origin:character.origin.name,
            episode:character.episode
          };
        });
        cleanData.sort((x, y) => x.name.localeCompare(y.name));
        return cleanData;
      });
  };
  export default getDataFromAPI;
  