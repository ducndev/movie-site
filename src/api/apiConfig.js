const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '136cf1dc1f1c026007e77515a5efeba9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;