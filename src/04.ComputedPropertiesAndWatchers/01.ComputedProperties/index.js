var vm = new Vue({ 
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        // a computed getter
        reversedMessage: function(){
            // 'this' points to the vm instance
            return this.message.split('').reverse().join('');
        }
    }
});

var vm01 = new Vue({ 
    el: '#example01',
    data: {
        message: 'Hello'
    },
    methods: {
        methodsReversedMessage: function(){
            return this.message.split('').reverse().join('');
        }
    },
    computed: {
        // computed properties are cached based on their reactive dependencies
        computedReversedMessage: function(){
            return this.message.split('').reverse().join('');
        }
    }
});
