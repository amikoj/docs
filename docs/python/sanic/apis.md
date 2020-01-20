---
id: apis
title: Apis
author:胖蔡
---
# Submodules
## sanic.app module
> classsanic.app.Sanic(name=None, router=None, error_handler=None, load_env=True, request_class=None, strict_slashes=False, log_config=None, configure_logging=True)
Bases: object

### add_route(handler, uri, methods=frozenset({'GET'}), host=None, strict_slashes=None, version=None, name=None, stream=False)
A helper method to register class instance or functions as a handler to the application url routes.

#### Parameters
- handler – function or class instance
- uri – path of the URL
- methods – list or tuple of methods allowed, these are overridden if using a HTTPMethodView
- host –
- strict_slashes –
- version –
- name – user defined route name for url_for
- stream – boolean specifying if the handler is a stream handler

#### Returns
function or class instance

### add_task(task)
Schedule a task to run later, after the loop has started. Different from asyncio.ensure_future in that it does not also return a future, and the actual ensure_future call is delayed until before server start.

#### Parameters
task – future, couroutine or awaitable

### add_websocket_route(handler, uri, host=None, strict_slashes=None, subprotocols=None, name=None)
A helper method to register a function as a websocket route.

#### Parameters
- handler – a callable function or instance of a class that can handle the websocket request
- host – Host IP or FQDN details
- uri – URL path that will be mapped to the websocket handler handler
- strict_slashes – If the API endpoint needs to terminate with a “/” or not
- subprotocols – Subprotocols to be used with websocket handshake
- name – A unique name assigned to the URL so that it can be used with url_for()


#### Returns
Objected decorated by websocket()

### propertyasgi_client
blueprint(blueprint, **options)
Register a blueprint on the application.

#### Parameters
- blueprint – Blueprint object or (list, tuple) thereof
- options – option dictionary with blueprint defaults

#### Returns
Nothing

### converted_response_type(response)
No implementation provided.

### asynccreate_server(host: Optional[str] = None, port: Optional[int] = None, debug: bool = False, ssl: Union[dict, ssl.SSLContext, None] = None, sock: Optional[socket.socket] = None, protocol: Type[asyncio.protocols.Protocol] = None, backlog: int = 100, stop_event: Any = None, access_log: Optional[bool] = None, return_asyncio_server=False, asyncio_server_kwargs=None) → Optional[sanic.server.AsyncioServer]
Asynchronous version of run().

This method will take care of the operations necessary to invoke the before_start events via trigger_events() method invocation before starting the sanic app in Async mode.

#### Note

This does not support multiprocessing and is not the preferred way to run a Sanic application.

Parameters
host (str) – Address to host on

port (int) – Port to host on

debug (bool) – Enables debug output (slows server)

ssl (SSLContext or dict) – SSLContext, or location of certificate and key for SSL encryption of worker(s)

sock (socket) – Socket for the server to accept connections from

protocol (type[Protocol]) – Subclass of asyncio Protocol class

backlog (int) – a number of unaccepted connections that the system will allow before refusing new connections

stop_event (None) – event to be triggered before stopping the app - deprecated

access_log (bool) – Enables writing access logs (slows server)

return_asyncio_server (bool) – flag that defines whether there’s a need to return asyncio.Server or start it serving right away

asyncio_server_kwargs (dict) – key-value arguments for asyncio/uvloop create_server method

Returns
AsyncioServer if return_asyncio_server is true, else Nothing

