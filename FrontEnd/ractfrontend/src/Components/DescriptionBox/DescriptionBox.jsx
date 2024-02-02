import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews(122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Soluta tempora ratione quaerat possimus mollitia nam nobis autem quae in, 
                minima aspernatur consequuntur quasi dignissimos atque reprehenderit, 
                necessitatibus veniam iure. Sunt.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Enim rem eos numquam vel molestiae. 
                Provident temporibus beatae magni ipsa rerum?</p>
        </div>
    </div>
  )
}
