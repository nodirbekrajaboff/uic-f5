import { Elysia } from "elysia";

const app = new Elysia().get("/", () => {
  return "HI";
});
app
  .get("/chat", () => {
    return "Bu oddiy chat yo'li. GET methodi orqali kirdiz";
  })
  .post("/chat", () => {
    return "Bu oddiy chat yo'li. POST methodi orqali kirdiz";
  })

  .ws("/chat", {
    open(ws) {},
    close(ws, code, reason) {},
    message(ws, message) {},
  })
  .listen(4040);