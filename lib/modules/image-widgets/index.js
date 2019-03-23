module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Image',
    addFields: [
        {
            name: 'image',
            label: 'Image',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options: {
                limit: 1
            }
        }
    ],
    construct: function (self, options) {
        self.pushAsset('stylesheet', 'always', {when: 'always'});
    }
};