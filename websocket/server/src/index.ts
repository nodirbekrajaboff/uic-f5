import { Elysia } from "elysia";

const users = new Map();

const app = new Elysia();
app
  .ws("/chat", {
    idleTimeout: 60 * 5,
    open(ws) {
      ws.subscribe("room");
      console.log("Client connected");
    },
    close(ws, code, reason) {
      let disconnectedUser = null;

      for (const [id, userData] of users.entries()) {
        if (userData.socket === ws) {
          disconnectedUser = userData.fullName;
          users.delete(id);
          break;
        }
      }

      if (disconnectedUser) {
        app.server?.publish(
          "room",
          JSON.stringify({
            type: "system",
            message: `${disconnectedUser} left the chat`,
          })
        );

        console.log(`User disconnected: ${disconnectedUser}`);
      }
    },
    message(ws, message) {
      try {
        const parsedMessage = message as any;

        if (parsedMessage.type === "join") {
          const fullName = parsedMessage.value;
          const userId = Math.random().toString(36).substring(2, 15);

          users.set(userId, {
            fullName,
            socket: ws,
          });

          console.log(`User joined: ${fullName}`);

          ws.publish(
            "room",
            JSON.stringify({
              type: "system",
              message: `${fullName} joined the chat`,
            })
          );
        } else if (parsedMessage.type === "message") {
          ws.publish("room", JSON.stringify(message));
        }
      } catch (error) {
        console.error("Error processing message:", error);
      }
    },
  })
  .listen(4040);

console.log("WebSocket server running on port 4040");
