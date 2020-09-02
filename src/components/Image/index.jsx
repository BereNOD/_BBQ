import * as React from 'react'

import './styles.css'

import photo1 from '../../assets/image/photo1.png'

class Image extends React.Component {
    state = {
        image: {
            src: photo1,
            alt: 'Dish photo',
            width: 268,
            height: 268
        }
    }
    render = () => (
        <div className="Image__box">
            <img
                className="Image"
                src={this.state.image.src}
                alt={this.state.image.alt}
                width={this.state.image.width}
                height={this.state.image.height}
            />
        </div>
    )
}

export default Image