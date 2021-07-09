

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
    }
}