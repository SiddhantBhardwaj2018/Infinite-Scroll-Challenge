import React from 'react'

const Image = ({ image }) => {
    return (
        <img className="singlePhoto" src={image.urls.thumb} alt="" />
    )
}

export default Image
