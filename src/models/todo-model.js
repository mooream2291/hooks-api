'use strict';

class Place {

    constructor() {
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if (id) {
            return this.db.find(record => record.id === id);
        } else {
            return this.db;
        }
    }

    create(obj) {
            obj.id = ++this.id,
        //is this was this.id++ then the index and id would match up
        this.db.push(obj);
        return obj;
    }
//this is where the request hits first, grabbing stuff and then need to call method of update to pass what it requires, then return updated record back
    update(id, obj) {
        console.log(id);
        if (!id) { return null }
        let dbObj = this.db.find(record => record.id === parseInt(id));
        dbObj = {...dbObj, ...obj};
            return dbObj;
    }

    delete(id) {
        let recordId = parseInt(id);
        if(id) {
        console.log(id);
        this.db = this.db.filter(record => record.id == !recordId);
        console.log(this.db);
        }
//use array method of findIndex() use a .then use a splice()
        return null;
    }
}

module.exports = Place;