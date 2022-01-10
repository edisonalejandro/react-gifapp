

export const getGifs = async( category ) => {

    const apiKey = 'bxq6k0syi3jXHnEJzwIqAiOOU50WnojW'
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${ encodeURI(category) }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map (img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })


    return(gifs);
    
}