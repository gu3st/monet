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
        const Q = Promise.resolve()
        _objects.forEach((_object) => {
            const primitive = this.primitives[_object.primitive]
            if(primitive){
                Q.then(primitive.render(this.context, _object.props))
            }
        })
    }

    render(_tree){
        const {canvas, objects} = _tree
        this.resizeCanvas(canvas)
        this.clearCanvas(canvas)
        this.drawObjects(objects)
    }
}
