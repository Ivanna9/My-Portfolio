CREATE DATABASE IF NOT EXISTS certificate;

CREATE TABLE certificate.liquor_sales (
    `Invoice/Item Number` String,
    `Date` Date,
    `Store Number` Int32,
    `Store Name` String,
    `Address` String,
    `City` String,
    `Zip Code` String,
    `Store Location` String,
    `County Number` Int32,
    `County` String,
    `Category` Int32,
    `Category Name` String,
    `Vendor Number` Int32,
    `Vendor Name` String,
    `Item Number` Int32,
    `Item Description` String,
    `Pack` Int32,
    `Bottle Volume (ml)` Int32,
    `State Bottle Cost` Float64,
    `State Bottle Retail` Float64,
    `Bottles Sold` Int32,
    `Sale (Dollars)` Float64,
    `Volume Sold (Liters)` Float64,
    `Volume Sold (Gallons)` Float64
) ENGINE = MergeTree()
ORDER BY `Invoice/Item Number`;

