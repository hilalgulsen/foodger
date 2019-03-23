module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Image with Description',
    addFields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle'
        },
        {
            type: 'string',
            name: 'imageTitle',
            label: 'Image Title',
            required: true
        },
        {
            type: 'string',
            name: 'imageSubtitle',
            label: 'Image Subtitle',
            required: true
        },
        {
            type: 'area',
            name: 'imageDescription',
            label: 'Image Description',
            options: {
                widgets: {
                    'apostrophe-rich-text': {
                        toolbar: ['Bold', 'Italic']
                    }
                }
            },
            required: true
        },
        {
            name: 'image',
            label: 'Image',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options: { limit: 1, aspectRatio: [4, 3], fileGroups: 'image'},
            required: true
        },
    ],

    construct: function(self, options) {
        self.pushAsset('stylesheet', 'always', { when: 'always' });
    }
};