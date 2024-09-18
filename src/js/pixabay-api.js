export const fetchImages = text => {
    const searchImages = new URLSearchParams({
        key: "45941098-20d6b06978404a6b7356e16b7",
        q: text,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });

    return fetch(`https://pixabay.com/api/?${searchImages}`)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
};
