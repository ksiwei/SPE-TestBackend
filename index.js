const server = require("server");
const { get, post } = server.router;
const { render, json } = server.reply;

function generateRandomLocale() {
  var locales = ["FR", "DE", "DK", "CA", "US"];

  var randomNumber = Math.floor(Math.random() * locales.length);
  return locales[randomNumber];
}

//Shipping Request/Response format
let shippingPreference = {
  option: "YARD"
};

let serverOptions = {
  port: 8080,
  parser: {
    json: { limit: "1mb" },
  },
  security: { csrf: false },
};

// Launch server with options and a couple of routes
server(serverOptions, [
  get("/locale", (ctx) => json({ locale: generateRandomLocale() })),
  post("/shippingPreference", async (ctx) => {
    let shippingOption = ctx.data;

    shipping = shippingOption;
    return "ok";
  }),
  get("/shippingPreference", (ctx) => json(shipping)),
]);
