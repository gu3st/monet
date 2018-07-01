import Coords from "../Utilities/Coords";
import Transform from "../Utilities/Transform";

export default class ImagePrimitive{

    constructor(_Image){
        this.Image = _Image
    }

    error(_resolve, _ctx, _image, _coords, _props){
        return (e) => {
            _ctx.fillStyle = 'red'
            if(_props.rotate){
                Transform.Rotate(_ctx, _props.rotate, Coords.getX(_coords), Coords.getY(_coords), Coords.getWidth(_coords, _image), Coords.getHeight(_coords, _image))
            }
            _ctx.fillRect(
                Coords.getX(_coords),
                Coords.getY(_coords),
                Coords.getWidth(_coords, _image),
                Coords.getHeight(_coords, _image)
            )
            _resolve()
        }

    }

    load(_resolve, _ctx, _image, _coords, _props){
        return (e) => {
            _ctx.imageSmoothingEnabled = true
            _ctx.webkitImageSmoothingEnabled = true
            _ctx.mozImageSmoothingEnabled = true
            if(_props.rotate){
                Transform.Rotate(_ctx, _props.rotate, Coords.getX(_coords), Coords.getY(_coords), Coords.getWidth(_coords, _image), Coords.getHeight(_coords, _image))
            }

            _ctx.drawImage(
                _image,
                Coords.getX(_coords),
                Coords.getY(_coords),
                Coords.getWidth(_coords, _image),
                Coords.getHeight(_coords, _image)
            )
            _resolve()
        }
    }

    async render(_ctx, props){
        const { src, coords } = props
        return new Promise((_res) => {
            const img = new this.Image()
            img.onload = this.load(_res, _ctx, img, coords, props)
            img.onerror = this.error(_res, _ctx, img, coords, props)
            img.src = src
        })

    }

}
