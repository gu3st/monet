export default class ImagePrimitive{

    constructor(_Image){
        this.Image = _Image
    }

    error(_resolve, _ctx, _image, _coords){
        return () => {
            _ctx.fillStyle = 'red'
            _ctx.fillRect(
                this.getX(_coords),
                this.getY(_coords),
                this.getWidth(_coords, _image),
                this.getHeight(_coords, _image)
            )
            _resolve()
        }

    }

    load(_resolve, _ctx, _image, _coords){
        return () => {
            _ctx.drawImage(
                _image,
                this.getX(_coords),
                this.getY(_coords),
                this.getWidth(_coords, _image),
                this.getHeight(_coords, _image)
            )
            _resolve()
        }
    }

    getX(_coords){
        return _coords.x || 0
    }

    getY(_coords){
        return _coords.y || 0
    }

    getHeight(_coords, _img){
        return _coords.height || _img.height || 0
    }

    getWidth(_coords, _img){
        return _coords.width || _img.width || 0
    }

    async render(_ctx, props){
        const { src, coords } = props
        return new Promise((_res) => {
            const img = new this.Image()
            img.onload = this.load(_res, _ctx, img, coords)
            img.onerror = this.error(_res, _ctx, img, coords)
            img.src = src
        })

    }

}