delete(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the DELETE HTTP method

Parameters
uri – URL to be tagged to DELETE method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

enable_websocket(enable=True)
Enable or disable the support for websocket.

Websocket is enabled automatically if websocket routes are added to the application.

exception(*exceptions)
Decorate a function to be registered as a handler for exceptions

Parameters
exceptions – exceptions

Returns
decorated function

get(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the GET HTTP method

Parameters
uri – URL to be tagged to GET method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

asynchandle_request(request, write_callback, stream_callback)
Take a request from the HTTP Server and return a response object to be sent back The HTTP Server only expects a response object, so exception handling must be done here

Parameters
request – HTTP Request object

write_callback – Synchronous response function to be called with the response as the only argument

stream_callback – Coroutine that handles streaming a StreamingHTTPResponse if produced by the handler.

Returns
Nothing

head(uri, host=None, strict_slashes=None, version=None, name=None)
listener(event)
Create a listener from a decorated function.

Parameters
event – event to listen to

propertyloop
Synonymous with asyncio.get_event_loop().

Only supported when using the app.run method.

middleware(middleware_or_request)
Decorate and register middleware to be called before a request. Can either be called as @app.middleware or @app.middleware(‘request’)

Param
middleware_or_request: Optional parameter to use for identifying which type of middleware is being registered.

options(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the OPTIONS HTTP method

Parameters
uri – URL to be tagged to OPTIONS method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

patch(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the PATCH HTTP method

Parameters
uri – URL to be tagged to PATCH method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

post(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the POST HTTP method

Parameters
uri – URL to be tagged to POST method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

put(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the PUT HTTP method

Parameters
uri – URL to be tagged to PUT method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

register_blueprint(*args, **kwargs)
Proxy method provided for invoking the blueprint() method

Note

To be deprecated in 1.0. Use blueprint() instead.

Parameters
args – Blueprint object or (list, tuple) thereof

kwargs – option dictionary with blueprint defaults

Returns
None

register_listener(listener, event)
Register the listener for a given event.

Parameters
listener – callable i.e. setup_db(app, loop)

event – when to register listener i.e. ‘before_server_start’

Returns
listener

register_middleware(middleware, attach_to='request')
Register an application level middleware that will be attached to all the API URLs registered under this application.

This method is internally invoked by the middleware() decorator provided at the app level.

Parameters
middleware – Callback method to be attached to the middleware

attach_to – The state at which the middleware needs to be invoked in the lifecycle of an HTTP Request. request - Invoke before the request is processed response - Invoke before the response is returned back

Returns
decorated method

register_named_middleware(middleware, route_names, attach_to='request')
remove_route(uri, clean_cache=True, host=None)
This method provides the app user a mechanism by which an already existing route can be removed from the Sanic object

Warning

remove_route is deprecated in v19.06 and will be removed from future versions.

Parameters
uri – URL Path to be removed from the app

clean_cache – Instruct sanic if it needs to clean up the LRU route cache

host – IP address or FQDN specific to the host

Returns
None

route(uri, methods=frozenset({'GET'}), host=None, strict_slashes=None, stream=False, version=None, name=None)
Decorate a function to be registered as a route

Parameters
uri – path of the URL

methods – list or tuple of methods allowed

host –

strict_slashes –

stream –

version –

name – user defined route name for url_for

Returns
tuple of routes, decorated function

run(host: Optional[str] = None, port: Optional[int] = None, debug: bool = False, ssl: Union[dict, ssl.SSLContext, None] = None, sock: Optional[socket.socket] = None, workers: int = 1, protocol: Type[asyncio.protocols.Protocol] = None, backlog: int = 100, stop_event: Any = None, register_sys_signals: bool = True, access_log: Optional[bool] = None, **kwargs: Any) → None
Run the HTTP Server and listen until keyboard interrupt or term signal. On termination, drain connections before closing.

Parameters
host (str) – Address to host on

port (int) – Port to host on

debug (bool) – Enables debug output (slows server)

ssl (SSLContext or dict) – SSLContext, or location of certificate and key for SSL encryption of worker(s)

sock (socket) – Socket for the server to accept connections from

workers (int) – Number of processes received before it is respected

protocol (type[Protocol]) – Subclass of asyncio Protocol class

backlog (int) – a number of unaccepted connections that the system will allow before refusing new connections

stop_event (None) – event to be triggered before stopping the app - deprecated

register_sys_signals (bool) – Register SIG* events

access_log (bool) – Enables writing access logs (slows server)

Returns
Nothing

static(uri, file_or_directory, pattern='/?.+', use_modified_since=True, use_content_range=False, stream_large_files=False, name='static', host=None, strict_slashes=None, content_type=None)
Register a root to serve files from. The input can either be a file or a directory. This method will enable an easy and simple way to setup the Route necessary to serve the static files.

Parameters
uri – URL path to be used for serving static content

file_or_directory – Path for the Static file/directory with static files

pattern – Regex Pattern identifying the valid static files

use_modified_since – If true, send file modified time, and return not modified if the browser’s matches the server’s

use_content_range – If true, process header for range requests and sends the file part that is requested

stream_large_files – If true, use the StreamingHTTPResponse.file_stream() handler rather than the HTTPResponse.file() handler to send the file. If this is an integer, this represents the threshold size to switch to StreamingHTTPResponse.file_stream()

name – user defined name used for url_for

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

content_type – user defined content type for header

Returns
None

stop()
This kills the Sanic

propertytest_client
asynctrigger_events(events, loop)
Trigger events (functions or async) :param events: one or more sync or async functions to execute :param loop: event loop

url_for(view_name: str, **kwargs)
Build a URL based on a view name and the values provided.

In order to build a URL, all request parameters must be supplied as keyword arguments, and each parameter must pass the test for the specified parameter type. If these conditions are not met, a URLBuildError will be thrown.

Keyword arguments that are not request parameters will be included in the output URL’s query string.

Parameters
view_name – string referencing the view name

**kwargs – keys and values that are used to build request parameters and query string arguments.

Returns
the built URL

Raises:
URLBuildError

websocket(uri, host=None, strict_slashes=None, subprotocols=None, name=None)
Decorate a function to be registered as a websocket route

Parameters
uri – path of the URL

host – Host IP or FQDN details

strict_slashes – If the API endpoint needs to terminate with a “/” or not

subprotocols – optional list of str with supported subprotocols

name – A unique name assigned to the URL so that it can be used with url_for()

Returns
tuple of routes, decorated function

sanic.blueprints module
classsanic.blueprints.Blueprint(name, url_prefix=None, host=None, version=None, strict_slashes=None)
Bases: object

add_route(handler, uri, methods=frozenset({'GET'}), host=None, strict_slashes=None, version=None, name=None, stream=False)
Create a blueprint route from a function.

Parameters
handler – function for handling uri requests. Accepts function, or class instance with a view_class method.

uri – endpoint at which the route will be accessible.

methods – list of acceptable HTTP methods.

host – IP Address of FQDN for the sanic server to use.

strict_slashes – Enforce the API urls are requested with a training /

version – Blueprint Version

name – user defined route name for url_for

stream – boolean specifying if the handler is a stream handler

Returns
function or class instance

add_websocket_route(handler, uri, host=None, version=None, name=None)
Create a blueprint websocket route from a function.

Parameters
handler – function for handling uri requests. Accepts function, or class instance with a view_class method.

uri – endpoint at which the route will be accessible.

host – IP Address of FQDN for the sanic server to use.

version – Blueprint Version

name – Unique name to identify the Websocket Route

Returns
function or class instance

delete(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the DELETE HTTP method

Parameters
uri – URL to be tagged to DELETE method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

exception(*args, **kwargs)
This method enables the process of creating a global exception handler for the current blueprint under question.

Parameters
args – List of Python exceptions to be caught by the handler

kwargs – Additional optional arguments to be passed to the exception handler

:return a decorated method to handle global exceptions for any
route registered under this blueprint.

get(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the GET HTTP method

Parameters
uri – URL to be tagged to GET method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

staticgroup(*blueprints, url_prefix='')
Create a list of blueprints, optionally grouping them under a general URL prefix.

Parameters
blueprints – blueprints to be registered as a group

url_prefix – URL route to be prepended to all sub-prefixes

head(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the HEAD HTTP method

Parameters
uri – URL to be tagged to HEAD method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

listener(event)
Create a listener from a decorated function.

Parameters
event – Event to listen to.

middleware(*args, **kwargs)
Create a blueprint middleware from a decorated function.

Parameters
args – Positional arguments to be used while invoking the middleware

kwargs – optional keyword args that can be used with the middleware.

options(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the OPTIONS HTTP method

Parameters
uri – URL to be tagged to OPTIONS method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

patch(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the PATCH HTTP method

Parameters
uri – URL to be tagged to PATCH method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

post(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the POST HTTP method

Parameters
uri – URL to be tagged to POST method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

put(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the PUT HTTP method

Parameters
uri – URL to be tagged to PUT method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

register(app, options)
Register the blueprint to the sanic app.

Parameters
app – Instance of sanic.app.Sanic class

options – Options to be used while registering the blueprint into the app. url_prefix - URL Prefix to override the blueprint prefix

route(uri, methods=frozenset({'GET'}), host=None, strict_slashes=None, stream=False, version=None, name=None)
Create a blueprint route from a decorated function.

Parameters
uri – endpoint at which the route will be accessible.

methods – list of acceptable HTTP methods.

host – IP Address of FQDN for the sanic server to use.

strict_slashes – Enforce the API urls are requested with a training /

stream – If the route should provide a streaming support

version – Blueprint Version

name – Unique name to identify the Route

:return a decorated method that when invoked will return an object
of type FutureRoute

static(uri, file_or_directory, *args, **kwargs)
Create a blueprint static route from a decorated function.

Parameters
uri – endpoint at which the route will be accessible.

file_or_directory – Static asset.

websocket(uri, host=None, strict_slashes=None, version=None, name=None)
Create a blueprint websocket route from a decorated function.

Parameters
uri – endpoint at which the route will be accessible.

host – IP Address of FQDN for the sanic server to use.

strict_slashes – Enforce the API urls are requested with a training /

version – Blueprint Version

name – Unique name to identify the Websocket Route

classsanic.blueprints.FutureException(handler, args, kwargs)
Bases: tuple

propertyargs
Alias for field number 1

propertyhandler
Alias for field number 0

propertykwargs
Alias for field number 2

classsanic.blueprints.FutureListener(handler, uri, methods, host)
Bases: tuple

propertyhandler
Alias for field number 0

propertyhost
Alias for field number 3

propertymethods
Alias for field number 2

propertyuri
Alias for field number 1

classsanic.blueprints.FutureMiddleware(middleware, args, kwargs)
Bases: tuple

propertyargs
Alias for field number 1

propertykwargs
Alias for field number 2

propertymiddleware
Alias for field number 0

classsanic.blueprints.FutureRoute(handler, uri, methods, host, strict_slashes, stream, version, name)
Bases: tuple

propertyhandler
Alias for field number 0

propertyhost
Alias for field number 3

propertymethods
Alias for field number 2

propertyname
Alias for field number 7

propertystream
Alias for field number 5

propertystrict_slashes
Alias for field number 4

propertyuri
Alias for field number 1

propertyversion
Alias for field number 6

classsanic.blueprints.FutureStatic(uri, file_or_directory, args, kwargs)
Bases: tuple

propertyargs
Alias for field number 2

propertyfile_or_directory
Alias for field number 1

propertykwargs
Alias for field number 3

propertyuri
Alias for field number 0

sanic.blueprint_group module
classsanic.blueprint_group.BlueprintGroup(url_prefix=None)
Bases: collections.abc.MutableSequence

This class provides a mechanism to implement a Blueprint Group using the group() method in Blueprint. To avoid having to re-write some of the existing implementation, this class provides a custom iterator implementation that will let you use the object of this class as a list/tuple inside the existing implementation.

propertyblueprints
Retrieve a list of all the available blueprints under this group. :return: List of Blueprint instance

insert(index: int, item: object) → None
The Abstract class MutableSequence leverages this insert method to perform the BlueprintGroup.append operation.

Parameters
index – Index to use for removing a new Blueprint item

item – New Blueprint object.

Returns
None

middleware(*args, **kwargs)
A decorator that can be used to implement a Middleware plugin to all of the Blueprints that belongs to this specific Blueprint Group.

In case of nested Blueprint Groups, the same middleware is applied across each of the Blueprints recursively.

Parameters
args – Optional positional Parameters to be use middleware

kwargs – Optional Keyword arg to use with Middleware

Returns
Partial function to apply the middleware

propertyurl_prefix
Retrieve the URL prefix being used for the Current Blueprint Group :return: string with url prefix

sanic.config module
classsanic.config.Config(defaults=None, load_env=True, keep_alive=None)
Bases: dict

from_envvar(variable_name)
Load a configuration from an environment variable pointing to a configuration file.

Parameters
variable_name – name of the environment variable

Returns
bool. True if able to load config, False otherwise.

from_object(obj)
Update the values from the given object. Objects are usually either modules or classes.

Just the uppercase variables in that object are stored in the config. Example usage:

from yourapplication import default_config
app.config.from_object(default_config)

or also:
app.config.from_object('myproject.config.MyConfigClass')
You should not use this function to load the actual configuration but rather configuration defaults. The actual config should be loaded with from_pyfile() and ideally from a location not within the package because the package might be installed system wide.

Parameters
obj – an object holding the configuration

from_pyfile(filename)
Update the values in the config from a Python file. Only the uppercase variables in that module are stored in the config.

Parameters
filename – an absolute path to the config file

load_environment_vars(prefix='SANIC_')
Looks for prefixed environment variables and applies them to the configuration if present.

sanic.config.strtobool(val)
This function was borrowed from distutils.utils. While distutils is part of stdlib, it feels odd to use distutils in main application code.

The function was modified to walk its talk and actually return bool and not int.

sanic.constants module
sanic.cookies module
classsanic.cookies.Cookie(key, value)
Bases: dict

A stripped down version of Morsel from SimpleCookie #gottagofast

encode(encoding)
Encode the cookie content in a specific type of encoding instructed by the developer. Leverages the str.encode() method provided by python.

This method can be used to encode and embed utf-8 content into the cookies.

Parameters
encoding – Encoding to be used with the cookie

Returns
Cookie encoded in a codec of choosing.

Except
UnicodeEncodeError

classsanic.cookies.CookieJar(headers)
Bases: dict

CookieJar dynamically writes headers as cookies are added and removed It gets around the limitation of one header per name by using the MultiHeader class to provide a unique key that encodes to Set-Cookie.

sanic.exceptions module
exceptionsanic.exceptions.ContentRangeError(message, content_range)
Bases: sanic.exceptions.SanicException

status_code= 416
exceptionsanic.exceptions.FileNotFound(message, path, relative_url)
Bases: sanic.exceptions.NotFound

exceptionsanic.exceptions.Forbidden(message, status_code=None)
Bases: sanic.exceptions.SanicException

status_code= 403
exceptionsanic.exceptions.HeaderExpectationFailed(message, status_code=None)
Bases: sanic.exceptions.SanicException

status_code= 417
exceptionsanic.exceptions.HeaderNotFound(message, status_code=None)
Bases: sanic.exceptions.InvalidUsage

exceptionsanic.exceptions.InvalidRangeType(message, content_range)
Bases: sanic.exceptions.ContentRangeError

exceptionsanic.exceptions.InvalidUsage(message, status_code=None)
Bases: sanic.exceptions.SanicException

status_code= 400
exceptionsanic.exceptions.MethodNotSupported(message, method, allowed_methods)
Bases: sanic.exceptions.SanicException

status_code= 405
exceptionsanic.exceptions.NotFound(message, status_code=None)
Bases: sanic.exceptions.SanicException

status_code= 404
exceptionsanic.exceptions.PayloadTooLarge(message, status_code=None)
Bases: sanic.exceptions.SanicException

status_code= 413
exceptionsanic.exceptions.PyFileError(file)
Bases: Exception

exceptionsanic.exceptions.RequestTimeout(message, status_code=None)
Bases: sanic.exceptions.SanicException

The Web server (running the Web site) thinks that there has been too long an interval of time between 1) the establishment of an IP connection (socket) between the client and the server and 2) the receipt of any data on that socket, so the server has dropped the connection. The socket connection has actually been lost - the Web server has ‘timed out’ on that particular socket connection.

status_code= 408
exceptionsanic.exceptions.SanicException(message, status_code=None)
Bases: Exception

exceptionsanic.exceptions.ServerError(message, status_code=None)
Bases: sanic.exceptions.SanicException

status_code= 500
exceptionsanic.exceptions.ServiceUnavailable(message, status_code=None)
Bases: sanic.exceptions.SanicException

The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.

status_code= 503
exceptionsanic.exceptions.URLBuildError(message, status_code=None)
Bases: sanic.exceptions.ServerError

exceptionsanic.exceptions.Unauthorized(message, status_code=None, scheme=None, **kwargs)
Bases: sanic.exceptions.SanicException

Unauthorized exception (401 HTTP status code).

Parameters
message – Message describing the exception.

status_code – HTTP Status code.

scheme – Name of the authentication scheme to be used.

When present, kwargs is used to complete the WWW-Authentication header.

Examples:

# With a Basic auth-scheme, realm MUST be present:
raise Unauthorized("Auth required.",
                   scheme="Basic",
                   realm="Restricted Area")

# With a Digest auth-scheme, things are a bit more complicated:
raise Unauthorized("Auth required.",
                   scheme="Digest",
                   realm="Restricted Area",
                   qop="auth, auth-int",
                   algorithm="MD5",
                   nonce="abcdef",
                   opaque="zyxwvu")

# With a Bearer auth-scheme, realm is optional so you can write:
raise Unauthorized("Auth required.", scheme="Bearer")

# or, if you want to specify the realm:
raise Unauthorized("Auth required.",
                   scheme="Bearer",
                   realm="Restricted Area")
status_code= 401
sanic.exceptions.abort(status_code, message=None)
Raise an exception based on SanicException. Returns the HTTP response message appropriate for the given status code, unless provided.

Parameters
status_code – The HTTP status code to return.

message – The HTTP response body. Defaults to the messages in response.py for the given status code.

sanic.exceptions.add_status_code(code)
Decorator used for adding exceptions to SanicException.

sanic.handlers module
classsanic.handlers.ContentRangeHandler(request, stats)
Bases: object

A mechanism to parse and process the incoming request headers to extract the content range information.

Parameters
request (sanic.request.Request) – Incoming api request

stats (posix.stat_result) – Stats related to the content

Variables
start – Content Range start

end – Content Range end

size – Length of the content

total – Total size identified by the posix.stat_result instance

ContentRangeHandler.headers – Content range header dict

end
headers
size
start
total
classsanic.handlers.ErrorHandler
Bases: object

Provide sanic.app.Sanic application with a mechanism to handle and process any and all uncaught exceptions in a way the application developer will set fit.

This error handling framework is built into the core that can be extended by the developers to perform a wide range of tasks from recording the error stats to reporting them to an external service that can be used for realtime alerting system.

add(exception, handler)
Add a new exception handler to an already existing handler object.

Parameters
exception (sanic.exceptions.SanicException or Exception) – Type of exception that need to be handled

handler (function) – Reference to the method that will handle the exception

Returns
None

cached_handlers= None
default(request, exception)
Provide a default behavior for the objects of ErrorHandler. If a developer chooses to extent the ErrorHandler they can provide a custom implementation for this method to behave in a way they see fit.

Parameters
request (sanic.request.Request) – Incoming request

exception (sanic.exceptions.SanicException or Exception) – Exception object

Returns
handlers= None
log(message, level='error')
Deprecated, do not use.

lookup(exception)
Lookup the existing instance of ErrorHandler and fetch the registered handler for a specific type of exception.

This method leverages a dict lookup to speedup the retrieval process.

Parameters
exception (sanic.exceptions.SanicException or Exception) – Type of exception

Returns
Registered function if found None otherwise

response(request, exception)
Fetches and executes an exception handler and returns a response object

Parameters
request (sanic.request.Request) – Instance of sanic.request.Request

exception (sanic.exceptions.SanicException or Exception) – Exception to handle

Returns
Wrap the return value obtained from default() or registered handler for that type of exception.

sanic.log module
sanic.request module
classsanic.request.File(type, body, name)
Bases: tuple

propertybody
Alias for field number 1

propertyname
Alias for field number 2

propertytype
Alias for field number 0

classsanic.request.Request(url_bytes, headers, version, method, transport, app)
Bases: object

Properties of an HTTP request such as URL, headers, etc.

app
propertyargs
Method to parse query_string using urllib.parse.parse_qs. This methods is used by args property. Can be used directly if you need to change default parameters.

Parameters
keep_blank_values (bool) – flag indicating whether blank values in percent-encoded queries should be treated as blank strings. A true value indicates that blanks should be retained as blank strings. The default false value indicates that blank values are to be ignored and treated as if they were not included.

strict_parsing (bool) – flag indicating what to do with parsing errors. If false (the default), errors are silently ignored. If true, errors raise a ValueError exception.

encoding (str) – specify how to decode percent-encoded sequences into Unicode characters, as accepted by the bytes.decode() method.

errors (str) – specify how to decode percent-encoded sequences into Unicode characters, as accepted by the bytes.decode() method.

Returns
RequestParameters

body
body_finish()
body_init()
body_push(data)
propertycontent_type
propertycookies
ctx
endpoint
propertyfiles
propertyform
propertyforwarded
get(key, default=None)
Deprecated since version 19.9.

Custom context is now stored in request.custom_context.yourkey

get_args(keep_blank_values: bool = False, strict_parsing: bool = False, encoding: str = 'utf-8', errors: str = 'replace') → sanic.request.RequestParameters
Method to parse query_string using urllib.parse.parse_qs. This methods is used by args property. Can be used directly if you need to change default parameters.

Parameters
keep_blank_values (bool) – flag indicating whether blank values in percent-encoded queries should be treated as blank strings. A true value indicates that blanks should be retained as blank strings. The default false value indicates that blank values are to be ignored and treated as if they were not included.

strict_parsing (bool) – flag indicating what to do with parsing errors. If false (the default), errors are silently ignored. If true, errors raise a ValueError exception.

encoding (str) – specify how to decode percent-encoded sequences into Unicode characters, as accepted by the bytes.decode() method.

errors (str) – specify how to decode percent-encoded sequences into Unicode characters, as accepted by the bytes.decode() method.

Returns
RequestParameters

get_query_args(keep_blank_values: bool = False, strict_parsing: bool = False, encoding: str = 'utf-8', errors: str = 'replace') → list
Method to parse query_string using urllib.parse.parse_qsl. This methods is used by query_args property. Can be used directly if you need to change default parameters.

Parameters
keep_blank_values (bool) – flag indicating whether blank values in percent-encoded queries should be treated as blank strings. A true value indicates that blanks should be retained as blank strings. The default false value indicates that blank values are to be ignored and treated as if they were not included.

strict_parsing (bool) – flag indicating what to do with parsing errors. If false (the default), errors are silently ignored. If true, errors raise a ValueError exception.

encoding (str) – specify how to decode percent-encoded sequences into Unicode characters, as accepted by the bytes.decode() method.

errors (str) – specify how to decode percent-encoded sequences into Unicode characters, as accepted by the bytes.decode() method.

Returns
list

headers
propertyhost
Returns
proxied or direct Host header. Hostname and port number may be separated by sanic.headers.parse_host(request.host).

propertyip
Returns
peer ip of the socket

propertyjson
load_json(loads=<built-in function loads>)
propertymatch_info
return matched info after resolving route

method
parsed_args
parsed_files
parsed_form
parsed_forwarded
parsed_json
parsed_not_grouped_args
propertypath
propertyport
Returns
peer port of the socket

propertyquery_args
Method to parse query_string using urllib.parse.parse_qsl. This methods is used by query_args property. Can be used directly if you need to change default parameters.

Parameters
keep_blank_values (bool) – flag indicating whether blank values in percent-encoded queries should be treated as blank strings. A true value indicates that blanks should be retained as blank strings. The default false value indicates that blank values are to be ignored and treated as if they were not included.

strict_parsing (bool) – flag indicating what to do with parsing errors. If false (the default), errors are silently ignored. If true, errors raise a ValueError exception.

encoding (str) – specify how to decode percent-encoded sequences into Unicode characters, as accepted by the bytes.decode() method.

errors (str) – specify how to decode percent-encoded sequences into Unicode characters, as accepted by the bytes.decode() method.

Returns
list

propertyquery_string
propertyraw_args
raw_url
propertyremote_addr
Attempt to return the original client ip based on forwarded, x-forwarded-for or x-real-ip. If HTTP headers are unavailable or untrusted, returns an empty string.

Returns
original client ip.

propertyscheme
Attempt to get the request scheme. Seeking the value in this order: forwarded header, x-forwarded-proto header, x-scheme header, the sanic app itself.

Returns
http|https|ws|wss or arbitrary value given by the headers.

Return type
str

propertyserver_name
Attempt to get the server’s external hostname in this order: config.SERVER_NAME, proxied or direct Host headers Request.host()

Returns
the server name without port number

Return type
str

propertyserver_port
Attempt to get the server’s external port number in this order: config.SERVER_NAME, proxied or direct Host headers Request.host(), actual port used by the transport layer socket. :return: server port :rtype: int

propertysocket
stream
propertytoken
Attempt to return the auth header token.

Returns
token related to request

transport
uri_template
propertyurl
url_for(view_name, **kwargs)
Same as sanic.Sanic.url_for(), but automatically determine scheme and netloc base on the request. Since this method is aiming to generate correct schema & netloc, _external is implied.

Parameters
kwargs – takes same parameters as in sanic.Sanic.url_for()

Returns
an absolute url to the given view

Return type
str

version
classsanic.request.RequestParameters
Bases: dict

Hosts a dict with lists as values where get returns the first value of the list and getlist returns the whole shebang

get(name, default=None)
Return the first value, either the default or actual

getlist(name, default=None)
Return the entire list

classsanic.request.StreamBuffer(buffer_size=100)
Bases: object

propertybuffer_size
is_full()
asyncput(payload)
asyncread()
Stop reading when gets None

sanic.request.parse_multipart_form(body, boundary)
Parse a request body and returns fields and files

Parameters
body – bytes request body

boundary – bytes multipart boundary

Returns
fields (RequestParameters), files (RequestParameters)

sanic.response module
classsanic.response.BaseHTTPResponse
Bases: object

propertycookies
classsanic.response.HTTPResponse(body=None, status=200, headers=None, content_type=None, body_bytes=b'')
Bases: sanic.response.BaseHTTPResponse

body
content_type
propertycookies
headers
output(version='1.1', keep_alive=False, keep_alive_timeout=None)
status
classsanic.response.StreamingHTTPResponse(streaming_fn, status=200, headers=None, content_type='text/plain', chunked=True)
Bases: sanic.response.BaseHTTPResponse

chunked
content_type
get_headers(version='1.1', keep_alive=False, keep_alive_timeout=None)
headers
protocol
status
asyncstream(version='1.1', keep_alive=False, keep_alive_timeout=None)
Streams headers, runs the streaming_fn callback that writes content to the response body, then finalizes the response body.

streaming_fn
asyncwrite(data)
Writes a chunk of data to the streaming response.

Parameters
data – bytes-ish data to be written.

sanic.response.empty(status=204, headers=None)
Returns an empty response to the client.

:param status Response code. :param headers Custom Headers.

asyncsanic.response.file(location, status=200, mime_type=None, headers=None, filename=None, _range=None)
Return a response object with file data.

Parameters
location – Location of file on system.

mime_type – Specific mime_type.

headers – Custom Headers.

filename – Override filename.

_range –

asyncsanic.response.file_stream(location, status=200, chunk_size=4096, mime_type=None, headers=None, filename=None, chunked=True, _range=None)
Return a streaming response object with file data.

Parameters
location – Location of file on system.

chunk_size – The size of each chunk in the stream (in bytes)

mime_type – Specific mime_type.

headers – Custom Headers.

filename – Override filename.

chunked – Enable or disable chunked transfer-encoding

_range –

sanic.response.html(body, status=200, headers=None)
Returns response object with body in html format.

Parameters
body – Response data to be encoded.

status – Response code.

headers – Custom Headers.

sanic.response.json(body, status=200, headers=None, content_type='application/json', dumps=<built-in function dumps>, **kwargs)
Returns response object with body in json format.

Parameters
body – Response data to be serialized.

status – Response code.

headers – Custom Headers.

kwargs – Remaining arguments that are passed to the json encoder.

sanic.response.raw(body, status=200, headers=None, content_type='application/octet-stream')
Returns response object without encoding the body.

Parameters
body – Response data.

status – Response code.

headers – Custom Headers.

content_type – the content type (string) of the response.

sanic.response.redirect(to, headers=None, status=302, content_type='text/html; charset=utf-8')
Abort execution and cause a 302 redirect (by default).

Parameters
to – path or fully qualified URL to redirect to

headers – optional dict of headers to include in the new request

status – status code (int) of the new request, defaults to 302

content_type – the content type (string) of the response

Returns
the redirecting Response

sanic.response.stream(streaming_fn, status=200, headers=None, content_type='text/plain; charset=utf-8', chunked=True)
Accepts an coroutine streaming_fn which can be used to write chunks to a streaming response. Returns a StreamingHTTPResponse.

Example usage:

@app.route("/")
async def index(request):
    async def streaming_fn(response):
        await response.write('foo')
        await response.write('bar')

    return stream(streaming_fn, content_type='text/plain')
Parameters
streaming_fn – A coroutine accepts a response and writes content to that response.

mime_type – Specific mime_type.

headers – Custom Headers.

chunked – Enable or disable chunked transfer-encoding

sanic.response.text(body, status=200, headers=None, content_type='text/plain; charset=utf-8')
Returns response object with body in text format.

Parameters
body – Response data to be encoded.

status – Response code.

headers – Custom Headers.

content_type – the content type (string) of the response

sanic.router module
classsanic.router.Parameter(name, cast)
Bases: tuple

propertycast
Alias for field number 1

propertyname
Alias for field number 0

exceptionsanic.router.ParameterNameConflicts
Bases: Exception

classsanic.router.Route(handler, methods, pattern, parameters, name, uri)
Bases: tuple

propertyhandler
Alias for field number 0

propertymethods
Alias for field number 1

propertyname
Alias for field number 4

propertyparameters
Alias for field number 3

propertypattern
Alias for field number 2

propertyuri
Alias for field number 5

exceptionsanic.router.RouteDoesNotExist
Bases: Exception

exceptionsanic.router.RouteExists
Bases: Exception

classsanic.router.Router
Bases: object

Router supports basic routing with parameters and method checks

Usage:

@sanic.route('/my/url/<my_param>', methods=['GET', 'POST', ...])
def my_route(request, my_param):
    do stuff...
or

@sanic.route('/my/url/<my_param:my_type>', methods['GET', 'POST', ...])
def my_route_with_type(request, my_param: my_type):
    do stuff...
Parameters will be passed as keyword arguments to the request handling function. Provided parameters can also have a type by appending :type to the <parameter>. Given parameter must be able to be type-casted to this. If no type is provided, a string is expected. A regular expression can also be passed in as the type. The argument given to the function will always be a string, independent of the type.

add(uri, methods, handler, host=None, strict_slashes=False, version=None, name=None)
Add a handler to the route list

Parameters
uri – path to match

methods – sequence of accepted method names. If none are provided, any method is allowed

handler – request handler function. When executed, it should provide a response object.

strict_slashes – strict to trailing slash

version – current version of the route or blueprint. See docs for further details.

Returns
Nothing

staticcheck_dynamic_route_exists(pattern, routes_to_check, parameters)
Check if a URL pattern exists in a list of routes provided based on the comparison of URL pattern and the parameters.

Parameters
pattern – URL parameter pattern

routes_to_check – list of dynamic routes either hashable or unhashable routes.

parameters – List of Parameter items

Returns
Tuple of index and route if matching route exists else -1 for index and None for route

find_route_by_view_name
Find a route in the router based on the specified view name.

Parameters
view_name – string of view name to search by

kwargs – additional params, usually for static files

Returns
tuple containing (uri, Route)

get(request)
Get a request handler based on the URL of the request, or raises an error

Parameters
request – Request object

Returns
handler, arguments, keyword arguments

get_supported_methods(url)
Get a list of supported methods for a url and optional host.

Parameters
url – URL string (including host)

Returns
frozenset of supported methods

is_stream_handler(request)
Handler for request is stream or not. :param request: Request object :return: bool

parameter_pattern= re.compile('<(.+?)>')
classmethodparse_parameter_string(parameter_string)
Parse a parameter string into its constituent name, type, and pattern

For example:

parse_parameter_string('<param_one:[A-z]>')` ->
    ('param_one', str, '[A-z]')
Parameters
parameter_string – String to parse

Returns
tuple containing (parameter_name, parameter_type, parameter_pattern)

remove(uri, clean_cache=True, host=None)
routes_always_check= None
routes_dynamic= None
routes_static= None
sanic.router.url_hash(url)
sanic.server module
classsanic.server.AsyncioServer(loop, serve_coro, connections, after_start, before_stop, after_stop)
Bases: object

Wraps an asyncio server with functionality that might be useful to a user who needs to manage the server lifecycle manually.

after_start()
Trigger “after_server_start” events

after_stop()
Trigger “after_server_stop” events

before_stop()
Trigger “before_server_stop” events

close()
connections
is_serving()
loop
serve_coro
server
wait_closed()
classsanic.server.HttpProtocol(*, loop, app, request_handler, error_handler, signal=<sanic.server.Signal object>, connections=None, request_timeout=60, response_timeout=60, keep_alive_timeout=5, request_max_size=None, request_buffer_queue_size=100, request_class=None, access_log=True, keep_alive=True, is_request_stream=False, router=None, state=None, debug=False, **kwargs)
Bases: asyncio.protocols.Protocol

This class provides a basic HTTP implementation of the sanic framework.

access_log
app
bail_out(message, from_error=False)
In case if the transport pipes are closed and the sanic app encounters an error while writing data to the transport pipe, we log the error with proper details.

Parameters
message (str) – Error message to display

from_error (bool) – If the bail out was invoked while handling an exception scenario.

Returns
None

asyncbody_append(body)
cleanup()
This is called when KeepAlive feature is used, it resets the connection in order for it to be able to handle receiving another request on the same connection.

close()
Force close the connection.

close_if_idle()
Close the connection if a request is not being sent or received

Returns
boolean - True if closed, false if staying open

connection_lost(exc)
Called when the connection is lost or closed.

The argument is an exception object or None (the latter meaning a regular EOF is received or the connection was aborted or closed).

connection_made(transport)
Called when a connection is made.

The argument is the transport representing the pipe connection. To receive data, wait for data_received() calls. When the connection is closed, connection_lost() is called.

connections
data_received(data)
Called when some data is received.

The argument is a bytes object.

asyncdrain()
error_handler
execute_request_handler()
Invoke the request handler defined by the sanic.app.Sanic.handle_request() method

Returns
None

expect_handler()
Handler for Expect Header.

headers
is_request_stream
propertykeep_alive
Check if the connection needs to be kept alive based on the params attached to the _keep_alive attribute, Signal.stopped and HttpProtocol.parser.should_keep_alive()

Returns
True if connection is to be kept alive False else

keep_alive_timeout
keep_alive_timeout_callback()
Check if elapsed time since last response exceeds our configured maximum keep alive timeout value and if so, close the transport pipe and let the response writer handle the error.

Returns
None

log_response(response)
Helper method provided to enable the logging of responses in case if the HttpProtocol.access_log is enabled.

Parameters
response (sanic.response.HTTPResponse or sanic.response.StreamingHTTPResponse) – Response generated for the current request

Returns
None

loop
on_body(body)
on_header(name, value)
on_headers_complete()
on_message_complete()
on_url(url)
parser
pause_writing()
Called when the transport’s buffer goes over the high-water mark.

Pause and resume calls are paired – pause_writing() is called once when the buffer goes strictly over the high-water mark (even if subsequent writes increases the buffer size even more), and eventually resume_writing() is called once when the buffer size reaches the low-water mark.

Note that if the buffer size equals the high-water mark, pause_writing() is not called – it must go strictly over. Conversely, resume_writing() is called when the buffer size is equal or lower than the low-water mark. These end conditions are important to ensure that things go as expected when either mark is zero.

NOTE: This is the only Protocol callback that is not called through EventLoop.call_soon() – if it were, it would have no effect when it’s most needed (when the app keeps writing without yielding until pause_writing() is called).

asyncpush_data(data)
request
request_buffer_queue_size
request_class
request_handler
request_max_size
request_timeout
request_timeout_callback()
response_timeout
response_timeout_callback()
resume_writing()
Called when the transport’s buffer drains below the low-water mark.

See pause_writing() for details.

router
signal
state
asyncstream_append()
asyncstream_response(response)
Streams a response to the client asynchronously. Attaches the transport to the response so the response consumer can write to the response as needed.

transport
url
write_error(exception)
write_response(response)
Writes response content synchronously to the transport.

classsanic.server.Signal
Bases: object

stopped= False
sanic.server.serve(host, port, app, request_handler, error_handler, before_start=None, after_start=None, before_stop=None, after_stop=None, debug=False, request_timeout=60, response_timeout=60, keep_alive_timeout=5, ssl=None, sock=None, request_max_size=None, request_buffer_queue_size=100, reuse_port=False, loop=None, protocol=<class 'sanic.server.HttpProtocol'>, backlog=100, register_sys_signals=True, run_multiple=False, run_async=False, connections=None, signal=<sanic.server.Signal object>, request_class=None, access_log=True, keep_alive=True, is_request_stream=False, router=None, websocket_max_size=None, websocket_max_queue=None, websocket_read_limit=65536, websocket_write_limit=65536, state=None, graceful_shutdown_timeout=15.0, asyncio_server_kwargs=None)
Start asynchronous HTTP Server on an individual process.

Parameters
host – Address to host on

port – Port to host on

request_handler – Sanic request handler with middleware

error_handler – Sanic error handler with middleware

before_start – function to be executed before the server starts listening. Takes arguments app instance and loop

after_start – function to be executed after the server starts listening. Takes arguments app instance and loop

before_stop – function to be executed when a stop signal is received before it is respected. Takes arguments app instance and loop

after_stop – function to be executed when a stop signal is received after it is respected. Takes arguments app instance and loop

debug – enables debug output (slows server)

request_timeout – time in seconds

response_timeout – time in seconds

keep_alive_timeout – time in seconds

ssl – SSLContext

sock – Socket for the server to accept connections from

request_max_size – size in bytes, None for no limit

reuse_port – True for multiple workers

loop – asyncio compatible event loop

protocol – subclass of asyncio protocol class

run_async – bool: Do not create a new event loop for the server, and return an AsyncServer object rather than running it

request_class – Request class to use

access_log – disable/enable access log

websocket_max_size – enforces the maximum size for incoming messages in bytes.

websocket_max_queue – sets the maximum length of the queue that holds incoming messages.

websocket_read_limit – sets the high-water limit of the buffer for incoming bytes, the low-water limit is half the high-water limit.

websocket_write_limit – sets the high-water limit of the buffer for outgoing bytes, the low-water limit is a quarter of the high-water limit.

is_request_stream – disable/enable Request.stream

request_buffer_queue_size – streaming request buffer queue size

router – Router object

graceful_shutdown_timeout – How long take to Force close non-idle connection

asyncio_server_kwargs – key-value args for asyncio/uvloop create_server method

Returns
Nothing

sanic.server.serve_multiple(server_settings, workers)
Start multiple server processes simultaneously. Stop on interrupt and terminate signals, and drain connections when complete.

Parameters
server_settings – kw arguments to be passed to the serve function

workers – number of workers to launch

stop_event – if provided, is used as a stop signal

Returns
sanic.server.trigger_events(events, loop)
Trigger event callbacks (functions or async)

Parameters
events – one or more sync or async functions to execute

loop – event loop

sanic.static module
sanic.static.register(app, uri, file_or_directory, pattern, use_modified_since, use_content_range, stream_large_files, name='static', host=None, strict_slashes=None, content_type=None)
Register a static directory handler with Sanic by adding a route to the router and registering a handler.

Parameters
app – Sanic

file_or_directory – File or directory path to serve from

uri – URL to serve from

pattern – regular expression used to match files in the URL

use_modified_since – If true, send file modified time, and return not modified if the browser’s matches the server’s

use_content_range – If true, process header for range requests and sends the file part that is requested

stream_large_files – If true, use the file_stream() handler rather than the file() handler to send the file If this is an integer, this represents the threshold size to switch to file_stream()

name – user defined name used for url_for

content_type – user defined content type for header

sanic.testing module
classsanic.testing.SanicASGIDispatch(app: Callable, raise_app_exceptions: bool = True, root_path: str = '', client: Tuple[str, int] = ('127.0.0.1', 123))
Bases: httpx.dispatch.asgi.ASGIDispatch

classsanic.testing.SanicASGITestClient(app, base_url: str = 'http://mockserver', suppress_exceptions: bool = False)
Bases: httpx.client.Client

asyncrequest(method, url, gather_request=True, *args, **kwargs)
asyncwebsocket(uri, subprotocols=None, *args, **kwargs)
classsanic.testing.SanicTestClient(app, port=42101, host='127.0.0.1')
Bases: object

delete(*args, **kwargs)
get(*args, **kwargs)
get_new_session()
head(*args, **kwargs)
options(*args, **kwargs)
patch(*args, **kwargs)
post(*args, **kwargs)
put(*args, **kwargs)
websocket(*args, **kwargs)
classsanic.testing.TestASGIApp
Bases: sanic.asgi.ASGIApp

asyncsanic.testing.app_call_with_return(self, scope, receive, send)
sanic.views module
classsanic.views.CompositionView
Bases: object

Simple method-function mapped view for the sanic. You can add handler functions to methods (get, post, put, patch, delete) for every HTTP method you want to support.

For example:
view = CompositionView() view.add([‘GET’], lambda request: text(‘I am get method’)) view.add([‘POST’, ‘PUT’], lambda request: text(‘I am post/put method’))

etc.

If someone tries to use a non-implemented method, there will be a 405 response.

add(methods, handler, stream=False)
classsanic.views.HTTPMethodView
Bases: object

Simple class based implementation of view for the sanic. You should implement methods (get, post, put, patch, delete) for the class to every HTTP method you want to support.

For example:

class DummyView(HTTPMethodView):
    def get(self, request, *args, **kwargs):
        return text('I am get method')
    def put(self, request, *args, **kwargs):
        return text('I am put method')
etc.

If someone tries to use a non-implemented method, there will be a 405 response.

If you need any url params just mention them in method definition:

class DummyView(HTTPMethodView):
    def get(self, request, my_param_here, *args, **kwargs):
        return text('I am get method with %s' % my_param_here)
To add the view into the routing you could use
app.add_route(DummyView.as_view(), ‘/’)

app.route(‘/’)(DummyView.as_view())

To add any decorator you could set it into decorators variable

classmethodas_view(*class_args, **class_kwargs)
Return view function for use with the routing system, that dispatches request to appropriate handler method.

decorators= []
dispatch_request(request, *args, **kwargs)
sanic.views.stream(func)
sanic.websocket module
exceptionsanic.websocket.ConnectionClosed(code, reason)
Bases: websockets.exceptions.InvalidState

Exception raised when trying to read or write on a closed connection.

Provides the connection close code and reason in its code and reason attributes respectively.

classsanic.websocket.WebSocketProtocol(*args, websocket_timeout=10, websocket_max_size=None, websocket_max_queue=None, websocket_read_limit=65536, websocket_write_limit=65536, **kwargs)
Bases: sanic.server.HttpProtocol

access_log
app
connection_lost(exc)
Called when the connection is lost or closed.

The argument is an exception object or None (the latter meaning a regular EOF is received or the connection was aborted or closed).

connections
data_received(data)
Called when some data is received.

The argument is a bytes object.

error_handler
headers
is_request_stream
keep_alive_timeout
keep_alive_timeout_callback()
Check if elapsed time since last response exceeds our configured maximum keep alive timeout value and if so, close the transport pipe and let the response writer handle the error.

Returns
None

loop
parser
request
request_buffer_queue_size
request_class
request_handler
request_max_size
request_timeout
request_timeout_callback()
response_timeout
response_timeout_callback()
router
signal
state
transport
url
asyncwebsocket_handshake(request, subprotocols=None)
write_response(response)
Writes response content synchronously to the transport.

classsanic.websocket.WebSocketConnection(send: Callable[MutableMapping[str, Any], Awaitable[None]], receive: Callable[Awaitable[MutableMapping[str, Any]]])
Bases: object

asyncaccept() → None
asyncclose() → None
asyncreceive(*args, **kwargs) → Optional[str]
asyncrecv(*args, **kwargs) → Optional[str]
asyncsend(data: Union[str, bytes], *args, **kwargs) → None
sanic.worker module
Module contents
classsanic.Sanic(name=None, router=None, error_handler=None, load_env=True, request_class=None, strict_slashes=False, log_config=None, configure_logging=True)
Bases: object

add_route(handler, uri, methods=frozenset({'GET'}), host=None, strict_slashes=None, version=None, name=None, stream=False)
A helper method to register class instance or functions as a handler to the application url routes.

Parameters
handler – function or class instance

uri – path of the URL

methods – list or tuple of methods allowed, these are overridden if using a HTTPMethodView

host –

strict_slashes –

version –

name – user defined route name for url_for

stream – boolean specifying if the handler is a stream handler

Returns
function or class instance

add_task(task)
Schedule a task to run later, after the loop has started. Different from asyncio.ensure_future in that it does not also return a future, and the actual ensure_future call is delayed until before server start.

Parameters
task – future, couroutine or awaitable

add_websocket_route(handler, uri, host=None, strict_slashes=None, subprotocols=None, name=None)
A helper method to register a function as a websocket route.

Parameters
handler – a callable function or instance of a class that can handle the websocket request

host – Host IP or FQDN details

uri – URL path that will be mapped to the websocket handler handler

strict_slashes – If the API endpoint needs to terminate with a “/” or not

subprotocols – Subprotocols to be used with websocket handshake

name – A unique name assigned to the URL so that it can be used with url_for()

Returns
Objected decorated by websocket()

propertyasgi_client
blueprint(blueprint, **options)
Register a blueprint on the application.

Parameters
blueprint – Blueprint object or (list, tuple) thereof

options – option dictionary with blueprint defaults

Returns
Nothing

converted_response_type(response)
No implementation provided.

asynccreate_server(host: Optional[str] = None, port: Optional[int] = None, debug: bool = False, ssl: Union[dict, ssl.SSLContext, None] = None, sock: Optional[socket.socket] = None, protocol: Type[asyncio.protocols.Protocol] = None, backlog: int = 100, stop_event: Any = None, access_log: Optional[bool] = None, return_asyncio_server=False, asyncio_server_kwargs=None) → Optional[sanic.server.AsyncioServer]
Asynchronous version of run().

This method will take care of the operations necessary to invoke the before_start events via trigger_events() method invocation before starting the sanic app in Async mode.

Note

This does not support multiprocessing and is not the preferred way to run a Sanic application.

Parameters
host (str) – Address to host on

port (int) – Port to host on

debug (bool) – Enables debug output (slows server)

ssl (SSLContext or dict) – SSLContext, or location of certificate and key for SSL encryption of worker(s)

sock (socket) – Socket for the server to accept connections from

protocol (type[Protocol]) – Subclass of asyncio Protocol class

backlog (int) – a number of unaccepted connections that the system will allow before refusing new connections

stop_event (None) – event to be triggered before stopping the app - deprecated

access_log (bool) – Enables writing access logs (slows server)

return_asyncio_server (bool) – flag that defines whether there’s a need to return asyncio.Server or start it serving right away

asyncio_server_kwargs (dict) – key-value arguments for asyncio/uvloop create_server method

Returns
AsyncioServer if return_asyncio_server is true, else Nothing

delete(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the DELETE HTTP method

Parameters
uri – URL to be tagged to DELETE method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

enable_websocket(enable=True)
Enable or disable the support for websocket.

Websocket is enabled automatically if websocket routes are added to the application.

exception(*exceptions)
Decorate a function to be registered as a handler for exceptions

Parameters
exceptions – exceptions

Returns
decorated function

get(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the GET HTTP method

Parameters
uri – URL to be tagged to GET method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

asynchandle_request(request, write_callback, stream_callback)
Take a request from the HTTP Server and return a response object to be sent back The HTTP Server only expects a response object, so exception handling must be done here

Parameters
request – HTTP Request object

write_callback – Synchronous response function to be called with the response as the only argument

stream_callback – Coroutine that handles streaming a StreamingHTTPResponse if produced by the handler.

Returns
Nothing

head(uri, host=None, strict_slashes=None, version=None, name=None)
listener(event)
Create a listener from a decorated function.

Parameters
event – event to listen to

propertyloop
Synonymous with asyncio.get_event_loop().

Only supported when using the app.run method.

middleware(middleware_or_request)
Decorate and register middleware to be called before a request. Can either be called as @app.middleware or @app.middleware(‘request’)

Param
middleware_or_request: Optional parameter to use for identifying which type of middleware is being registered.

options(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the OPTIONS HTTP method

Parameters
uri – URL to be tagged to OPTIONS method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

patch(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the PATCH HTTP method

Parameters
uri – URL to be tagged to PATCH method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

post(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the POST HTTP method

Parameters
uri – URL to be tagged to POST method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

put(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the PUT HTTP method

Parameters
uri – URL to be tagged to PUT method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

register_blueprint(*args, **kwargs)
Proxy method provided for invoking the blueprint() method

Note

To be deprecated in 1.0. Use blueprint() instead.

Parameters
args – Blueprint object or (list, tuple) thereof

kwargs – option dictionary with blueprint defaults

Returns
None

register_listener(listener, event)
Register the listener for a given event.

Parameters
listener – callable i.e. setup_db(app, loop)

event – when to register listener i.e. ‘before_server_start’

Returns
listener

register_middleware(middleware, attach_to='request')
Register an application level middleware that will be attached to all the API URLs registered under this application.

This method is internally invoked by the middleware() decorator provided at the app level.

Parameters
middleware – Callback method to be attached to the middleware

attach_to – The state at which the middleware needs to be invoked in the lifecycle of an HTTP Request. request - Invoke before the request is processed response - Invoke before the response is returned back

Returns
decorated method

register_named_middleware(middleware, route_names, attach_to='request')
remove_route(uri, clean_cache=True, host=None)
This method provides the app user a mechanism by which an already existing route can be removed from the Sanic object

Warning

remove_route is deprecated in v19.06 and will be removed from future versions.

Parameters
uri – URL Path to be removed from the app

clean_cache – Instruct sanic if it needs to clean up the LRU route cache

host – IP address or FQDN specific to the host

Returns
None

route(uri, methods=frozenset({'GET'}), host=None, strict_slashes=None, stream=False, version=None, name=None)
Decorate a function to be registered as a route

Parameters
uri – path of the URL

methods – list or tuple of methods allowed

host –

strict_slashes –

stream –

version –

name – user defined route name for url_for

Returns
tuple of routes, decorated function

run(host: Optional[str] = None, port: Optional[int] = None, debug: bool = False, ssl: Union[dict, ssl.SSLContext, None] = None, sock: Optional[socket.socket] = None, workers: int = 1, protocol: Type[asyncio.protocols.Protocol] = None, backlog: int = 100, stop_event: Any = None, register_sys_signals: bool = True, access_log: Optional[bool] = None, **kwargs: Any) → None
Run the HTTP Server and listen until keyboard interrupt or term signal. On termination, drain connections before closing.

Parameters
host (str) – Address to host on

port (int) – Port to host on

debug (bool) – Enables debug output (slows server)

ssl (SSLContext or dict) – SSLContext, or location of certificate and key for SSL encryption of worker(s)

sock (socket) – Socket for the server to accept connections from

workers (int) – Number of processes received before it is respected

protocol (type[Protocol]) – Subclass of asyncio Protocol class

backlog (int) – a number of unaccepted connections that the system will allow before refusing new connections

stop_event (None) – event to be triggered before stopping the app - deprecated

register_sys_signals (bool) – Register SIG* events

access_log (bool) – Enables writing access logs (slows server)

Returns
Nothing

static(uri, file_or_directory, pattern='/?.+', use_modified_since=True, use_content_range=False, stream_large_files=False, name='static', host=None, strict_slashes=None, content_type=None)
Register a root to serve files from. The input can either be a file or a directory. This method will enable an easy and simple way to setup the Route necessary to serve the static files.

Parameters
uri – URL path to be used for serving static content

file_or_directory – Path for the Static file/directory with static files

pattern – Regex Pattern identifying the valid static files

use_modified_since – If true, send file modified time, and return not modified if the browser’s matches the server’s

use_content_range – If true, process header for range requests and sends the file part that is requested

stream_large_files – If true, use the StreamingHTTPResponse.file_stream() handler rather than the HTTPResponse.file() handler to send the file. If this is an integer, this represents the threshold size to switch to StreamingHTTPResponse.file_stream()

name – user defined name used for url_for

host – Host IP or FQDN for the service to use

strict_slashes – Instruct Sanic to check if the request URLs need to terminate with a /

content_type – user defined content type for header

Returns
None

stop()
This kills the Sanic

propertytest_client
asynctrigger_events(events, loop)
Trigger events (functions or async) :param events: one or more sync or async functions to execute :param loop: event loop

url_for(view_name: str, **kwargs)
Build a URL based on a view name and the values provided.

In order to build a URL, all request parameters must be supplied as keyword arguments, and each parameter must pass the test for the specified parameter type. If these conditions are not met, a URLBuildError will be thrown.

Keyword arguments that are not request parameters will be included in the output URL’s query string.

Parameters
view_name – string referencing the view name

**kwargs – keys and values that are used to build request parameters and query string arguments.

Returns
the built URL

Raises:
URLBuildError

websocket(uri, host=None, strict_slashes=None, subprotocols=None, name=None)
Decorate a function to be registered as a websocket route

Parameters
uri – path of the URL

host – Host IP or FQDN details

strict_slashes – If the API endpoint needs to terminate with a “/” or not

subprotocols – optional list of str with supported subprotocols

name – A unique name assigned to the URL so that it can be used with url_for()

Returns
tuple of routes, decorated function

classsanic.Blueprint(name, url_prefix=None, host=None, version=None, strict_slashes=None)
Bases: object

add_route(handler, uri, methods=frozenset({'GET'}), host=None, strict_slashes=None, version=None, name=None, stream=False)
Create a blueprint route from a function.

Parameters
handler – function for handling uri requests. Accepts function, or class instance with a view_class method.

uri – endpoint at which the route will be accessible.

methods – list of acceptable HTTP methods.

host – IP Address of FQDN for the sanic server to use.

strict_slashes – Enforce the API urls are requested with a training /

version – Blueprint Version

name – user defined route name for url_for

stream – boolean specifying if the handler is a stream handler

Returns
function or class instance

add_websocket_route(handler, uri, host=None, version=None, name=None)
Create a blueprint websocket route from a function.

Parameters
handler – function for handling uri requests. Accepts function, or class instance with a view_class method.

uri – endpoint at which the route will be accessible.

host – IP Address of FQDN for the sanic server to use.

version – Blueprint Version

name – Unique name to identify the Websocket Route

Returns
function or class instance

delete(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the DELETE HTTP method

Parameters
uri – URL to be tagged to DELETE method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

exception(*args, **kwargs)
This method enables the process of creating a global exception handler for the current blueprint under question.

Parameters
args – List of Python exceptions to be caught by the handler

kwargs – Additional optional arguments to be passed to the exception handler

:return a decorated method to handle global exceptions for any
route registered under this blueprint.

get(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the GET HTTP method

Parameters
uri – URL to be tagged to GET method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

staticgroup(*blueprints, url_prefix='')
Create a list of blueprints, optionally grouping them under a general URL prefix.

Parameters
blueprints – blueprints to be registered as a group

url_prefix – URL route to be prepended to all sub-prefixes

head(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the HEAD HTTP method

Parameters
uri – URL to be tagged to HEAD method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

listener(event)
Create a listener from a decorated function.

Parameters
event – Event to listen to.

middleware(*args, **kwargs)
Create a blueprint middleware from a decorated function.

Parameters
args – Positional arguments to be used while invoking the middleware

kwargs – optional keyword args that can be used with the middleware.

options(uri, host=None, strict_slashes=None, version=None, name=None)
Add an API URL under the OPTIONS HTTP method

Parameters
uri – URL to be tagged to OPTIONS method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

patch(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the PATCH HTTP method

Parameters
uri – URL to be tagged to PATCH method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

post(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the POST HTTP method

Parameters
uri – URL to be tagged to POST method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

put(uri, host=None, strict_slashes=None, stream=False, version=None, name=None)
Add an API URL under the PUT HTTP method

Parameters
uri – URL to be tagged to PUT method of HTTP

host – Host IP or FQDN for the service to use

strict_slashes – Instruct sanic.app.Sanic to check if the request URLs need to terminate with a /

version – API Version

name – Unique name that can be used to identify the Route

Returns
Object decorated with route() method

register(app, options)
Register the blueprint to the sanic app.

Parameters
app – Instance of sanic.app.Sanic class

options – Options to be used while registering the blueprint into the app. url_prefix - URL Prefix to override the blueprint prefix

route(uri, methods=frozenset({'GET'}), host=None, strict_slashes=None, stream=False, version=None, name=None)
Create a blueprint route from a decorated function.

Parameters
uri – endpoint at which the route will be accessible.

methods – list of acceptable HTTP methods.

host – IP Address of FQDN for the sanic server to use.

strict_slashes – Enforce the API urls are requested with a training /

stream – If the route should provide a streaming support

version – Blueprint Version

name – Unique name to identify the Route

:return a decorated method that when invoked will return an object
of type FutureRoute

static(uri, file_or_directory, *args, **kwargs)
Create a blueprint static route from a decorated function.

Parameters
uri – endpoint at which the route will be accessible.

file_or_directory – Static asset.

websocket(uri, host=None, strict_slashes=None, version=None, name=None)
Create a blueprint websocket route from a decorated function.

Parameters
uri – endpoint at which the route will be accessible.

host – IP Address of FQDN for the sanic server to use.

strict_slashes – Enforce the API urls are requested with a training /

version – Blueprint Version

name – Unique name to identify the Websocket Route

