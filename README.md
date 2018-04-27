# mixin-promise

Use Simple Schema direct in your method


## install

```cmd
meteor add cesarve:mixin-schema
```

## Usage

```js
//example method creation
import {ValidatedMethod} from 'meteor/mdg:validated-method'
import promiseMixin from 'cesarve:mixin-promise'
import schemaMixin from 'cesarve:mixin-schema'

export const methodUpdate = new ValidatedMethod({
    name: 'methodUpdate',
    mixins: [schemaMixin, promiseMixin],
    schema: new SimpleSchema({  //see cesarve:mixin-schema
        _id: String,
        name: String,
        surname: String,
    }), //
    run({_id,...doc}) {
        if (!Roles.userIsInRole(this.userId,['admin'])){
            throw new Meteor.Error(403, 'Access denied')
        }
        return MyCollection.update(_id, {$set: {...doc, updatedAt: new Date()} })

    }
})
```


```js
//example method called as promise
import {methodUpdate} from './path/to/method'

//to access your schema you can use:

const schema=methodUpdate.schema

 methodUpdate.call({_id: 'xxxx', name:'xxxx', surname:'xxxxxx'},(err,res)=>{
    if (err) return console.error(err)
    console.log('success')
 })

```

