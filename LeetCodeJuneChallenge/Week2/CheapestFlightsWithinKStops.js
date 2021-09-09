/*There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.
Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.
Example 1:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
 */
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let graph = {} // {from: { to: price }, {to: price}}
    
    for (let [source, destination, price] of flights){
        if (!graph.hasOwnProperty(source)) {
            graph[source] = {}
        }
        graph[source][destination] = price
    }

    let queue = [[0,src,0]]
    
    while (queue.length ) {     
        let [price, city, connections] = queue.shift()
        if (city == dst) return price
        if (connections > K) continue
        
        if (graph[city]) {
            for (let nextStops in graph[city]) {
                let cost = graph[city][nextStops]
                queue.push([cost + price, nextStops, connections + 1])
            }
        }
        queue.sort((a,b) => a[0]-b[0])
        
    }
    return -1
}