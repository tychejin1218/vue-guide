var vm01 = new Vue({ 
    el: '#example01',
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

var vm02 = new Vue({ 
    el: '#example02',
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

var vm03 = new Vue({ 
    el: '#example03',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    watch: {
        firstName: function(val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function(val) {
            this.fullName = this.firstName + ' ' + val 
        }
    }
});

var vm04 = new Vue({ 
    el: '#example04',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        }
    }
});

var vm05 = new Vue({ 
    el: '#example05',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            // getter
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function(newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0]
                this.lastName = names[names.length -  1]
            }
        }
    }
});