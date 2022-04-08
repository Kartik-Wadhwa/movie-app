const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '44cd634920a70c75ada5ecc1a56a3b6e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;