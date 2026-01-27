# DA — Database & Data Warehouse Management — Coursework

This project provides the infrastructure and scripts required to work with the **Mubi Dataset**.

## Repository Structure
* `Vagrantfile` — Configuration for the virtual machine (Ubuntu/MariaDB).
* `parse_mubi.sql` — SQL scripts for data processing and analysis.
* `.gitignore` — Settings to exclude technical files (`.vagrant`) and large archives from Git.

## Database Download
Due to the large file size, the database dump is split into parts and hosted on Google Drive.
**Download link:** [Click here to download files](https://drive.google.com/file/d/1zxq0-GHYRJFkr_pIxamYP4jZ_ENe14mk/view?usp=sharing)

Before starting, download all archive parts (`05_mubi.sql.tar.gz.aa` through `05_mubi.sql.tar.gz.af`) and place them in the project root folder.

## Deployment Instructions

### 1. Launch the Virtual Machine
Ensure you have **Vagrant** and **VirtualBox** installed, then run:
```shell
vagrant up

### Compressing the database dump
```shell
tar cvzf - <filename>.sql | split --bytes=90MB - <filename>.sql.tar.gz.
```

### Unpacking the archive with the database dump
```shell
cat <filename>.sql.tar.gz.* | tar xzvf -
```

### Loading a dataset into MariaDB/MySQL DBMS (OS: Ubuntu Linux, User: root)
```shell
mysql <db_name> < <filename>.sql
```
