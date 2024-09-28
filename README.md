# Rate Limiter

A flexible, lightweight rate limiting utility designed to control the number of times a function can be executed within a specific time window. This is especially useful for API calls or any operation that requires throttling to prevent overuse.

## Features

- Simple configuration for limiting API or function calls.
- Supports both synchronous and asynchronous operations.
- Easily customizable rate limits for different APIs or functions.
- Keeps track of call counts and automatically resets after a time window.

## Installation

Install via NPM:

npm install rate-limiter-advance

yarn add rate-limiter-advance

## Example

const RateLimiter = require('rate-limiter');

const rateLimiter = new RateLimiter();

// Configure rate limit: Allow 5 calls every 60 seconds
rateLimiter.addConfig('getUserData', 5, 60);

const getUserData = () => {
    console.log('API call to get user data executed');
};

const callApi = () => {
    rateLimiter.execute('getUserData', getUserData);
};

// Simulate multiple API calls
for (let i = 0; i < 10; i++) {
    callApi();
}

```bash