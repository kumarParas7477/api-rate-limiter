// test/rateLimiterSingleApi.test.js

const RateLimiter = require('./index'); // Adjust the path to your module

test('RateLimiter should limit the number of API calls within the time window', (done) => {
  const rateLimiter = new RateLimiter();
  const mockCallback = jest.fn(() => {
    console.log('API call executed');
  });

  // Configuring the API rate limit: 2 calls every 5 seconds
  rateLimiter.addConfig('myApi', 2, 5);

  // Make the first call
  rateLimiter.execute('myApi', mockCallback);
  expect(mockCallback).toHaveBeenCalledTimes(1);

  // Make the second call
  rateLimiter.execute('myApi', mockCallback);
  expect(mockCallback).toHaveBeenCalledTimes(2);

  // Make a third call within the same 5-second window (should be blocked)
  rateLimiter.execute('myApi', mockCallback);
  expect(mockCallback).toHaveBeenCalledTimes(2); // Should not increase

  // Wait for more than 5 seconds and try again
  setTimeout(() => {
    rateLimiter.execute('myApi', mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3); // Should be allowed now
    done();
  }, 6000); // Waiting for 6 seconds to exceed the time window
}, 10000); // Jest test timeout in case of async delays
