console.log('Problem Solving Q:23 ');

/*parseQueryString   */

/*  
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/

function parseQueryString(input) {
  // YOUR CODE HERE
  const URL = input

  const urlArr = URL.split(".com?")
  const splc = urlArr.splice(urlArr.indexOf("http:"), 1)

  const splt2nd = splc[0].split("&")

  const split3rd = []
  splt2nd.forEach(element => {
    split3rd.push(element.split("="))
  });

  return split3rd
}



/*
Examples:
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/