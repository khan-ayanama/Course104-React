# Notes - 05

## Monolithic Architecture

* In Monolithic an entire application is built as a single, indivisible unit.
* In this architecture, all the components and functionalities of the application are tightly integrated and interdependent.
* Entire application, including the user interface, business logic, and data storage, is developed, deployed, and scaled as a single monolithic entity.

## Microservice Architecture

* Each service in the microservice architecture represents a specific business capability and can be developed, deployed, and scaled independently.
* These services communicate with each other through well-defined APIs, often using lightweight protocols like HTTP or messaging systems.

## Separation of concern | Single Responsibility

## useEffect

* UseEffect is a built-in hook that allows you to perform side effects in functional components.
* Side effects are actions that are typically asynchronous and may affect the component's state, interact with the DOM, or perform network requests.
* The useEffect hook is often used to handle tasks like fetching data, setting up event listeners, updating the document title, or performing cleanup.

```js
    // useEffect(callback(),dependencyArray)
    useEffect((=>{},[]))
```

* useEffect will call when dependency is changed.

## What is CORS

CORS stands for Cross-Origin Resource Sharing. It's a security feature implemented in web browsers to control how web pages from one domain can request and interact with resources (like data, images, scripts) hosted on another domain. CORS is primarily a browser-based mechanism and is designed to prevent potential security vulnerabilities that can arise when web pages from different origins (domains) interact with each other.

### How CORS works

1. Same-Origin Policy: By default, web browsers enforce a "same-origin policy," which means that a web page from one domain is not allowed to make requests to resources on another domain using JavaScript unless they have the same origin (protocol, domain, and port). This policy is a security measure to prevent unauthorized access to data on different domains.

2. Cross-Origin Requests: However, there are legitimate cases where you might want to allow cross-origin requests. For instance, you might have a web application hosted on one domain that needs to make AJAX requests to an API hosted on another domain. This is where CORS comes into play.

3. CORS Headers: To enable controlled and secure cross-origin requests, the server hosting the resources can send specific HTTP headers that indicate which origins are allowed to access its resources. These headers include:

    * Access-Control-Allow-Origin: This header specifies the list of origins that are allowed to access the resource. For example, if example.com wants to access a resource on api.example.org, the server can include Access-Control-Allow-Origin: 'example.com' in its response header.
    * Access-Control-Allow-Methods: This header specifies the HTTP methods that are allowed when accessing the resource.
    * Access-Control-Allow-Headers: This header specifies which HTTP headers are allowed in the actual request.
    * Access-Control-Allow-Credentials: This header indicates whether the browser should include credentials (like cookies or HTTP authentication) in the request.
    * Access-Control-Expose-Headers: This header specifies which response headers can be exposed to the requesting client.

4. Preflight Requests: For some types of requests (e.g., those with certain HTTP methods or custom headers), the browser might send a "preflight" request before the actual request to check if the server allows the cross-origin request. This involves an HTTP OPTIONS request to the server with specific headers.

## Shimmer UI

## Conditional Rendering

## Javascript Expression & Javascript Statement

In React you can run only javascript Expression
