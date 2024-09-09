import * as BunnySDK from "https://esm.sh/@bunny.net/edgescript-sdk@0.10.0";
import sample from "../assets/sample.json" with { type: "json" };

console.log("Starting server...");
const listener = BunnySDK.net.tcp.unstable_new();

console.log("Listening on: ", BunnySDK.net.tcp.toString(listener));
BunnySDK.net.http.serve(
  (req: Request): Response | Promise<Response> => {
    console.log(`[INFO]: ${req.method} - ${req.url}`);
    const json = JSON.stringify(sample);
    return new Response(json, {
      headers: {
        "content-type": "application/json"
      }
    });
  },
);
