// const getAll = () => {
//     return db.query('select * from reseñas')
// }
const create = ({ title, coment, iduser, val, idRoute }) => {
    return db.query('INSERT into reseñas (title, coment, iduser, val, idRoute) values(?,?,?,?,?);',
        [title, coment, iduser, val, idRoute]
    );
}
const getById = (idRoute) => {
    return db.query(' SELECT r.*,u.nickname, u.name  FROM  reseñas r, usuarios u WHERE  r.idUser = u.id and r.idRoute=?', [idRoute])

}
module.exports = {
    create,
    getById,
}