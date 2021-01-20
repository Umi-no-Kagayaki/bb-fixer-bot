const setState = (func, value) => {
    console.log(func, value)
    func(value);
};

export default setState;