import Role from '../models/Role'

export const createRoles = async() =>{

    try {
        const count = await Role.estimatedDocumentCount();


        if(count > 0)return;
        const values = await Promise.all([ 
          
        new Role({ name:'alumno'}).save(),
        new Role({name:'coordinador'}).save(),
        new Role({name:'orientador'}).save(),
        new Role({name:'tutor'}).save()
       ]);
        
console.log(values);

    } catch (error) {
        console.error(error)
    }
 



};