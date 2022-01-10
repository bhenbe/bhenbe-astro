export default GetHomepage = async (token) => { 
    const data = await fetch(
        'https://graphql.datocms.com/',
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `{
                page(filter: {id: {eq: "9620074"}}) {
                    pageTitle(locale: fr)
                    pageSlug(locale: fr)
                    pageContentAlt(locale: fr) {
                        blocks {
                            ... on BlockClientRecord {
                                id
                                _modelApiKey
                                blockClientTitle
                                blockClientContent(markdown: true)
                            }
                            ... on BlockCtaRecord {
                                id
                                _modelApiKey
                                blockCtaAlign
                                blockCtaContent
                                blockCtaLabel
                                blockCtaUrl
                            }
                            ... on BlockTextImageRecord {
                                id
                                _modelApiKey
                                blockTextImageTitle
                                slug
                                blockTextImageContent(markdown: true)
                                blockTextImageAlign
                                blockTextImageImage {
                                    url(imgixParams: {})
                                    width
                                    height
                                    format
                                    alt(locale: fr)
                                }
                            }
                            ... on BlockTextRecord {
                                id
                                _modelApiKey
                                blockTextTitle
                                blockTextContent(markdown: true)
                                backgroundImage {
                                    url(imgixParams: {})
                                    width
                                    height
                                    format
                                    alt(locale: fr)
                                }
                            }
                        }
                    }
                }
            }`
        }),
        }
    ).then((response) => response.json());

    return data.data.page;
}
