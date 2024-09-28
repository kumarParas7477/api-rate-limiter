class RateLimiter {
  constructor() {
    this.requestsConfig = {};
  }

  addConfig = (name, numberOfTimes, seconds) => {
    this.requestsConfig[name] = { numberOfTimes, seconds: seconds*1000, totalCalls: 0};
  };

  changeValue = (name, key, value) => {
    this.requestsConfig[name][key] = value;
  };

  execute = (name, cb) => {
    const { numberOfTimes, seconds, firstCallTime, totalCalls } =
      this.requestsConfig[name];
    const now = Date.now();
    if (firstCallTime) {
        const diff = now - firstCallTime;
      if (diff <= seconds) {
        if (totalCalls < numberOfTimes) {
          this.changeValue(name, 'totalCalls', totalCalls + 1);
          cb();
        }
      } else {
        this.changeValue(name, 'totalCalls', 1);
        this.changeValue(name, 'firstCallTime', now);
        cb();
      }
    } else {
      this.changeValue(name, 'firstCallTime', now);
      this.changeValue(name, 'totalCalls', totalCalls + 1);
      cb();
    }
  };
}


module.exports = RateLimiter;