# Suspending Server

## A simple server that can be configured to return a delayed response.

## Installation
```bash
npm install
```

## Running the server
```bash
npm run start
```

Environment variables:

**PORT** - Can be used to specify a specific port to run the server on. If not provided, it will default to port `3000`.

**DEFAULT_TIMEOUT** - Can be used to specify a global default timeout for all requests. If not provided, it will default to 1 second.
