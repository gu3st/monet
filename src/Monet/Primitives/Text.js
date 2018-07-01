import Color from '../Utilities/Color'
import Coords from '../Utilities/Coords'
import Transform from "../Utilities/Transform";

export default class TextPrimitive {

    constructor(){

    }

    drawText(_ctx, _props){
        const {coords} = _props
        _ctx.fillStyle = Color.getColor(_props)
        _ctx.font = this.getFont(_props)
        _ctx.antialias = 'subpixel'
        _ctx.save()
        if(_props.rotate){
            _ctx.rotate(_props.rotate * Math.PI / 180)
        }
        _ctx.fillText(
            this.getText(_props),
            Coords.getX(coords),
            Coords.getY(coords),
            Coords.getMaxWidth(coords)
            )
        _ctx.restore()
    }

    strokeText(_ctx, _props){
        const {coords} = _props
        _ctx.strokeStyle = Color.getColor(_props.stroke)
        _ctx.lineWidth = this.getWeight(_props.stroke)
        _ctx.lineJoin = "round"
        _ctx.font = this.getFont(_props)
        _ctx.antialias = 'subpixel'
        _ctx.save()
        if(_props.rotate){
            _ctx.rotate(_props.rotate * Math.PI / 180)
        }
        _ctx.strokeText(
            this.getText(_props),
            Coords.getX(coords),
            Coords.getY(coords),
            Coords.getMaxWidth(coords)
        )
        _ctx.restore()
    }

    getFont(_props){
        const size = _props.size || 16
        const font = _props.fontFamily || "serif"
        return `${size}px ${font}`
    }

    getWeight(_props){
        return _props.weight || 1;
    }

    getText(_props){
        return _props.text || ""
    }

    async render(_ctx, props){
        if(props.stroke){
            this.strokeText(_ctx,props)
        }
        this.drawText(_ctx, props)
    }

}
