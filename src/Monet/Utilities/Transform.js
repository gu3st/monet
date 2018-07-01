import Coords from "./Coords";

export default class Transform{

    static Rotate(_ctx, _degree = 0 ,_x = 0,_y = 0 ,_width = 0,_height = 0){
        const xTranslate = _x + _width / 2
        const yTranslate = _y + _height / 2
        _ctx.translate(xTranslate, yTranslate)
        _ctx.rotate(_degree * Math.PI / 180)
        _ctx.translate(-xTranslate, -yTranslate)
    }

}
