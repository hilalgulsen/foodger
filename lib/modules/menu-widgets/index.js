module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Menu',
    addFields: [
        {
            name: 'sections',
            label: 'Sections',
            type: 'array',
            titleField: 'section',
            schema: [
                {
                    type: 'string',
                    name: 'name',
                    label: 'Name',
                    required : true
                },
                {
                    name: 'meals',
                    label: 'Meals',
                    type: 'array',
                    titleField: 'meal',
                    schema: [
                        {
                            type: 'string',
                            name: 'mealName',
                            label: 'Name',
                            required : true
                        },
                        {
                            type: 'string',
                            name: 'mealDescription',
                            label: 'Description',
                            required : true
                        },
                        {
                            type: 'string',
                            name: 'mealPrice',
                            label: 'Price',
                            required : true
                        }
                    ]
                }
            ]
        }
    ],
    construct: function (self, options) {
        self.pushAsset('stylesheet', 'always', { when: 'always' });
    }
};