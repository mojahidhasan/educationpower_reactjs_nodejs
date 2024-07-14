import http from "node:http";
import { readFile } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { config } from "dotenv";
import { mimeTypes } from "./constants.js";

config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Cross-Origin-Resource-Policy": "cross-origin",
};
const website_directory = path.join(__dirname, "../client/build");

const server = http.createServer(async (req, res) => {
  //heathcheck route here
  if (req.url === "/healthz" && req.method === "GET") {
    res.statusCode = 200;
    res.end("OK");
  }
  //staic assets routes here
  if (
    req.method === "GET" &&
    req.url.startsWith("/build/static") &&
    !req.url.startsWith("/images")
  ) {
    const extname = String(path.extname(req.url)).toLowerCase();
    const contentType = mimeTypes[extname] || "application/octet-stream";

    const filePath = path.join(
      website_directory,
      req.url.replace("/build", "")
    );

    readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {
        "content-type": contentType,
        ...cors,
      });
      res.end(data);
    });
  }

  if (req.url.startsWith("/images") && req.method === "GET") {
    const extname = String(path.extname(req.url)).toLowerCase();
    const contentType = mimeTypes[extname] || "application/octet-stream";

    readFile(path.join(__dirname, req.url), (err, data) => {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {
        "content-type": contentType,
        ...cors,
      });
      res.end(data);
    });
  }

  //home page
  if (req.url === "/" && req.method === "GET") {
    let API_URL;
    if (req.headers["x-forwarded-proto"] === "https") {
      API_URL = `https://${req.headers.host}`;
    } else {
      API_URL = `http://${req.headers.host}`;
    }
    readFile(
      path.join(__dirname, "../client/build/index.html"),
      "utf-8",
      (err, data) => {
        if (err) {
          res.writeHead(404, {
            "content-type": "text/plain",
            ...cors,
          });
          res.end(`Production only, please Run "npm run production"`);

          return;
        }

        res.writeHead(200, {
          "content-type": "text/html",
          ...cors,
        });

        data = data.replace("(API_URL)", API_URL);
        res.end(data);
      }
    );
  }

  //api routes
  if (/\/courses/.test(req.url) && req.method === "GET") {
    const fullUrl = new URL(req.url, `http://${req.headers.host}`);
    const { searchParams } = fullUrl;

    if (searchParams.size === 0) {
      readFile("./data/courses.json", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, {
            "content-type": "application/json",
            ...cors,
          });
          res.end(JSON.stringify({ message: "internal server error" }));
        }

        res.writeHead(200, {
          "content-type": "application/json",
          ...cors,
        });
        res.end(data);
      });
    }
    if (searchParams.size === 2) {
      let limit = Math.abs(Number(searchParams.get("limit")));

      const from = Math.abs(Number(searchParams.get("from")));

      if (Number.isNaN(limit) && Number.isNaN(from)) {
        res.writeHead(406, {
          "content-type": "application/json",
          ...cors,
        });
        res.end(
          JSON.stringify({
            message: "param value is not acceptable, use integer",
          })
        );
      }

      if (searchParams.has("limit") && searchParams.has("from")) {
        if (limit < 1) limit = 6;

        readFile(
          path.join(__dirname, "./data/courses.json"),
          "utf-8",
          async (err, data) => {
            if (err) {
              res.writeHead(500, {
                "content-type": "application/json",
                ...cors,
              });
              res.end(JSON.stringify({ message: "internal server error" }));
            }
            const parseItToObj = JSON.parse(data);
            const requestedData = parseItToObj.slice(from, from + limit);
            res.writeHead(200, {
              "content-type": "application/json",
              ...cors,
            });
            res.end(JSON.stringify(requestedData));
          }
        );
      } else {
        res.writeHead(406, {
          "content-type": "application/json",
          ...cors,
        });

        res.end(
          JSON.stringify({
            message: "invalid params",
          })
        );
      }
    }
  }
});

server.listen(process.env.PORT || 4000, () => {
  console.log("listening on port " + process.env.PORT || 4000);
});
