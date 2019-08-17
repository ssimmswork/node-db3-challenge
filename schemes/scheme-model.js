const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

function find(){
    return db('schemes');
};

function findById(id){
    return db('schemes')
    .where({id})
    .first()
   
};

function findSteps(id){
    return db('schemes as s')
        .innerJoin('steps as st', 's.id', 'st.scheme_id' )
        .select('s.id','s.scheme_name', 'st.step_number', 'st.instructions')
        .where({scheme_id: id})
        .orderBy("st.step_number", "asc")
}

function add(scheme){
    return db('schemes').insert(scheme) 
           
}

function addStep(step){
    return db('steps').insert(step)
}

function update(newScheme, id){
    return db('schemes')
        .where({id})
        .update(newScheme)
     

};

function remove(id){
    return db('schemes')
        .where({id})
        .del()
};
