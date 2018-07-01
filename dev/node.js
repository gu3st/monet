const {Canvas, Image} = require('canvas')

const exampleData = require('../@data/example')
const {Monet, Primitives} = require('../dist/monet')

const canvas = new Canvas(exampleData.canvas.width, exampleData.canvas.height)

const ctx = canvas.getContext('2d')

const primitives = {
    Image: new Primitives.Image(Image),
    Text: new Primitives.Text()
}

const monet = new Monet(canvas, ctx, primitives)

monet.render(exampleData).then(() => {
    console.log(canvas.toDataURL())
})






