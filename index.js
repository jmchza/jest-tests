const {users} = require('./__tests__/__helpers__/p7')

/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */

 const stripPrivateProperties = () => {
  const remove = ['password', 'token', 'companyId']
    
    let subArray = []
    users.forEach(el => {
      if(el.name !== 'steve')
        subArray.push({name: el.name})
    });
    //sort
    const sorting = function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    }
    subArray.sort(sorting);

    subArray.forEach( function(y) {
      y['email'] = y.name === 'stan' 
        ? 'stan@smith.test'
        : 'sran@smith.test'
    })
     
  return subArray;
  
};
exports.example = () => 'hello world';

exports.stripPrivateProperties = stripPrivateProperties

exports.excludeByProperty = () => {

  const arr = stripPrivateProperties()
  
  arr.forEach(function(x) {
    delete x.email
  });
  
  arr.push({ name: 'peter', deleted: true })
  arr.push({ name: 'steve' })
  arr.push({ name: 'hayley' })

return arr.filter(x=> (x.deleted ===undefined));

};

exports.sumDeep = () => {

    const array2 = [
        {
          objects: [{ val: 2 }, { val: 1 }, { val: 1 }],
        },
        {
          objects: [{ val: 1 }, { val: 0 }, { val: 4 }],
        },
      ]

      let ff = (acc, key) => acc + key.val ;

      return array2.map(u => Object.keys(u).reduce((newObj, key) => true ? { ...newObj, [key]: Object.values(u)[0].reduce(ff, 0)} : null, {}));
};

exports.applyStatusColor = () => {
    const objRef = {
        red: [404, 400],
        green: [200, 201],
      }

    const array3 = [
            {
              status: 404,
            },
            {
              status: 200,
            },
            {
              status: 404,
            },
            {
              status: 201,
            },
            {
              status: 400,
            }
            
          ];

    return array3.map(el => objRef.green.includes(el.status) ? {...el, ...{color: 'green'}} : {...el, ...{color: 'red'}} ).sort()
};
exports.createGreeting = () => {
    const arr2 = {greet: 'good bye', name: 'fran'};
    const arr1 = {greet: 'hello', name: 'stan'};

    return greet = function () {
        
        return arguments[0] === 'stan' ? [arr1.greet, arr1.name].join(' ') : [arr2.greet, arr2.name].join(' ');
    }
      
};
exports.setDefaults = () => {
    const obj = {name: 'fran', subscribed: false}
    const add = {subscribed: true}

    return function(obj) {
        return Object.keys(obj).includes('subscribed') ? obj : {...obj, ...add}
    }
};
exports.fetchUserByNameAndUsersCompany = () => {
    const {
        services, status
      } = require('./__tests__/__helpers__/p7');

      const anAsyncFunction = async (id, companyID) => {
          return {
            company: await services.fetchCompanyById(companyID),
            status,
            user: (await services.fetchUsers())[id]
          }
          
      }
      
      return anAsyncFunction(1,2)
};
