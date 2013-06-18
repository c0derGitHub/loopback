describe('DataSource', function() {
  var memory;
  
  beforeEach(function(){
    memory = asteroid.createDataSource({
      connector: asteroid.Memory
    });
  });

  describe('dataSource.createModel(name, properties, settings)', function() {
    it("Define a model and attach it to a `DataSource`.", function() {
      var Color = memory.createModel('color', {name: String});
      assert.isFunc(Color, 'all');
      assert.isFunc(Color, 'create');
      assert.isFunc(Color, 'updateOrCreate');
      assert.isFunc(Color, 'upsert');
      assert.isFunc(Color, 'findOrCreate');
      assert.isFunc(Color, 'exists');
      assert.isFunc(Color, 'find');
      assert.isFunc(Color, 'findOne');
      assert.isFunc(Color, 'destroyAll');
      assert.isFunc(Color, 'count');
      assert.isFunc(Color, 'include');
      assert.isFunc(Color, 'relationNameFor');
      assert.isFunc(Color, 'hasMany');
      assert.isFunc(Color, 'belongsTo');
      assert.isFunc(Color, 'hasAndBelongsToMany');
      assert.isFunc(Color.prototype, 'save');
      assert.isFunc(Color.prototype, 'isNewRecord');
      assert.isFunc(Color.prototype, 'destroy');
      assert.isFunc(Color.prototype, 'updateAttribute');
      assert.isFunc(Color.prototype, 'updateAttributes');
      assert.isFunc(Color.prototype, 'reload');  
    });
  });

  // describe('dataSource.discover(options, fn)', function() {
  //   it("Discover an object containing properties and settings for an existing data source.", function(done) {
  //     /* example - 
  //     oracle.discover({owner: 'MYORG'}, function(err, tables) {
  //       var productSchema = tables.PRODUCTS;
  //       var ProductModel = oracle.createModel('product', productSchema.properties, productSchema.settings);
  //     });
  //     
  //     */
  //     done(new Error('test not implemented'));
  //   });
  // });
  // 
  // describe('dataSource.discoverSync(options)', function() {
  //   it("Synchronously discover an object containing properties and settings for an existing data source tables or collections.", function(done) {
  //     /* example - 
  //     var tables = oracle.discover({owner: 'MYORG'});
  //     var productSchema = tables.PRODUCTS;
  //     var ProductModel = oracle.createModel('product', productSchema.properties, productSchema.settings);
  //     
  //     */
  //     done(new Error('test not implemented'));
  //   });
  // });

  // describe('dataSource.discoverModels(options, fn) ', function() {
  //   it("Discover a set of models based on tables or collections in a data source.", function(done) {
  //     /* example - 
  //     oracle.discoverModels({owner: 'MYORG'}, function(err, models) {
  //       var ProductModel = models.Product;
  //     });
  //     
  //     */
  //     done(new Error('test not implemented'));
  //   });
  // });
  // 
  // describe('dataSource.discoverModelsSync(options)', function() {
  //   it("Synchronously Discover a set of models based on tables or collections in a data source.", function(done) {
  //     /* example - 
  //     var models = oracle.discoverModels({owner: 'MYORG'});
  //     var ProductModel = models.Product;
  //     */
  //     done(new Error('test not implemented'));
  //   });
  // });

  describe('dataSource.operations()', function() {
    it("List the enabled and disabled operations.", function() {
      // assert the defaults
      // - true: the method should be remote enabled
      // - false: the method should not be remote enabled
      // - 
      existsAndShared('_forDB', false);
      existsAndShared('create', true);
      existsAndShared('updateOrCreate', false);
      existsAndShared('upsert', false);
      existsAndShared('findOrCreate', false);
      existsAndShared('exists', true);
      existsAndShared('find', true);
      existsAndShared('all', true);
      existsAndShared('findOne', true);
      existsAndShared('destroyAll', false);
      existsAndShared('count', true);
      existsAndShared('include', false);
      existsAndShared('relationNameFor', false);
      existsAndShared('hasMany', false);
      existsAndShared('belongsTo', false);
      existsAndShared('hasAndBelongsToMany', false);
      existsAndShared('save', true);
      existsAndShared('isNewRecord', false);
      existsAndShared('_adapter', false);
      existsAndShared('destroy', true);
      existsAndShared('updateAttribute', true);
      existsAndShared('updateAttributes', true);
      existsAndShared('reload', true);
      
      function existsAndShared(name, isRemoteEnabled) {
        var op = memory.getOperation(name);
        assert(op.remoteEnabled === isRemoteEnabled, name + ' ' + (isRemoteEnabled ? 'should' : 'should not') + ' be remote enabled');
      }
    });
  });
});