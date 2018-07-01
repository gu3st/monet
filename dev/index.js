import 'babel-polyfill'

import {Monet, Primitives} from '../src'
import testData from '../@data/example'


const canvas = document.getElementById('monet')
const ctx = canvas.getContext('2d')

const primitives = {
    Image: new Primitives.Image(Image),
    Text: new Primitives.Text()
}

const monet = new Monet(canvas, ctx, primitives)

monet.render(testData)

