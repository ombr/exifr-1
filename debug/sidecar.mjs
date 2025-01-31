import * as exifr from '../src/bundles/full.mjs'
import {promises as fs} from 'fs'

;(async () => {
	let output1 = await exifr.sidecar('../test/fixtures/sidecar/IMG_5910.xmp')
	console.log('output1', output1)

	let output2 = await exifr.sidecar('../test/fixtures/sidecar/IMG_5910.exif')
	console.log('output2', output2)

	let output3 = await exifr.sidecar('../test/fixtures/icc/sRGB_v4_ICC_preference.icc')
	console.log('output3', output3)
/*
	let buffer1 = await fs.readFile('../test/fixtures/sidecar/IMG_5910.xmp')
	let output1 = await exifr.sidecar(buffer1)
	console.log('output1', output1)

	let buffer2 = await fs.readFile('../test/fixtures/sidecar/IMG_5910.exif')
	let output2 = await exifr.sidecar(buffer2)
	console.log('output2', output2)

	let buffer3 = await fs.readFile('../test/fixtures/icc/sRGB_v4_ICC_preference.icc')
	let output3 = await exifr.sidecar(buffer3)
	console.log('output3', output3)
*/
})().catch(console.error);