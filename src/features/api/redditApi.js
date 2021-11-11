

export const reddit = {

    //access reddit for search results to query
    async getSearch(query) {
        try {
            const response = await fetch(`https://www.reddit.com/search.json?q=${query}&limit=15`)
            if (response.ok) {
                const jsonResponse = await response.json();
                const children = jsonResponse.data.children.map(child => child.data)
                return children;
            }
            throw new Error('Reuqest Failed');
        } catch(error) {
            console.log(error)
        }
    },

    //access reddit api for homepage data
    async getHomepage() {
        try {
            const response = await fetch(`https://www.reddit.com/best.json`)
            if (response.ok) {
                const jsonResponse = await response.json();
                const children = jsonResponse.data.children.map(child => child.data)
                return children;
            }
            throw new Error('Reuqest Failed');
        } catch(error) {
            console.log(error)
        }
    },

    //get subreddit data from reddit api
    async getSubreddit(sub) {
        try {
            const response = await fetch(`https://www.reddit.com/r/${sub}.json`)
            if (response.ok) {
                const jsonResponse = await response.json();
                const children = jsonResponse.data.children.map(child => child.data)
                return children;
            }
            throw new Error('Reuqest Failed');
        } catch(error) {
            console.log(error)
        
        }
    },

    //get post data from reddit api
    async getPost(link) {
        try {
            const response = await fetch(`https://www.reddit.com${link}.json`)
            if (response.ok) {
                const jsonResponse = await response.json();
                const children = jsonResponse[0].data.children.map(child => child.data)
                return children;
            }
            throw new Error('Reuqest Failed');
        } catch(error) {
            console.log(error)
        
        }
    },

    //get comments data for a post from the reddit api
    async getComments(link) {
        try {
            const response = await fetch(`https://www.reddit.com${link}.json`)
            if (response.ok) {
                const jsonResponse = await response.json();
                const children = jsonResponse[1].data.children.map(child => child.data)
                return children;
            }
            throw new Error('Reuqest Failed');
        } catch(error) {
            console.log(error)
        
        }
    }

}