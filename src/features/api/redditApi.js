

export const reddit = {
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
    }
}