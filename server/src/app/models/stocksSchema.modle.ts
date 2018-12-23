import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StocksSchema = new Schema(
    {
        name: String,
        prices: Array
    },
    {
        collection: 'stocks'
    });
