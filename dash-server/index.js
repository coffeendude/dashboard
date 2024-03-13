import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import KPI from "./models/KPI.js";
import { kpis, products, transactions } from "./data/data.js";


/* CONFIGURATIONS */ 
dotenv.config();
const app = express();
app.use(express.json());
// This is a middleware that will help us log the requests that are coming in to the server
app.use(helmet());
/* The crossOriginResourcePolicy middleware will set the Cross-Origin-Resource-Policy header to the value 
specified in the policy option. This header is used to prevent the browser from loading the resource if 
the request's mode is not CORS-safelisted. */
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */ 
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes)
app.use("/transaction", transactionRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000; 
await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */

    // prevents the data from being seeded multiple times - for Dev purposes ONLY
    // await mongoose.connection.db.dropDatabase();
    // // Seed the database with the data from the data.js file
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);



}).catch((error) => console.log(error.message));