import Realm from 'realm';

class Workout extends Realm.Object {}

Workout.schema = {
  name: 'Workout',
  properties: {
    date:  'string',
    note: 'string',
  }


};

export default new Realm({schema: [Workout], schemaVersion: 1});
