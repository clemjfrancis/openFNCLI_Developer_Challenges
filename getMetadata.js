/*
 🏆 Challenge: Fetch Covid-19 metadata​

 Using the disease.sh API, write an operation that returns all covid-19 metadata.
 TIP
 https://disease.sh/v3/covid-19/ as your baseUrl in state.configuration
 Validate your output: there are a lot of ways you might choose to format or display this data. Share your results with your administrator for feedback.
*/
get('historical/all?lastdays=all');
fn(state => {
    console.log(state.response)
    console.log(`Metadata: \n Response: ${state.response.status} (${state.response.statusText}) \n Headers: \n ${Object.entries(state.response.headers).map(([key, value]) => `\t ${key[0].toUpperCase()}${key.slice(1)}: ${value}`).join('\n')}`);
});

/*
Output:
Metadata:
 Response: 200 (OK)
 Headers:
         Date: Mon, 06 Mar 2023 18:04:58 GMT
         Content-type: application/json; charset=utf-8
         Transfer-encoding: chunked
         Connection: close
         X-powered-by: Express
         Access-control-allow-origin: *
         Etag: W/"e7e6-1i2g2FhVtkXZqmDT7KlSm/8fCTQ"
         Ng-cache-status: HIT
         Cf-cache-status: DYNAMIC
         Server: cloudflare
         Cf-ray: 7a3c86327c5909f6-MIA
         Alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400

 */