import jsonServerProvider from 'ra-data-json-server';

const DataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

export default DataProvider