describe('Iiif', function () {
  describe('getImageUrl', function() {
    it('should return default id for image entries without a service', function() {
      var sample = {
        "@id": "http://dms-data.stanford.edu/data/manifests/BnF/jr903ng8662/canvas/canvas-5",
        "@type": "sc:Canvas",
        "label": "page de garde recto",
        "height": "4785",
        "width": "3760",
        "images": [
          {
            "@id": "http://dms-data.stanford.edu/data/manifests/BnF/jr903ng8662/imageanno/anno-5",
            "@type": "oa:Annotation",
            "motivation": "sc:painting",
            "resource": {
              "@id": "http://stacks.stanford.edu/image/jr903ng8662/T0000005",
              "@type": "dctypes:Image",
              "format": "image/jpeg",
              "height": "4785",
              "width": "3760",
              "default": {
                "service": {
                  "@id": "https://stacks.stanford.edu/image/iiif/jr903ng8662%252FT0000005",
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "profile": "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1"
                }
              }
            },
            "on": "http://dms-data.stanford.edu/data/manifests/BnF/jr903ng8662/canvas/canvas-5"
          }
        ]
      };
      expect(Mirador.Iiif.getImageUrl(sample)).toEqual("https://stacks.stanford.edu/image/iiif/jr903ng8662%252FT0000005");
    });
    
    it('should return IIIF root for image entries with a service', function() {
      var sample = {
        "@id": "http://dms-data.stanford.edu/data/manifests/BnF/jr903ng8662/canvas/canvas-5",
        "@type": "sc:Canvas",
        "label": "page de garde recto",
        "height": "4785",
        "width": "3760",
        "images": [
          {
            "@id": "http://dms-data.stanford.edu/data/manifests/BnF/jr903ng8662/imageanno/anno-5",
            "@type": "oa:Annotation",
            "motivation": "sc:painting",
            "resource": {
              "@id": "http://stacks.stanford.edu/image/jr903ng8662/T0000005",
              "@type": "dctypes:Image",
              "format": "image/jpeg",
              "height": "4785",
              "width": "3760",
              "service": {
                "@id": "https://stacks.stanford.edu/image/iiif/jr903ng8662%252FT0000005",
                "@context": "http://iiif.io/api/image/2/context.json",
                "profile": "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1"
              }
            },
            "on": "http://dms-data.stanford.edu/data/manifests/BnF/jr903ng8662/canvas/canvas-5"
          }
        ]
      };
      expect(Mirador.Iiif.getImageUrl(sample)).toEqual("https://stacks.stanford.edu/image/iiif/jr903ng8662%252FT0000005");
    });
  });
  
  describe('getVersionFromContext', function () {
    it('should identify 2.0', function() {
      var context = 'http://iiif.io/api/image/2/context.json';
      expect(Mirador.Iiif.getVersionFromContext(context)).toEqual('2.0');
    });
    it('should identify 1.1', function() {
      var context = 'http://iiif.io/api/image/1/context.json';
      expect(Mirador.Iiif.getVersionFromContext(context)).toEqual('1.1');
    });
  });
  
  describe('makeUriWithWidth', function () {
    it('should return native.jpg URL for IIIF v1.x', function() {
      expect(Mirador.Iiif.makeUriWithWidth('http://images.waahoo.com/iiif/MYTEST', 512, '1.1')).toEqual('http://images.waahoo.com/iiif/MYTEST/full/512,/0/native.jpg');
    });
    it('should return native.jpg URL for IIIF v2.x', function() {
      expect(Mirador.Iiif.makeUriWithWidth('http://images.waahoo.com/iiif/MYTEST', 512, '2.0')).toEqual('http://images.waahoo.com/iiif/MYTEST/full/512,/0/default.jpg');
    });
  });
  
  xit('getImageHostUrl', function () {
  });
});
