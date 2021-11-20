const token = '474e113b8e779f09724e19ed0ef15b';

export default GetAllPosts = async () => { 
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
                _site(locale: fr) {
                  globalSeo(locale: fr) {
                    siteName
                    titleSuffix
                    fallbackSeo {
                      description
                      image {
                        url
                        height
                        width
                        alt(locale: fr)
                      }
                    }
                  }
                }
              }`
        }),
        }
    ).then((response) => response.json());

    return data.data._site;
}
