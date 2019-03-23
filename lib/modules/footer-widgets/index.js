module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Footer',
    addFields: [
        {
            name: 'facebookLink',
            type: 'url',
            label: 'Facebook Page URL',
            required: true
        },
        {
            name: 'twitterLink',
            type: 'url',
            label: 'Twitter Page URL',
            required: true
        },
        {
            name: 'instagramLink',
            type: 'url',
            label: 'Instagram Page URL',
            required: true
        },
        {
            name: 'contactPhone',
            type: 'string',
            label: 'Phone Number',
            required: true
        }
    ],
    construct: function(self, options) {
        self.pushAsset('stylesheet', 'always', { when: 'always' });
    }
};