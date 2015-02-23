# RESTier

```js
var config = {
  host: '',
  namespace: '/api/v0',
  
  resources: {
    rooms: {
      path: '/rooms',
      resources: {
        keys: {
          path: '/{id}/keys'
        },
        equipment: {
          id: 'name',
          path: '/{id}/equipment',
          resources: {
            specs: {
              path: '/{id}/specs'
            }
          }
        }
      }
    },
    cars: {
      namespace: '/api/v1',
      path: '/cars',
      resources: {
        brands: {
          path: '/brands'
        }
      }
    }
  }
}

var store = new Store(config)
```

### Manipulating resources

```js
var room = store.resource('rooms').id(5) // rooms/5

room.retrieve().then(...)
room.set('name', 'Agon').save().then(...)
room.get('name') // 'Agon'

var tvSpecs = store.resource('rooms').id(1)
                      .resource('equipment').id('tv')
                      .resource('specs') // rooms/1/equipment/tv/specs
                      
// tvSpecs = room.resource('equipment').id('tv').resource('specs') is equivalent

tvSpecs.retrieve().then(function(specs) {
  console.log(specs)
})

var roomKeys = store.resource('rooms').id(5).resource('keys') // rooms/5/keys

roomKeys.fetch().then(function(keys) {
  // keys == [ ... ]
})

var brands = store.resource('cars').resource('brands')
// brands instanceOf Collection === true
brands.fetch().then(function(list) {
  // list == [ ... ]
})
```

### Implementation

```js
Model.prototype = {
  save: 
  retrieve:
  delete:
  set:
  get:
  resource:
}

Collection.prototype = {
  create:
  fetch:
  id:
  resource:
}
```














