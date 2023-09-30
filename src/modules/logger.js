const LogType = {
    Info: 'info',
    Success: 'success',
    Warning: 'warning',
    Error: 'error',
    Debug: 'debug'
};

/**
 * @param {LogType} level 
 * @param {string} type 
 * @param  {...string} messages 
 * @returns {void}
 */
module.exports = (level, type, ...messages) => {
    console.log(`[${level.toUpperCase()}] [${type.toUpperCase()}]`, ...messages);
};