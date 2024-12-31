# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an unhandled promise rejection within an HTTP request handler causes the server to crash.  The issue arises from not properly handling potential errors from asynchronous operations.

## The Problem

The `bug.js` file contains a Node.js HTTP server that simulates an asynchronous operation.  This operation randomly succeeds or fails.  If it fails, the error is logged to the console but isn't properly handled, resulting in the server crashing.

## The Solution

The `bugSolution.js` file provides a corrected version. It uses a `try...catch` block around the asynchronous operation or utilizes the `.catch` method of the promise to handle potential errors gracefully, preventing the server from crashing.