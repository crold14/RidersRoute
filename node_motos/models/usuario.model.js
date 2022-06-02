const getAll = () => {
    return db.query('select * from usuarios')
}


const create = ({ name, nickname, city, password, description, email, age, img }) => {
    return db.query('INSERT into usuarios (name, nickname, city, password, description, email, age, img) values(?,?,?,?,?,?,?,?);',
        [name, nickname, city, password, description, email, age, img]
    );
}

const getByEmail = (pEmail) => {
    return db.query('select * from usuarios where email = ?', [pEmail])
}
const deleteById = (usuarioId) => {
    return db.query('DELETE FROM usuarios WHERE id = ?', [usuarioId])

}
const getById = (usuarioId) => {
    return db.query('select * from usuarios where id=?', [usuarioId])
}

const changePassword = (id, { password }) => {
    return db.query('UPDATE usuarios set password = ? WHERE id = ?', [password, id])
}


const update = (id, { name, nickname, city, description, email, age, img }) => {
    let sql = "UPDATE usuarios set "
    let arr = []

    if (name) {
        sql += ' name=?,'
        arr.push(name)
    }
    if (nickname) {
        sql += ' nickname=?,'
        arr.push(nickname)
    }
    if (city) {
        sql += ' city=?,'
        arr.push(city)
    }

    if (description) {
        sql += ' description=?,'
        arr.push(description)
    }
    if (email) {
        sql += ' email=?,'
        arr.push(email)
    }
    if (age) {
        sql += ' age=?,'
        arr.push(age)
    }
    if (img) {
        sql += ' img=?,'
        arr.push(img)
    }

    let sqlFin = sql.slice(0, -1)

    sqlFin += ' WHERE id = ?'


    arr.push(id)

    return db.query(sqlFin, arr)

}




module.exports = {
    getAll,
    create,
    getByEmail,
    deleteById,
    getById,
    update,
    changePassword
}