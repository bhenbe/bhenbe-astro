export default GetAllPosts = async (token) => { 
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
                allPosts(locale: fr, orderBy: postDate_DESC) {
                  titre
                  slug
                  postDate
                  id
                }
              }`
        }),
        }
    ).then((response) => response.json());

    return data.data.allPosts;
}
