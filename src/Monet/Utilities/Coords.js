export default class Coords{
    static getX(_coords){
        return _coords.x || 0
    }

    static getY(_coords){
        return _coords.y || 0
    }

    static getHeight(_coords, _obj){
        return _coords.height || _obj.height || 0
    }

    static getWidth(_coords, _obj){
        return _coords.width || _obj.width || 0
    }

    static getMaxWidth(_coords){
        return _coords.maxWidth || undefined
    }
}
