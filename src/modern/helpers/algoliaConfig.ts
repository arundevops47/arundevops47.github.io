export const getAlgoliaConfig = (version) => {
    const configs = {
        modern: {
            appId: 'YOUR_APP_ID_MODERN',
            apiKey: 'YOUR_API_KEY_MODERN',
            indexName: 'modern_index',
        },
        classic: {
            appId: 'YOUR_APP_ID_CLASSIC',
            apiKey: 'YOUR_API_KEY_CLASSIC',
            indexName: 'classic_index',
        },
    };

    return configs[version];
};
