const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activeSchema = new Schema({
    activecampaign: {type: Array, required: true}
});

const tbl_active = mongoose.model('active_tbl', activeSchema);

module.exports = tbl_active;