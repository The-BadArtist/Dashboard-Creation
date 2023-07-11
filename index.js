// import { PowerBIClient } from "powerbi-client";

const express = require('express');
const cors = require('cors');
const { Client } = require('pg');
const path = require('path');
// const { PowerBIClient } = require('powerbi-client');



/**
 * ! Important Variables DO NOT DELETE
 */

const app = express();
const port = 3000;
const host = "localhost";

/**
 * Database connection and client
 */

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin",
    database: "msipp_form"
});

/**
 * Power BI Client 
 */

// const powerbi = new PowerBIClient("https://api.powerbi.com/v1.0", {
//   accessToken: "<your-access-token>",
//   tenantId: "<your-tenant-id>",
// });

// const report = await client.getReport("<report-id>");

// const dashboard = await client.getDashboard("<dashboard-id>");

// const embedUrl = report.getEmbedUrl();




/**
 * Middleware
 */

app.set("view engine", "ejs");

app.use(cors()); // Allow request from any IP

app.use(express.static(path.join(__dirname, 'public')));

const middle = express.urlencoded({
    extended: false,
    parameterLimit: 17
});

const query = async () => {
    await client.connect();
    const result = await client.query(``);
    
    client.end();
}

query();


app.listen(port, () => {
    console.log(`App is listening at http://${host}:${port}`);
})

