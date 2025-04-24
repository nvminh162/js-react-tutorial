import { TYPE_LOG } from '../const.js'

var logger = (log, type = TYPE_LOG) => {
    console[type](log);
}

// export default logger

export default logger