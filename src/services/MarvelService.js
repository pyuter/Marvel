class MarvelService {
    _apiKey = 'apikey=77b917266f3bd79b6fd8dc04288e5a58';
    _apiBase = 'https://gateway.marvel.com:443/v1/public'
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Cloud not fetch ${url}, status: ${res.status}`);
        }
        return await res.json()
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}/characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter)
    }
    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0])
    }
    // getAllgeroId = async () => {
    //     const res = await this.getResource()
    // }
    _transformCharacter = (char) => {
        const notImage = 'image_not_available';
        return {
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : `There is no description for this character`,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
        }
    }

}

export default MarvelService;