- JavaScript Execution context

{} -> Global execution context (this keyword)

- Note:

1. Execution context differs with execution environment.
2. Browser, node, bun, dino has different execution context.
3. Browser execution context is important (this refers in browser context to window object).

-> Global execution context
-> Function execution context
-> Eval execution context

--> Phases in EC
{} -> Memory creation phase
-> Execution phase

1. -> Global execution (this)
2. -> Memory phase (takes variables undefined)
3. -> Execution phase (new variable environment + execution thread)

- Call stack

- Document object model

- Events

--> Events in javascript run sequentially
--> setTimeout() - accepts handler(handler is a fucntion with no name) and timeout i.e number

- Async JavaScript

--> JavaScript -> Synchronous(code is executed line by line) -> Single threaded(slow language) --> it is a default behaviour of javascript

- Execution context

--> execute one line of code at a time
-> console.log(1) - 1
-> console.log(2) - 2
-> call stack - memory heap

- Blocking code and non-blocking code

--> block the flow of program -> read file sync
--> dose not block execution -> read file async

* Event loop

- JavaScript engine

--> memory heap
--> call stack - function - function - function - global

- Web API

--> dom api
--> setTimeout
--> setInterval
--> fetch() - register call back

- Task queue

--> callback <--> callback

- XMLHttp request

--> Its methods contains ready state using which requests are made.