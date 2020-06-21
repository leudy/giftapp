import React from 'react'

export const GiftItem = ( {title,url}) => {
    //{id,url,title}
    return (
        < >
          <img src={ url } alt={title} />
    <p>{title}</p>
        </>
    )
}
