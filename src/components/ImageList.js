import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ( props ) => {
    
    // console.log(props.results);
    const resultList = props.results.map((result) => {
        return  <ImageCard key={result.id} image={result} /> ;
    });

    return (
        <div className="image-list">{resultList}</div>
    );
}

export default ImageList;