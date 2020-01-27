import WS from "jest-websocket-mock";
export { WebSocket as default } from "mock-socket";


  test("the mock server sends messages to connected clients", async () => {
    const server = new WS("ws://one-chat.eu-4.evennode.com");
    const client1 = new WebSocket("ws://one-chat.eu-4.evennode.com");
    await server.connected;
    const client2 = new WebSocket("ws://one-chat.eu-4.evennode.com");
    await server.connected;
   
    const messages = { client1: [], client2: [] };
    client1.onmessage = e => {
      messages.client1.push(e.data);
    };
    client2.onmessage = e => {
      messages.client2.push(e.data);
    };
   
    server.send("hello everyone");
    expect(messages).toEqual({
      client1: ["hello everyone"],
      client2: ["hello everyone"],
    });
  });
  
  