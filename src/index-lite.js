export * from './index-core.js'
import Exifr from './index-core.js'
export default Exifr

// TIFF Parser
import './segment-parsers/tiff.js'

// TIFF Keys
import './tags/tiff-ifd0-keys.js'
import './tags/tiff-exif-keys.js'
import './tags/tiff-gps-keys.js'

// TIFF Values
import './tags/tiff-ifd0-values.js'
import './tags/tiff-exif-values.js'

// TIFF Revivers
import './tags/tiff-revivers.js'