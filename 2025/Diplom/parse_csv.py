import pandas as pd
from clickhouse_connect import get_client

file_path = './Iowa_Liquor_Sales.csv'
chunk_size = 1000

table_name = 'liquor_sales'

client = get_client(
    host='localhost',
    port='8123',
    username='vagrant',
    password='admin123',
    database='certificate'
)

for chunk in pd.read_csv(file_path, chunksize=chunk_size):
    float_columns = ['State Bottle Cost', 'State Bottle Retail', 'Sale (Dollars)', 'Volume Sold (Liters)', 'Volume Sold (Gallons)']
    for col in float_columns:
        chunk[col] = pd.to_numeric(chunk[col].replace('[\$,]', '', regex=True), errors='coerce').fillna(0.0)

    int_columns = ['Pack', 'Bottle Volume (ml)', 'Bottles Sold', 'Category', 'Vendor Number', 'Item Number', 'Store Number', 'County Number']
    for col in int_columns:
        chunk[col] = pd.to_numeric(chunk[col], errors='coerce').fillna(0).astype(int)

    string_columns = ['Invoice/Item Number', 'Store Name', 'Address', 'City', 'Zip Code', 'Store Location', 'County', 'Category Name', 'Vendor Name', 'Item Description']
    for col in string_columns:
        chunk[col] = chunk[col].astype(str).fillna('')

    chunk['Date'] = pd.to_datetime(chunk['Date'], errors='coerce')

    print(chunk)

    client.insert_df(table_name, chunk)

print("Дані успішно занесені.")
