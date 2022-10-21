import axios from "axios";

const getImageList = async () => {
    try {
        const url = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=7c6f16c042d5bd88f272041bf07148c3&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1";
        let data = await axios.get(url);
        return data;
    } catch (err) {
        console.log(err);
        return []
    }
}

export default getImageList;