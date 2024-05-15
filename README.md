Cache
time complexity to search in array => O(n);
bcoz we need to iterate array atleast once to search for an element i.e linear search

array.indexOf() / array.includes()  => O(n) time complexity


if it was object then search/ find key in object/map/hashmap will take time complexity of O(1);

{
    i:
    ip:
    iph:
    iphone:
}

O(1) <<<<< O(n)

new Map() class even more optimized than searching inside object 


<!-- LRU CACHE -->

<!-- least recently used restrict cache size to store only 100 keys as soon as object length becomes 100 start removing from the top to not bloat ur state -->


<!-- n level nested comments requires tree and recursion knowledge-->



challenges in live chat 
- get data live 
- update the ui conmtinuosly such a way that it doesnt freeze ui 


data(live)
- "websockets" - 2 WAY CONNECTION ESTABLISHED HANDSHAKE BETWEEN SERVER AND UI 
- ONCE HANDSHAKE HAS BEEN ESTABLISHED U CAN QUICKLY SEND DATA FROM EITHER SIDE - ITS A BIDIRECTIONAL DATA FLOW
- U CAN SEND DATA FROM UI TO BACKEND ALSO AND BACKEND TO UI ALSO 
-AS SOON AS U START APPLICATION A WEBSOCKET CONNECTION IS ESTABLISHED AND IMMEDIATELY U CAN SEND DATA FROM BOTH SIDES 
- no regular intervals in websockets (data can come in 1st ms 2nd set of data came in 20 ms later 3rd set of data came in 1st minute ...)


WEBSOCKETS => 2 servers (frontend and backend) connect to each other they can send data anytime they want to , initial connection takes a lil time . once a connection is made now data can be send from any direction and can send data whenevr u want to . websocket connection is heavy .... ex : whatsapp , instagram , messenger , zerodha,gro5ww(trading apps/stockmarket apps) very real time data needed at every millisecond 

API POLLING => data flow is unidirectional . if we have ui and backend ui will keep polling data from backend after 1 second / 10 second 
check after 10 second whether data come in or not so we poll data ...ex :gmail (we dont exactly need very real time for email . even if ui takes data from backend after every 10 sec it is ok )






- "API POLLING" 
- HERE UI REQUEST DATA FROM SERVER . 
- DATA FLOWS FROM SERVER TO UI 
- ITS ONE DIRECTIONAL 
- AFTER AN INTERVAL it will poll data from server 



