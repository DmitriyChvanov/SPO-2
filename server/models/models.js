const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Ticket_item = sequelize.define("ticket_item",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    hotel_id: {type: DataTypes.INTEGER, primaryKey: true},
    fly_id: {type: DataTypes.INTEGER, primaryKey: true},
    contact_info: {type: DataTypes.STRING},
    ticket_id: {type: DataTypes.INTEGER, primaryKey: true},
    price: {type: DataTypes.INTEGER}
})

const Contacts_info = sequelize.define("contacts_info",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone_number: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    birth_date: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true}
})

const Hotel_items = sequelize.define("hotel_items",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER}
})

const Fly_items = sequelize.define("fly_items",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    from: {type: DataTypes.STRING, allowNull: false},
    where: {type: DataTypes.STRING, allowNull: false},
    departure: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER}
})

const News_item = sequelize.define("news_item",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING,allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})

Contacts_info.hasMany(Ticket_item)
Ticket_item.belongsTo(Contacts_info)

Hotel_items.hasMany(Ticket_item)
Ticket_item.belongsTo(Hotel_items)

Fly_items.hasMany(Ticket_item)
Ticket_item.belongsTo(Fly_items)

module.exports = {
    Ticket_item,
    Contacts_info,
    Hotel_items,
    Fly_items,
    News_item
}