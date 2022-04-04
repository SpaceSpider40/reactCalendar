export const DBConfig = {
    name: 'EventsDB',
    version: 1,
    objectStoresMeta: [
      {
        store: 'events',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'event', keypath: 'event', options: { unique: false } }
        ]
      }
    ]
  };