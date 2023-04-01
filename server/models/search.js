import mongoose from 'mongoose';

const searchSchema = new mongoose.Schema(
  {
    carrier: { type: String, required: true },
    country_code: { type: String, required: true },
    country_name: { type: String, required: true },
    country_prefix: { type: String, required: true },
    international_format: { type: String, required: true },
    line_type: { type: String, required: true },
    local_format: { type: Number, required: true },
    location: { type: String, required: true },
    number: { type: Number, required: true },
    valid: { type: Boolean, default: true },
    isvalid: { type: String, default: "yes" },
     number_id:{type:mongoose.Schema.Types.ObjectId,ref:"Numbers"}
  },
  {
    timestamps: true,
  }
);
const SearchResult = mongoose.model('SearchResult', searchSchema);
export default SearchResult;
