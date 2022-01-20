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
                        value
                        blocks {
                            __typename
                            ... on BlockClientRecord {
                                id
                                blockClientTitle
                                blockClientContent(markdown: true)
                            }
                            __typename
                            ... on BlockCtaRecord {
                                id
                                blockCtaAlign
                                blockCtaContent
                                blockCtaLabel
                                blockCtaUrl
                            }
                            __typename
                            ... on BlockTextImageRecord {
                                id
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
                            __typename
                            ... on BlockTextRecord {
                                id
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
