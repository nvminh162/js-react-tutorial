import { logger2 } from './logger/index.js'

// *** 2 cách lấy từ import
// 1. Destructuring
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './const.js'
// 2. other (recommended)
import * as constants from './const.js'

logger2('test message...', constants.TYPE_LOG)
