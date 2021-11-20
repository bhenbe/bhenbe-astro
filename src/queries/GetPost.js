const token = '474e113b8e779f09724e19ed0ef15b';

export async function getStaticPaths() {
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
                  content(locale: fr) {
                    value
                  }
                }
              }`
        }),
        }
    ).then((response) => response.json());
    const allPosts = data.allPosts;

    return allPosts.map(( post, i) => {
        return {
            params: { slug: post.slug },
            props: {post}
        };
    });
}