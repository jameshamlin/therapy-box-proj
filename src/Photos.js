import React,{useState} from 'react';
import ImageUploader from 'react-images-upload';

const Photos = ({}) => {

    const [pics, setPics] = useState([]);

    console.log('pics', pics);

    const onDrop = (pic) => {

        console.log('adding image', pic)
        setPics( pics.concat(pic));
    }


    return (
        <>
        <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            dataURLKey="data_url"
        />
            {pics.map((pic,i) => <img key={i} src={pic.name} />)}
        </>
    )
}

export default Photos