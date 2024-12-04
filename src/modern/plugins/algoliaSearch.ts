import { algoliasearch } from 'algoliasearch';

const initializeSearch = async () => {
    console.log('initializeSearch called');
    const config = window.__VITEPRESS_ALGOLIA_CONFIG__;
    // console.log('config', config);

    if (!config) {
        console.warn("Algolia configuration not found");
        return;
    }

    // Initialize the Algolia client
    const client = algoliasearch(config.appId, config.apiKey);

    // Perform a search directly
    const results = await client.searchSingleIndex({
        indexName: config.indexName,
        searchParams: {
            query: "example", // Replace with the query
            hitsPerPage: 10,
        },
    });

    console.log("Search results:", results);

    return results;
};

const AlgoliaSearchPlugin = {
    install(app: any) {
        app.config.globalProperties.$initializeSearch = initializeSearch;
    },
};

export default AlgoliaSearchPlugin;
export { initializeSearch };
