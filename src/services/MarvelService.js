import { useHttp } from "../components/hooks/http.hook";


const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();


    const _apiKey = 'apikey=77b917266f3bd79b6fd8dc04288e5a58';
    const _apiBase = 'https://gateway.marvel.com:443/v1/public';
    const _baseOffset = 210



    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}/characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter)
    }
    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}/characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0])
    }
    // getAllgeroId = async () => {
    //     const res = await this.getResource()
    // }
    const _transformCharacter = (char) => {

        return {
            id:char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : `There is no description for this character`,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    return {loading, clearError, error, getAllCharacters, getCharacter}

}

export default useMarvelService;