# Rate Limiter

A flexible, lightweight rate limiting utility designed to control the number of times a function can be executed within a specific time window. This is especially useful for API calls or any operation that requires throttling to prevent overuse.

## Features

- Simple configuration for limiting API or function calls.
- Supports both synchronous and asynchronous operations.
- Easily customizable rate limits for different APIs or functions.
- Keeps track of call counts and automatically resets after a time window.

## Installation

Install via NPM:

```bash
npm install @paras/rate-limiter

yarn add @paras/rate-limiter
