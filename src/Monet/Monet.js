export default class Monet {


    constructor(_canvas, _ctx, _primitives = {}) {
        this.canvas = _canvas
        this.context = _ctx
        this.primitives = _primitives
    }

    resizeCanvas(_canvas){
        this.canvas.height = _canvas.height || 320
        this.canvas.width = _canvas.width || 640
    }

    clearCanvas(canvas){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        if(canvas.bgcolor){
            this.context.fillStyle = canvas.bgcolor
            this.context.fillRect(0,0,this.canvas.width, this.canvas.height)
        }
    }

    drawObjects(_objects){
        return _objects.reduce((_queue, _object) => {
            const primitive = this.primitives[_object.primitive]
            if(primitive){
                return _queue.then(() => {
                    this.context.save()
                    const P = primitive.render(this.context, _object.props)
                    return P.then(() => this.context.restore())
                })
            }
            return _queue
        }, Promise.resolve())
    }

    async render(_tree){
        const {canvas, objects} = _tree
        this.resizeCanvas(canvas)
        this.clearCanvas(canvas)
        return this.drawObjects(objects)

    }
}
