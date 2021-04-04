import React from 'react'

export default function RepoImage({image}) {
    return (
        <div className="RepoImage">
         <img src={image} alt="Owner Avatar"/>
        </div>
    )
}
