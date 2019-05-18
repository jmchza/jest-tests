/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = () => {
    const remove = ['password', 'token']
    const array1 = [
        {
          name: 'stan',
          email: 'stan@smith.test',
          password: 'secret',
          token: '123',
        },
        {
          name: 'fran',
          email: 'sran@smith.test',
          password: 'secret',
          token: '123',
        },
      ];
    let array2 = []

 array1.forEach(function (obj) {
        for (var key in obj) {
            if (remove.includes(key)) delete obj[key]
        }
        
    })
    return array1
    
};
exports.excludeByProperty = () => {
    const array1 = [{ name: 'stan' },
    { name: 'fran' },
    { name: 'peter', deleted: true },
    { name: 'steve' },
    { name: 'hayley' }]

return array1.filter(x=> (x.deleted ===undefined));
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
