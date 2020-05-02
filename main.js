var counter = new Vue({
    el: '#shopping-app',
    data: {
        state: 'default',
        header: 'Shopping List',
        newItem: '',
        items: [{
                label: 'milk',
                purchased: false,
            },
            {
                label: 'coffe',
                purchased: true,
            },
            {
                label: 'beer',
                purchased: false,
            }
        ]
    },
    methods: {
        saveItem: function () {
            this.items.push({
                label: this.newItem,
                purchased: false,
            }, );
            this.newItem = '';
        },
        changeState(newState) {
            this.state = newState;
            this.newItem = '';
        },
        togglePurchased(item) {
            item.purchased = !item.purchased;
        }
    },

    computed: {
        characterCount() {
            return this.newItem.length;
        },
        reverseItems() {
            return this.items.slice(0).reverse();
        }
    }
})