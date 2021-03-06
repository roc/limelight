define([
  'licensing/collections/applications-top5authorities-weekly'
],
function (Collection) {
  describe("ApplicationsByAuthorityCollection", function() {
    describe("queryParams", function() {
      it("requests data for the top 5 authorities", function() {
        var collection = new Collection([]);
        
        setupMoment('2013-03-13 06:45:00', collection);
      
        var params = collection.queryParams();
        expect(params.group_by).toEqual('authorityUrlSlug');
        expect(params.limit).toEqual(5);
        expect(params.sort_by).toEqual('_count:descending');
        expect(params.collect).toContain('licenceName');
        expect(params.collect).toContain('authorityName');
      });

    });
    
    describe("parse", function () {
      
      var response;
      beforeEach(function() {
        response = { data: [
          {
            values: [
              {
                _end_at: moment('2013-02-25T00:00:00+00:00'),
                _count: 1,
                _start_at: moment('2013-02-18T00:00:00+00:00')
              },
              {
                _end_at: moment('2013-03-04T00:00:00+00:00'),
                _count: 6,
                _start_at: moment('2013-02-25T00:00:00+00:00')
              },
              {
                _end_at: moment('2013-03-11T00:00:00+00:00'),
                _count: 11,
                _start_at: moment('2013-03-04T00:00:00+00:00')
              }
            ],
            authorityUrlSlug: "westminster",
            authorityName: ['Westminster'],
            licenceName: ['Temporary events notice'],
            _group_count: 3
          },
          {
            values: [
              {
                _end_at: moment('2013-02-25T00:00:00+00:00'),
                _count: 4,
                _start_at: moment('2013-02-18T00:00:00+00:00')
              },
              {
                _end_at: moment('2013-03-04T00:00:00+00:00'),
                _count: 9,
                _start_at: moment('2013-02-25T00:00:00+00:00')
              },
              {
                _end_at: moment('2013-03-11T00:00:00+00:00'),
                _count: 14,
                _start_at: moment('2013-03-04T00:00:00+00:00')
              }
            ],
            authorityUrlSlug: "lambeth",
            authorityName: ['Lambeth'],
            licenceName: ['Temporary events notice'],
            _group_count: 3
          },
          {
            values: [
              {
                _end_at: moment('2013-02-25T00:00:00+00:00'),
                _count: 5,
                _start_at: moment('2013-02-18T00:00:00+00:00')
              },
              {
                _end_at: moment('2013-03-04T00:00:00+00:00'),
                _count: 10,
                _start_at: moment('2013-02-25T00:00:00+00:00')
              },
              {
                _end_at: moment('2013-03-11T00:00:00+00:00'),
                _count: 15,
                _start_at: moment('2013-03-04T00:00:00+00:00')
              }
            ],
            authorityUrlSlug: "bristol",
            authorityName: ['Bristol'],
            licenceName: ['Temporary events notice'],
            _group_count: 3
          }
        ]};
      });
      
      it("sorts by last entry count descending", function () {
        var collection = new Collection(response, { parse: true })
        expect(collection.at(0).get('id')).toEqual('bristol');
        expect(collection.at(1).get('id')).toEqual('lambeth');
        expect(collection.at(2).get('id')).toEqual('westminster');
        
      });
      
      it("uses additional data when available", function() {
        var collection = new Collection(response, { parse: true })
        
        expect(collection.length).toEqual(3);
        var westminster = collection.at(2);
        expect(westminster.get('id')).toEqual('westminster');
        expect(westminster.get('title')).toEqual('Westminster');
        expect(westminster.get('subTitle')).toEqual('Temporary events notice');
        expect(westminster.get('values').at(0).get('_start_at').format('YYYY-MM-DD')).toEqual('2013-02-18');
        expect(westminster.get('values').at(0).get('_end_at').format('YYYY-MM-DD')).toEqual('2013-02-25');
        expect(westminster.get('values').at(0).get('_count')).toEqual(1);
        expect(collection.at(0).get('id')).toEqual('bristol');
        expect(collection.at(0).get('title')).toEqual('Bristol');
        expect(collection.at(0).get('subTitle')).toEqual('Temporary events notice');
      });
      
      it("uses fallback data when additional data is not available", function() {
        
        _.each(response.data, function (group) {
          delete group.authorityName;
          delete group.licenceName;
        });
        
        var collection = new Collection(response, {parse: true});
        
        expect(collection.length).toEqual(3);
        var westminster = collection.at(2);
        expect(westminster.get('id')).toEqual('westminster');
        expect(westminster.get('title')).toEqual('westminster');
        expect(westminster.get('subTitle')).not.toBeDefined();
        expect(westminster.get('values').at(0).get('_start_at').format('YYYY-MM-DD')).toEqual('2013-02-18');
        expect(westminster.get('values').at(0).get('_end_at').format('YYYY-MM-DD')).toEqual('2013-02-25');
        expect(westminster.get('values').at(0).get('_count')).toEqual(1);
        expect(collection.at(0).get('id')).toEqual('bristol');
        expect(collection.at(0).get('title')).toEqual('bristol');
        expect(collection.at(0).get('subTitle')).not.toBeDefined()
      });
    });
  });
});
