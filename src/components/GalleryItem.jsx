import { useParams, useLocation } from 'react-router-dom'

const GalleryItem = () => {
    let params = useParams();
    let location = useLocation();

    console.log(params)
    console.log(location)

    return (
        <>
            Post ID XXX
        </>
    )
}

export default GalleryItem;