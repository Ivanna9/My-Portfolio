# Diploma Project: Iowa Liquor Sales Analytical Platform

An automated end-to-end system for collecting, processing, and visualizing Iowa State liquor sales data. The environment is fully containerized and managed using **Vagrant** and **Docker**.

## 🏗 System Architecture
The project automatically provisions a Ubuntu virtual machine with the following stack:
* **Infrastructure:** Vagrant (VirtualBox), Docker, Docker Compose.
* **Database:** ClickHouse (High-performance OLAP database).
* **BI Tools:** Grafana (Port 3000) & Metabase for data visualization.
* **ETL:** Python (Pandas + Clickhouse Connect) for processing 3.3 GB of raw data.

## Dataset
Due to GitHub's file size limits, the original 3.3 GB CSV file is hosted externally:
**[Download Iowa_Liquor_Sales.csv from Google Drive](https://drive.google.com/file/d/1GZiIt7gYipiVapOHcMyCBzKwJL0hBBVl/view?usp=sharing)**

> **Note:** Please place the downloaded `Iowa_Liquor_Sales.csv` file into the project root directory before starting the VM.

## 🚀 Quick Start

### 1. Provisioning the Environment
Run the following command in your terminal to set up the entire infrastructure:
```shell
vagrant up