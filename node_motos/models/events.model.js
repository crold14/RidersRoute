const getAll = () => {
    return db.query('SELECT e.*, u.name, u.city, u.nickname FROM eventos e, usuarios u where e.idUser = u.id; ')
}

const getAllComents = (idEvent) => {
    return db.query('select c.* , u.name ,u.nickname from comentarios c, usuarios u where c.idEvent= ? and c.idUser=u.id', [idEvent])
}


const create = ({ title, description, iduser }) => {
    return db.query('INSERT into eventos (title, description,iduser) values(?,?,?);',
        [title, description, iduser]
    );
}
const inscribe = ({ idUser, idEvent, }) => {
    return db.query('INSERT into evento_usuario (idUser,idEvent) values(?,?);',
        [idUser, idEvent]
    );
}

const asistencia = (idEvent) => {
    return db.query('SELECT eu.idEvent, u.name FROM evento_usuario eu, usuarios u where eu.idEvent = ? and eu.idUser = u.id; ', [idEvent])
}

const getById = (id) => {
    return db.query('select * from eventos where id=?', [id])
}

const newComentario = ({ comentario, idEvent, idUser }) => {
    console.log(comentario, idEvent, idUser);
    return db.query('insert into comentarios (comentario, idEvent, idUser) values( ? , ?, ?)',
        [comentario, idEvent, idUser]
    )
}

module.exports = {
    getAll,
    create,
    inscribe,
    asistencia,
    getById,
    getAllComents,
    newComentario,
}