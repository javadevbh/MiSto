import React from 'react';

//Gif
import loader from "../../assets/gif/loader.gif";

const Loading = () => {
    return (
        <img className='w-56 mx-auto' src={loader} alt="Loader" />
    );
};

export default Loading;