const getAll = () => {
    return db.query('select * from mapas')
}

const getById = (rutaId) => {
    return db.query('select * from mapas where id=?', [rutaId])
}

const create = ({ name, descr, dist, img, dif, latini, longini, latfin, longfin, userId }) => {
    return db.query('INSERT into mapas (name, descr,dist, img, dif, latini, longini, latfin, longfin,userId) values(?,?,?,?,?,?,?,?,?,?);',
        [name, descr, dist, img, dif, latini, longini, latfin, longfin, userId]
    );
}


module.exports = {
    getAll,
    getById,
    create,
}