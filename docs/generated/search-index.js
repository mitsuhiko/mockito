var searchIndex = {};
searchIndex["mockito"] = {"doc":"Mockito is a library for creating HTTP mocks to be used in integration tests or for offline work. It runs an HTTP server on your local port 1234 which delivers, creates and remove the mocks.","items":[[3,"Mock","mockito","Stores information about a mocked request. Should be initialized via `mockito::mock()`.",null,null],[4,"Matcher","","Allows matching the request path or headers in multiple ways: matching the exact value, matching any value (as long as it is present), matching by regular expression or checking that a particular header is missing.",null,null],[13,"Exact","","Matches the exact path or header value. There's also an implementation of `From<&str>` to keep things simple and backwards compatible.",0,null],[13,"Regex","","Matches a path or header value by a regular expression.",0,null],[13,"JSON","","Matches a specified JSON body",0,null],[13,"Any","","Matches any path or any header value.",0,null],[13,"Missing","","Checks that a header is not present in the request.",0,null],[5,"mock","","Initializes a mock for the provided `method` and `path`.",null,{"inputs":[{"name":"str"},{"name":"p"}],"output":{"name":"mock"}}],[5,"reset","","Removes all the mocks stored on the server.",null,{"inputs":[],"output":null}],[5,"start","","",null,{"inputs":[],"output":null}],[17,"SERVER_ADDRESS","","Points to the address the mock server is running at. Can be used with `std::net::TcpStream`.",null,null],[17,"SERVER_URL","","Points to the URL the mock server is running at.",null,null],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"matcher"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"matcher"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"matcher"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"str"}],"output":{"name":"matcher"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"mock"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"mock"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"mock"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"match_header","","Allows matching a particular request header when responding with a mock.",1,{"inputs":[{"name":"self"},{"name":"str"},{"name":"m"}],"output":{"name":"self"}}],[11,"match_body","","Allows matching a particular request body when responding with a mock.",1,{"inputs":[{"name":"self"},{"name":"m"}],"output":{"name":"self"}}],[11,"with_status","","Sets the status code of the mock response. The default status code is 200.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"with_header","","Sets a header of the mock response.",1,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"}],"output":{"name":"self"}}],[11,"with_body","","Sets the body of the mock response. Its `Content-Length` is handled automatically.",1,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"self"}}],[11,"with_body_from_file","","Sets the body of the mock response from the contents of a file stored under `path`. Its `Content-Length` is handled automatically.",1,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"self"}}],[11,"expect","","Sets the expected amount of requests that this mock is supposed to receive. This is only enforced when calling the `assert` method. Defaults to 1 request.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"assert","","Asserts that the expected amount of requests (defaults to 1 request) were performed.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"create","","Registers the mock to the server - your mock will be served only after calling this method.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"drop","","",1,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[4,"Matcher"],[3,"Mock"]]};
initSearch(searchIndex);
