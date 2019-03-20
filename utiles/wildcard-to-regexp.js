module.exports = (exp) => {
    let regStr = exp
        .replace(/([^\w])/g, '\\$1')
        .replace(/\\\*/g, '.*').replace(/\\\?/g, '.');
    return new RegExp(`^${regStr}$`, 'i');
};